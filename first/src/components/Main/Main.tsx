import React, { FC, useEffect, useState } from 'react'
import PageLayout from '../PageLayout/PageLayout';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import getDogs, { IGetDog } from '../api/getDogs';
import styles from './Main.module.scss';



const Main: FC = () => {
  const [dogs, setDogs] = useState<IGetDog>();

  const fetchDogs = async () => {
    const dogsPhoto = await getDogs();
    setDogs(dogsPhoto);
  };

  useEffect(() => {
    fetchDogs();
  }, [])

  return (
    <PageLayout>
      <Splide
        aria-label="Dogs"
        hasTrack
        options={{
          wheel: true,
          direction: 'ttb',
          height   : '46rem',
        }}
        style={{
          marginTop: '20px'
        }}
      >
        {dogs?.message && dogs.message.slice(0, 20).map((dog) => (
          <SplideSlide key={dog} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={dog} alt={dog} className={styles.photos}/>
          </SplideSlide>
        ))}
      </Splide>
    </PageLayout>
  );
};

export default Main;
