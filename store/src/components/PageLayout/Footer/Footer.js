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
            <li className={styles.footer_li}>ООО “РАВР ФЭШН”</li>
            <li className={styles.footer_li}>УНП 391739404</li>
            <li className={styles.footer_li}>211392, ул. Доминиканская 33А/1- пом.2, <br /> г. Орша, Витебская обл.</li>
            <li className={styles.footer_li}>телефон для связи: +375 (29) 365-66-61</li>
            <li className={styles.footer_li}>режим работы: <br />  Понедельник-пятница, <br /> с 8:00 до 17:00</li>
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
            <img src="https://rwr.by/wp-content/themes/sober/images/Logo/Rawr_Logo_lettering.png" alt="logo" />
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
        <div className={styles.footer_right}>
          <ul>
            <li className={styles.footer_li}>покупателям</li>
            <li className={styles.line}></li>
            <div className={styles.buyers}>
              <li className={styles.buyers_buttons}>ищем таланты</li>
              <li className={styles.buyers_buttons}>политика конфиденциальности</li>
              <li className={styles.buyers_buttons}>ответы на вопросы</li>
              <li className={styles.buyers_buttons}>как измерять?</li>
              <li className={styles.buyers_buttons}>сотрудничество</li>
              <li className={styles.buyers_buttons}>условия рассрочки</li>
              <li className={styles.buyers_buttons}>оплата</li>
              <li className={styles.buyers_buttons}>доставка</li>
              <li className={styles.buyers_buttons}>Контакты</li>
              <li className={styles.buyers_buttons}>Возврат и обмен</li>
              <li className={styles.buyers_buttons}>публичная оферта</li>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.production}>&#169; Production by @ddrozd13</div>
    </div>
  )
}

export default Footer;
