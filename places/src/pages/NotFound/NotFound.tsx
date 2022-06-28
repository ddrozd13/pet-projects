import { FC } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import styles from './NotFound.module.scss';
import NotFoundImageSrc from './not-found.jpg';


const NotFound: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <img src={NotFoundImageSrc} alt="logo"/>
        <p className={styles.title}>Not Found</p>
      </div>
    </PageLayout>
  )
};

export default NotFound;
