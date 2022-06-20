import React from 'react';
import styles from './Home.module.scss';
import Pagelayout from '../../components/PageLayout/Pagelayout';

const Home = () => {
  return (
    <Pagelayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.category}>
            <img src="https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/women-shopping-992443.jpg" alt="women"/>
            <button className={styles.btn}>Womens</button>
          </div>
          <div className={styles.category}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ2Ag_ASoyJIrswTNUI6dyAuc3rziz_KAiQ&usqp=CAU" alt="men"/>
            <button className={styles.btn}>Mens</button>
          </div>
        </div>
      </div>
    </Pagelayout>
  )
}

export default Home;
