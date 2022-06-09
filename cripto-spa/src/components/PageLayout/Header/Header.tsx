import { FC, useState } from 'react';
import styles from './Header.module.scss';
import Case from '../../../images/case.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { round } from 'lodash';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import CaseCoins from '../../Form/CaseCoins/CaseCoins';
import { caseCounter, caseDifference, casePercent } from '../../../utils/caseCounter';
import { signMath } from '../../../utils/Math';
import Menu from './Menu/Menu';

const Header: FC = () => {
  const [activeModalCase, setActiveModalCase] = useState(false);
  const navigate = useNavigate();
  const { coins } = useSelector((state: RootState) => state.allCoins);

  return (
    <header className={styles.container}>
      <div className={styles.container_wrapper}>
        <nav className={styles.navigation}>
          {!coins && (
            <ul className={styles.navigation_list}>
              <li className={styles.navigation_list_item}>
                Bitcoin
                <span className={styles.case_container_subtitle}>0</span>
              </li>
              <li className={styles.navigation_list_item}>
                Ethereum
                <span className={styles.case_container_subtitle}>0</span>
              </li>
              <li className={styles.navigation_list_item}>
                Tether
                <span className={styles.case_container_subtitle}>0</span>
              </li>
            </ul>
          )}
          <ul className={styles.navigation_list}>
            {coins && coins.slice(0, 3).map((coin) => (
              <li onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id} className={styles.navigation_list_item}>
                {coin.name}
                <span
                  className={styles.case_container_subtitle}
                >
                  {round(coin.priceUsd, 3)}
                  &nbsp;
                  USD
                  &nbsp;
                  <span
                    className={clsx(Math.sign(coin.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                  >
                    {signMath(coin.changePercent24Hr)}
                    {round(coin.changePercent24Hr, 2)}
                  </span>
                </span>
              </li>

            ))}
          </ul>
          <Menu coins={coins} />
        </nav>
        <div className={styles.case} onClick={() => setActiveModalCase(true)}>
          <img src={Case} alt="Case" className={styles.case_image}/>
          <div className={styles.case_container}>
            <p className={styles.case_container_title}>My case</p>
            <div className={styles.case_container_subtitle}>
              {caseCounter()} USD
              <span
                className={clsx(Math.sign(casePercent()) === -1 || -0 ? styles.red : styles.green)}
              >
                &nbsp;
                {signMath(casePercent())}
                {round(casePercent(), 4)}
                &nbsp;
              </span>
              (
              <span className={clsx(Math.sign(caseDifference(coins)) === -1 || -0 ? styles.red : styles.green)}>
              {signMath(caseDifference(coins))}{caseDifference(coins)} %
              </span>
              )
            </div>
          </div>
        </div>
      </div>
      <CaseCoins activeModal={activeModalCase} setActiveModal={setActiveModalCase} />
    </header>
  );
};

export default Header;
