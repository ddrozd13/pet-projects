import React, { FC, useState } from 'react';
import styles from './Header.module.scss';
import Case from '../../../images/case.svg';
import Modal from '../../Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { round } from 'lodash';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import CaseCoins from '../../Form/CaseCoins/CaseCoins';
import { caseCounter, caseDifference, casePercent } from '../../../utils/caseCounter';


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
                <li>
                  Bitcoin
                  <span>0</span>
                </li>
                <li>
                  Ethereum
                  <span>0</span>
                </li>
                <li>
                  Tether
                  <span>0</span>
                </li>
              </ul>
            )}
            {coins && (
              <ul className={styles.navigation_list}>
                <li onClick={() => navigate(`/coin/${coins[0].id}`)}>
                  {coins[0].name}
                  <span
                    className={styles.case_container_subtitle}
                  >
                    {round(coins[0].priceUsd, 3)}
                    &nbsp;
                    USD
                    &nbsp;
                    <span
                      className={clsx(Math.sign(coins[0].changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                    >
                      {Math.sign(coins[0].changePercent24Hr) !== -1 || -0 ? '+' : ''}
                      {round(coins[0].changePercent24Hr, 2)}
                    </span>
                  </span>
                </li>
                <li onClick={() =>  navigate(`/coin/${coins[1].id}`)}>
                  {coins[1].name}
                  <span
                    className={styles.case_container_subtitle}
                  >
                    {round(coins[1].priceUsd, 3)}
                    &nbsp;
                    USD
                    &nbsp;
                    <span
                      className={clsx(Math.sign(coins[1].changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                    >
                      {Math.sign(coins[1].changePercent24Hr) !== -1 || -0 ? '+' : ''}
                      {round(coins[1].changePercent24Hr, 2)}
                    </span>
                  </span>
                </li>
                <li onClick={() => navigate(`/coin/${coins[2].id}`)}>
                  {coins[2].name}
                  <span
                    className={styles.case_container_subtitle}
                  >
                    {round(coins[2].priceUsd, 4)}
                    &nbsp;
                    USD
                    &nbsp;
                    <span
                      className={clsx(Math.sign(coins[2].changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                    >
                      {Math.sign(coins[2].changePercent24Hr) !== -1 || -0 ? '+' : ''}
                      {round(coins[2].changePercent24Hr, 4)}
                    </span>
                  </span>
                </li>
              </ul>
            )}
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
                {Math.sign(casePercent()) !== -1 || -0 ? '+' : ''}
                {round(casePercent(), 4)}
                &nbsp;
              </span>
              ({caseDifference(coins)} %)
            </div>
          </div>
        </div>
      </div>
      <CaseCoins activeModal={activeModalCase} setActiveModal={setActiveModalCase} />
    </header>
  )
}

export default Header;
