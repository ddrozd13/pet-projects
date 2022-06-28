import { Skeleton} from '@mui/material';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import { getPersonAction } from '../../redux/Persons/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './PersonDetail.module.scss';

const PersonDetails: FC= () => {
  const { person } = useSelector((state: RootState) => state.getPerson);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonAction(Number(id)));
  }, [id]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_card}>
            {!person && <Skeleton variant="rectangular" height={800} />}
            {person && <img alt="CardPhoto" src={person.imageUrl} />}
            <div className={styles.cardContent}>
              <div className={styles.name}>
                {person?.name}
                {!person && <Skeleton width="33%" variant='text' />}
              </div>
              <ul className={styles.films}>
                <strong>Films: {person?.films.length === 0 && <strong className={styles.red}>None</strong>}</strong>
                {!person?.films && <Skeleton width="90%" variant="text" />}
                {person?.films.length !== 0 && person?.films.map(film => (
                  <li key={film}>"{film}"</li>
                ))}
              </ul>
              <ul className={styles.films}>
                <strong>Short-films: {person?.shortFilms.length === 0 && <strong className={styles.red}>None</strong>}</strong>
                {!person?.shortFilms && <Skeleton width="80%" variant="text" />}
                {person?.shortFilms.length !== 0 && person?.shortFilms.map(film => (
                  <li key={film}>"{film}"</li>
                ))}
              </ul>
              <ul className={styles.films}>
                <strong>Tv-Shows: {person?.tvShows.length === 0 && <strong className={styles.red}>None</strong>}</strong>
                {!person?.tvShows && <Skeleton width="80%" variant="text" />}
                {person?.tvShows.length !== 0 && person?.tvShows.map(film => (
                  <li key={film}>"{film}"</li>
                ))}
              </ul>
              <ul className={styles.films}>
                <strong>Video-games: {person?.videoGames.length === 0 && <strong className={styles.red}>None</strong>}</strong>
                {!person?.tvShows && <Skeleton width="78%" variant="text" />}
                {person?.videoGames.length !== 0 && person?.videoGames.map(film => (
                  <li key={film}>"{film}"</li>
                ))}
              </ul>
              <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
};

export default PersonDetails;