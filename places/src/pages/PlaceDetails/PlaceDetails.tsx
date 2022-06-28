import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import PlaceTypeIcon from '../../components/PlaceTypeIcon/PlaceTypeIcon';
import DateFormat from '../../constants/Dateformat';
import { RootState } from '../../redux';
import { dislikePlacesDetails, getPlacesDetails, likePlacesDetails } from '../../redux/PlacesDetails/ActionCreators';
import formatCapacity from '../../utils/formatCapacity';
import formatDate from '../../utils/formatDate';
import styles from './PlaceDetails.module.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const PlaceDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const placeDetails = useSelector((state: RootState) => state.placesDetails);

  const handleLikeClick = () => {
    dispatch(likePlacesDetails(id!));
  }
  const handleDisLikeClick = () => {
    dispatch(dislikePlacesDetails(id!));
  }

  useEffect(() => {
    dispatch(getPlacesDetails(id!))
  }, [id])

  const {
    address,
    capacity,
    createdAt,
    description,
    imageSrc,
    type,
    likes,
    isLiked
  } = placeDetails[id!] || {};

  const isLoading = placeDetails[id!] === undefined

  if(placeDetails[id!] === null){
    return  (
      <div></div>
    )
  }
  return (
    <PageLayout>
      <div>
        <Card>
          {isLoading && <Skeleton variant="rectangular" height={500} />}
          {imageSrc && <CardMedia
            component="img"
            alt="image"
            height="500"
            image={imageSrc}
          />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {address}
              {isLoading && <Skeleton width="33%" variant='text'/>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description && <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>}
              {isLoading && <Skeleton variant="text" />}
              {isLoading && <Skeleton variant="text" />}
              {isLoading && <Skeleton variant="text" />}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" className={styles.container}>
              {type !== undefined && <PlaceTypeIcon type={type} />}
              {capacity !== undefined && <p>{formatCapacity(capacity)}</p>}
              {createdAt && <p>{formatDate(createdAt, DateFormat.LongDate)}</p>}
              {isLoading && <Skeleton width="33%" variant="text" />}
            </Typography>
          </CardContent>
          <CardActions>
            {!isLiked && <Button size="small" disabled={isLoading} onClick={handleLikeClick}>{likes} Like</Button>}
            {isLiked && <Button size="small" disabled={isLoading} onClick={handleDisLikeClick} color="error">{likes} Dislike</Button>}
          </CardActions>
        </Card>
      </div>
    </PageLayout>
  )
};

export default PlaceDetails;
