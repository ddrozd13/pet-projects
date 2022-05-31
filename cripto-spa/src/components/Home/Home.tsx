import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getAllCoinsAction } from '../../store/GetCoins/ActionCreator';
import PageLayout from '../PageLayout/PageLayout';
import Spinner from '../Spinner/Spinner';
import styles from './Home.module.scss';
import { round } from 'lodash';
import clsx from 'clsx';

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { coins } = useSelector((state: RootState) => state.allCoins);

  useEffect(() => {
    dispatch(getAllCoinsAction());
  }, [dispatch]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          {!coins && <Spinner />}
          <div className={styles.table}>
            <table cellSpacing="0">
              <caption>Cryptocurrency Prices by Market Cap</caption>
              <tbody>
                <tr className={styles.table_header}>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>24h changes</th>
                  <th>Market Cap</th>
                </tr>
                {coins && coins.map((coin) => {
                  return (
                    <tr key={coin.id} className={styles.table_body}>
                      <th>{coin.name}</th>
                      <td>{round(coin.priceUsd, 6)}</td>
                      <td className={clsx(Math.sign(coin.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}>{round(coin.changePercent24Hr, 2)}%</td>
                      <td>{round(coin.marketCapUsd, 2)}</td>
                    </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;
