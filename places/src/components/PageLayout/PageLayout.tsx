import { Alert, AppBar, Button, Container, Snackbar } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPlace } from '../../api/Places';
import { RootState } from '../../redux';
import { createPlace, getPlaces } from '../../redux/Places/ActionCreators';
import { ClosePlaceSafePopup, OpenPlaceSafePopup } from '../../redux/PopupManagement/ActionCreator';
import CreateSafePlacePopup from '../CreateSafePlacePopup/CreateSafePlacePopup';
import { IValidateCreateSafePlaceFormData } from '../CreateSafePlacePopup/validateCreateSafePlaceForm';
import styles from './PageLayout.module.scss';

const PageLayout: FC = ({children}) => {
  const navigate = useNavigate();
  const { isCreateSafePlacePopupOpen } = useSelector((state: RootState) => state.popupManagement);
  const [isSuccessToasterShown, setIsSuccessToasterShown] = useState(false);
  const dispatch = useDispatch();
  const handleGoToHome = (): void => {
    navigate('/');
  };
  const handleAddSafePlace = () => {
    dispatch(OpenPlaceSafePopup());
  };
  const handleOnSave = async (data: IValidateCreateSafePlaceFormData) => {
    try {
      const newPlace: IPlace = await (dispatch(createPlace(data)) as any).unwrap();
      setIsSuccessToasterShown(true);
      dispatch(ClosePlaceSafePopup());
      dispatch(getPlaces());

      navigate(`/places/${newPlace.id}`)
    }catch(error) {
      setIsSuccessToasterShown(true);
    }

  };
  const handleOnClose = () => {
    setIsSuccessToasterShown(false);
  };

  return (
    <div className={styles.mainContainer}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.container}>
          <div className={styles.logo} onClick={handleGoToHome}>Ukraine</div>
          <Button variant='contained' color='secondary' onClick={handleAddSafePlace}>Add New Safe Place</Button>
        </Container>
      </AppBar>
      {children}
      { isCreateSafePlacePopupOpen && <CreateSafePlacePopup onSave={handleOnSave}/>}
      <Snackbar open={isSuccessToasterShown} autoHideDuration={2000} onClose={handleOnClose}>
        <Alert>
          New Safe Place Has Been Created!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PageLayout;
