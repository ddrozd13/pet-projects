import { Button, MenuItem, Select, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClosePlaceSafePopup } from '../../redux/PopupManagement/ActionCreator';
import PopupLayout from '../PopupLayout/PopupLayout';
import { PlaceType } from '../../api/Places';
import PlaceTypeIcon from '../PlaceTypeIcon/PlaceTypeIcon';
import styles from './CreateSafePlacePopup.module.scss';
import validateCreateSafePlaceForm, { IValidateCreateSafePlaceFormData, IValidateCreateSafePlaceFormResult } from './validateCreateSafePlaceForm';
import AppMarkdownError from '../AppMarkdownError/AppMarkdownError';

interface ICreateSafePlacePopupProps {
  onSave: (data: IValidateCreateSafePlaceFormData) => Promise<void>;
}
const CreateSafePlacePopup: FC<ICreateSafePlacePopupProps> = ({ onSave }) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [type, setType] = useState(PlaceType.Basement);
  const [capacity, setCapacity] = useState(10);
  const [errors, setErrors] = useState<IValidateCreateSafePlaceFormResult>({});
  const [isLoading, setIsLoading] = useState(false);


  const handleOnChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setErrors({...errors, address: undefined });
  };
  const handleOnChangeImageSrc = (event: ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.value);
    setErrors({...errors, imageSrc: undefined });
  };
  const handleOnChangeCapacity = (event: ChangeEvent<HTMLInputElement>) => {
    setCapacity(Number(event.target.value));
    setErrors({...errors, capacity: undefined });
  };
  const handleOnChangeDescription = (value: string | undefined) => {
    setDescription(value || '');
    setErrors({...errors, description: undefined });
  }

  const handleOnClose = () => {
    dispatch(ClosePlaceSafePopup());
  };
  const handleOnSave = async () => {
    setIsLoading(true);
    try {
      await onSave({ address, capacity, description, imageSrc, type });
    } finally {
      setIsLoading(false);
    }
  };
  const isCreateDisabled = () => {
    const newErrors = validateCreateSafePlaceForm({ address, description, capacity, imageSrc, type });
    return Object.keys(newErrors).length > 0;
  };
  const handleOnBlur = (key: keyof IValidateCreateSafePlaceFormResult) => () => {
    const newErrors = validateCreateSafePlaceForm({ address, description, capacity, imageSrc, type });
    setErrors({ ...errors, [key]: newErrors[key]});
  };

  return (
    <PopupLayout title="Create Safe Place" onClose={handleOnClose} key="key">
      <div className={styles.container}>
        <TextField
          error={!!errors.address}
          helperText={errors.address}
          placeholder="Address"
          value={address}
          onChange={handleOnChangeAddress}
          onBlur={handleOnBlur('address')}
        />
        <AppMarkdownError
          error={!!errors.description}
          helperText={errors.description}
          onBlur={handleOnBlur('description')}
          onChange={handleOnChangeDescription}
          value={description}
        />
        <TextField
          error={!!errors.imageSrc}
          helperText={errors.imageSrc}
          placeholder="ImageSrc"
          value={imageSrc}
          onChange={handleOnChangeImageSrc}
          onBlur={handleOnBlur('imageSrc')}
        />
        <Select value={type} onChange={(event) => setType(event.target.value as PlaceType)}>
          {Object.values(PlaceType).map((currentPlaceType) => (
            <MenuItem value={currentPlaceType}>
              <PlaceTypeIcon type={currentPlaceType} />
              {currentPlaceType.charAt(0).toUpperCase() + currentPlaceType.slice(1)}
            </MenuItem>
          ))}
        </Select>
        <TextField
          error={!!errors.capacity}
          helperText={errors.capacity}
          placeholder="Capacity"
          type="number"
          value={capacity}
          onChange={handleOnChangeCapacity}
          onBlur={handleOnBlur('capacity')}
        />
        <div>
          <Button color="secondary" onClick={handleOnClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            disabled={isCreateDisabled()}
            onClick={handleOnSave}
          >
            {isLoading ? 'Loading...' : 'Create Safe Place'}
          </Button>
        </div>
      </div>
    </PopupLayout>
  );
};

export default CreateSafePlacePopup;
