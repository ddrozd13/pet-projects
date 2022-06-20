import styles from './Footer.module.scss';
import React from 'react'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.footer_left}>
          <ul>
            <li className={styles.footer_li}>о нас</li>
            <li className={styles.line}></li>
            <li className={styles.footer_li}>***********************************************</li>
            <li className={styles.footer_li}>***********************************************</li>
            <li className={styles.footer_li}>***********************************************</li>
            <li className={styles.footer_li}>телефон для связи: +375 (25) 523-39-66</li>
            <li className={styles.footer_li}>***********************************************</li>
          </ul>
        </div>
        <div className={styles.footer_center}>
          <div className={styles.footer_social}>
            <li className={styles.icons}>
              <a href='https://vk.com/rawwwr_clothing'>
                <img src="https://img.icons8.com/fluency/48/000000/vk-circled.png" alt="vk" />
              </a>
            </li>
            <li className={styles.icons}>
              <a href='https://www.pinterest.ru/rawwwrstore'>
                <img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" alt="pinterest" />
              </a>
            </li>
            <li className={styles.icons}>
              <a href='https://www.instagram.com/rawwwr.minsk/?igshid=ievharxkgzwv'>
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt='inst'/>
              </a>
            </li>
          </div>
          <div>
            <h1 >Your Logo</h1>
          </div>
          <div className={styles.footer_bottom}>
            <ul>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card1.png" alt="logo" />
              </li>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card2.png" alt="logo" />
              </li>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card3.png" alt="logo" />
              </li>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card4.png" alt="logo" />
              </li>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card5.png" alt="logo" />
              </li>
              <li className={styles.bottom_icons}>
                <img src="https://rwr.by/wp-content/themes/sober/images/Icons/Card/desctop/Card6.png" alt="logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.production}>&#169; Production by @ddrozd13</div>
    </div>
  )
}

export default Footer;
