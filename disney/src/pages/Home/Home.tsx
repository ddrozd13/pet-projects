import { FC, useEffect,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../../components/PageLayout/PageLayout';
import { getAllPersonsAction } from '../../redux/Persons/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './Home.module.scss';


const Home: FC= () => {
  const { persons, filterPerson } = useSelector((state: RootState) => state.getAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPersonsAction())
  }, [dispatch]);

  const updateFilter = persons?.filter(hero =>
    (filterPerson.films === null && filterPerson.shortFilms === null && filterPerson.videoGames === null && filterPerson.tvShows === null) ||
    (filterPerson.films !== null && hero.films.length !== 0) ||
    (filterPerson.shortFilms !== null && hero.shortFilms.length !== 0) ||
    (filterPerson.tvShows !== null && hero.tvShows.length !== 0) ||
    (filterPerson.videoGames !== null && hero.videoGames.length !== 0)
  );

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.section}>
            <div className={styles.section_content}>
              <div className={styles.content_details}>
                <div className={styles.content_title}>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/hb_disney_doctorstrangeinthemultiverseofmadness_logo_22_5de5bd05.png" alt="Content"/>
                </div>
                <div className={styles.content_description}>
                  Tickets are now on sale. Experience it only in theaters May 6.
                </div>
                <a href="https://bycard.by/afisha/minsk/kino/2767?date=2022-04-07" className={styles.content_button}>
                  Get tickets
                </a>
              </div>
            </div>
          </div>
          {!updateFilter && (
            <div className={styles.container_Grid}>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
              <div className={styles.Grid_element}></div>
            </div>
          )}
          <div className={styles.container_cards}>
            {updateFilter && updateFilter.map((info) => (
              <a href={`/details/${info._id}`} key={info._id} className={styles.container_cardInfo} >
                <img src={info.imageUrl} alt={info.name} className={styles.container_cardInfo_image}/>
                <div className={styles.container_cardInfo_name}>{info.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>


  )
};

export default Home;