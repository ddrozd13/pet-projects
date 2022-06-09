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
import AddCoin from '../../Form/AddCoin/AddCoin';
import { signMath } from '../../../utils/Math';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { coins, currentPage, perPage } = useSelector((state: RootState) => state.allCoins);
  const [activeModal, setActiveModal] = useState(false);
  const [coin, setCoin] = useState<string | undefined>(undefined);

  const handleFormAdd = (event: React.MouseEvent<HTMLSpanElement>) => {
    setActiveModal(true);
    setCoin(event.currentTarget.dataset.id);
  };

  useEffect(() => {
    dispatch(getAllCoinsAction());
  }, [dispatch]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          {!coins && <Spinner />}
          <div className={styles.table}>
            <table cellSpacing="0" className={styles.table_content}>
              <caption className={styles.table_content_title}>Cryptocurrency Prices by Market Cap</caption>
              <tbody>
                <tr className={styles.table_header}>
                  <th className={styles.table_header_column}>Coin</th>
                  <th className={styles.table_header_column}>Price</th>
                  <th className={clsx(styles.table_header_column, styles.table_body_item)}>24h changes</th>
                  <th className={clsx(styles.table_header_column, styles.table_body_item)}>Market Cap</th>
                  <th className={styles.table_header_column}></th>
                </tr>
                {coins && coins.slice((currentPage - 1) * perPage, (currentPage * perPage)).map((coin) => {
                  return (
                    <tr key={coin.id} className={styles.table_body} onClick={() => navigate(`/coin/${coin.id}`)}>
                      <th className={styles.table_body_item}>{coin.name}</th>
                      <td className={styles.table_body_item}>$ {round(coin.priceUsd, 6)}</td>
                      <td
                        className={clsx(styles.table_body_item, Math.sign(coin.changePercent24Hr) === -1 || -0 ? styles.red : styles.green, styles.table_body_item)}
                      >
                        {signMath(coin.changePercent24Hr)}
                        {round(coin.changePercent24Hr, 3)}
                        %
                      </td>
                      <td className={clsx(styles.table_body_item, styles.table_body_item_adaptive)}>$ {numberWithCommas(round(Number(coin.marketCapUsd.toString().slice(0, -6))))}</td>
                      <th onClick={(event) => event.stopPropagation()} className={styles.table_body_item}>
                        <Tooltip content='Add in case'>
                          <span className={styles.add_button} data-id={coin.id} onClick={(event) => handleFormAdd(event)}>+</span>
                        </Tooltip>
                        <span onClick={() => navigate(`/coin/${coin.id}`)} className={styles.more}>More</span>
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
  );
};

export default Home;
