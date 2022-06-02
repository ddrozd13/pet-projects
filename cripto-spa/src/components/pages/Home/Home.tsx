import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { getAllCoinsAction } from '../../../store/GetCoins/ActionCreator';
import PageLayout from '../../PageLayout/PageLayout';
import Spinner from '../../Spinner/Spinner';
import styles from './Home.module.scss';
import { round } from 'lodash';
import clsx from 'clsx';
import Tooltip from '../../Tooltip/Tooltip';
import Pagination from '../../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../../../utils/moneyFormat';
import Modal from '../../Modal/Modal';
import { ICoin } from '../../../api/Types';
import AddCoin from '../../Form/AddCoin/AddCoin';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { coins, currentPage, perPage } = useSelector((state: RootState) => state.allCoins);
  const [activeModal, setActiveModal] = useState(false);
  const [coin, setCoin] = useState<string | undefined>(undefined);

  const handleFormAdd = (event: React.MouseEvent<HTMLSpanElement>) => {
    setActiveModal(true)
    setCoin(event.currentTarget.dataset.id)
  }

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
                  <th></th>
                </tr>
                {coins && coins.slice((currentPage - 1) * perPage, (currentPage * perPage)).map((coin) => {
                  return (
                    <tr key={coin.id} className={styles.table_body} onClick={() => navigate(`/coin/${coin.id}`)}>
                      <th>{coin.name}</th>
                      <td>$ {round(coin.priceUsd, 6)}</td>
                      <td
                        className={clsx(Math.sign(coin.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                      >
                        {Math.sign(coin.changePercent24Hr) !== -1 || -0 ? '+' : ''}
                        {round(coin.changePercent24Hr, 3)}
                        %
                      </td>
                      <td>$ {numberWithCommas(round(Number(coin.marketCapUsd.toString().slice(0, -6))))}</td>
                      <th onClick={(event) => event.stopPropagation()}>
                        <Tooltip content='Add in case'>
                          <span className={styles.add_button} data-id={coin.id} onClick={(event) => handleFormAdd(event)}>+</span>
                        </Tooltip>
                      </th>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Pagination />
          <AddCoin activeModal={activeModal} setActiveModal={setActiveModal} coins={coins} coinId={coin}/>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;
