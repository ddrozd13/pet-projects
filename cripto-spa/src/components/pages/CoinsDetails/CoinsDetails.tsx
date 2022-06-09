import styles from './CoinsDetails.module.scss';
import { FC, useEffect, useState } from 'react'
import PageLayout from '../../PageLayout/PageLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { getIntervalAction } from '../../../store/getInterval/ActionCreator';
import Chart from '../../Chart/Chart';
import { round } from 'lodash';
import { numberWithCommas } from '../../../utils/moneyFormat';
import { getAllCoinsAction } from '../../../store/GetCoins/ActionCreator';
import AddCoin from '../../Form/AddCoin/AddCoin';


const CoinsDetails: FC = () => {
  const [activeModal, setActiveModal] = useState(false);
  const { coin } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { intervals } = useSelector((state: RootState) => state.interval);
  const { coins } = useSelector((state: RootState) => state.allCoins);

  useEffect(() => {
    dispatch(getIntervalAction(String(coin)));
    dispatch(getAllCoinsAction());
  }, [coin, dispatch]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.routes}>
            <ul className={styles.routes_list}>
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
                    <h1 className={styles.content_area_name}>{item.name}</h1>
                    <h2 className={styles.content_area_item}>Rank: <span className={styles.content_area_text}>{item.rank}</span></h2>
                    <h2 className={styles.content_area_item}>Current Price: <span className={styles.content_area_text}>{round(item.priceUsd, 2)}$</span></h2>
                    <h2 className={styles.content_area_item}>Market Cap: <span className={styles.content_area_text}>{numberWithCommas(round(item.marketCapUsd, 1))}$</span></h2>
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
          <AddCoin activeModal={activeModal} setActiveModal={setActiveModal} coinId={coin} coins={coins}/>
        </div>
      </div>
    </PageLayout>
  );
};

export default CoinsDetails;
