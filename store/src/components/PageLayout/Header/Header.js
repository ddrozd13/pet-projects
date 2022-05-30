import styles from './Header.module.scss';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate  = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <ul className={styles.navigation}>
          <li>Новинки</li>
          <li>Мужчины</li>
          <li>Женщины</li>
        </ul>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <div>RAWR</div>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('register')}
          >
            login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header;
