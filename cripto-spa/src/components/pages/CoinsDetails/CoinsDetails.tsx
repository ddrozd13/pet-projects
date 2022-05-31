import styles from './CoinsDetails.module.scss';
import React, { FC } from 'react'
import PageLayout from '../../PageLayout/PageLayout';
import { useNavigate, useParams } from 'react-router-dom';

const CoinsDetails: FC = () => {
  const { coin } = useParams();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.routes}>
            <ul>
              <li className={styles.routes_route} onClick={() => navigate('/')}>Main</li>
              <li className={styles.routes_line}></li>
              <li className={styles.routes_route}>{coin?.toUpperCase()}</li>
            </ul>
            <span className={styles.routes_goBack} onClick={() => navigate('/')}>Go back</span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CoinsDetails;
function useNavigation() {
  throw new Error('Function not implemented.');
}

