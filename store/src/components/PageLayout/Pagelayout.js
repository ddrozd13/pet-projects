import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './PageLayout.module.scss';

const Pagelayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Pagelayout;
