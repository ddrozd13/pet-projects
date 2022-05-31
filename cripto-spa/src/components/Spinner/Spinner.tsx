import clsx from 'clsx';
import { FC } from 'react';
import styles from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.inner, styles.one)}></div>
      <div className={clsx(styles.inner, styles.two)}></div>
      <div className={clsx(styles.inner, styles.three)}></div>
    </div>
  )
}

export default Spinner
