import styles from './AddCoin.module.scss';
import React, { FC, useState } from 'react'
import { ICoin } from '../../../api/Types';
import { round } from 'lodash';
import Modal from '../../Modal/Modal';
import clsx from 'clsx';
import { addCoinToLS, getCoinsFromLS, IStorageCoin } from '../../../utils/GetCoinToLS';
import { signMath } from '../../../utils/Math';
interface IAddCoinProps {
  activeModal: boolean;
  setActiveModal: (isActive: boolean) => void;
  coins: ICoin[] | undefined;
  coinId: string | undefined
}
const AddCoin: FC<IAddCoinProps> = ({activeModal, setActiveModal, coins, coinId}) => {
  const [amount, setAmount] = useState(1);
  const handleAddCoinCase = (coin: ICoin) => {
    setActiveModal(false);

    const data = getCoinsFromLS().find(item => item.id === coin.id);
    if(data?.id === coin.id){
      const oldData = getCoinsFromLS().filter(item => item.id !== coin.id);

      localStorage.setItem('coinsArray', JSON.stringify([...oldData, {...data, amount: data.amount + amount, total: data.total + (data.price* amount)}]));
    }else {
      addCoinToLS(
        {
          id: coin.id,
          name: coin.name,
          price: round(coin.priceUsd, 1),
          percent: round(coin.changePercent24Hr, 3),
          amount,
          total: round(coin.priceUsd, 1) * amount
        }
      )
    }
  }

  return (
    <Modal active={activeModal} setActive={setActiveModal}>
      <div className={styles.case}>
        <h1 className={styles.case_title}>Сhoose an action</h1>
        {coins && coins.map((item, index) => {
          if(item.id === coinId){
            return (
              <form className={styles.case_card} key={index}>
                <h3>
                  <span className={styles.none}>Coin: </span>
                  {item.name}
                </h3>
                <p>
                  <span className={styles.none}>Price (USD): </span>
                  {round(item.priceUsd, 3)}$
                  <span
                    className={clsx(Math.sign(item.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                  >
                    ({signMath(item.changePercent24Hr)}
                    {round(item.changePercent24Hr, 4)})
                  </span>
                </p>
                <input type="number" onChange={(event) => setAmount(Number(event.target.value))} required value={amount}/>
                <span className={styles.none}>Total: {round(item.priceUsd, 3) * amount}$</span>
                <div className={styles.case_button} onClick={() => handleAddCoinCase(item)}>Add</div>
              </form>
            )
          }
        })}
      </div>
    </Modal>
  )
}

export default AddCoin;
