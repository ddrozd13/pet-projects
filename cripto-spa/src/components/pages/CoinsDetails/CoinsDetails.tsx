import styles from './CoinsDetails.module.scss';
import React, { FC, useEffect, useState } from 'react'
import PageLayout from '../../PageLayout/PageLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { getIntervalAction } from '../../../store/getInterval/ActionCreator';
import Chart from '../../Chart/Chart';
import { round } from 'lodash';
import { numberWithCommas } from '../../../utils/moneyFormat';
import Modal from '../../Modal/Modal';
import clsx from 'clsx';
import { getAllCoinsAction } from '../../../store/GetCoins/ActionCreator';


const CoinsDetails: FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const { coin } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { intervals } = useSelector((state: RootState) => state.interval);
  const { coins } = useSelector((state: RootState) => state.allCoins);
  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    dispatch(getIntervalAction(String(coin)));
    dispatch(getAllCoinsAction())
  }, [coin, dispatch])

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.routes}>
            <ul>
              <li className={styles.routes_route} onClick={() => navigate('/')}>Main</li>
              <li className={styles.routes_line}></li>
              <li className={styles.routes_route}>{coin?.toUpperCase()}</li>
            </ul>
            <span className={styles.routes_goBack} onClick={() => navigate('/')}>Go back</span>
          </div>
          <div className={styles.content}>
            {coins && coins.map((item, index) => {
              if(item.id === coin){
                return (
                  <div className={styles.content_area} key={index}>
                    <h1>{item.name}</h1>
                    <h2>Rank: <span>{item.rank}</span></h2>
                    <h2>Current Price: <span>{round(item.priceUsd, 2)}$</span></h2>
                    <h2>Market Cap: <span>{numberWithCommas(round(item.marketCapUsd, 1))}$</span></h2>
                    <button className={styles.content_button} onClick={() => setActiveModal(true)}>
                      Add {item.name} in case
                    </button>
                  </div>
                )
              }
            })}
            <div className={styles.content_verticalLine}></div>
            <div className={styles.content_chart}>
              <Chart data={intervals?.slice(0, 30)} />
            </div>
          </div>
          <Modal active={activeModal} setActive={setActiveModal}>
            <div className={styles.case}>
              <h1 className={styles.case_title}>Сhoose an action</h1>
              {coins && coins.map((item, index) => {
                if(item.id === coin){
                  return (
                    <form className={styles.case_card} key={index}>
                      <h3>{item.name}</h3>
                      <p>
                        {round(item.priceUsd, 3)}$
                        <span
                          className={clsx(Math.sign(coins[2].changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                        >
                          ({Math.sign(coins[2].changePercent24Hr) !== -1 || -0 ? '+' : ''}
                          {round(coins[2].changePercent24Hr, 4)})
                        </span>
                      </p>
                      <input type="number" min="1" required value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>
                      <div className={styles.case_button}>add</div>
                    </form>
                  )
                }
              })}

            </div>
          </Modal>
        </div>
      </div>
    </PageLayout>
  )
}

export default CoinsDetails;
