import styles from './AddCoin.module.scss';
import React, { FC, useEffect, useState } from 'react'
import { ICoin } from '../../../api/Types';
import { round } from 'lodash';
import Modal from '../../Modal/Modal';
import clsx from 'clsx';

export interface IStorageCoin {
  id: string;
  name: string;
  price: number;
  percent: number;
  amount: number;
}
interface IAddCoinProps {
  activeModal: boolean;
  setActiveModal: (isActive: boolean) => void;
  coins: ICoin[] | undefined;
  coinId: string | undefined
}
const AddCoin: FC<IAddCoinProps> = ({activeModal, setActiveModal, coins, coinId}) => {
  const [storageCoins, setStorageCoins] = useState<IStorageCoin[] | []>(JSON.parse(localStorage.getItem('coinsArray')!));
  const [amount, setAmount] = useState<number>(1);

  const handleAddCoinCase = (coin: ICoin, amount: number) => {
    setActiveModal(false);
    setStorageCoins([
      ...storageCoins,
        {
          id: coin.id,
          name: coin.name,
          price: round(coin.priceUsd, 1),
          percent: round(coin.changePercent24Hr, 3),
          amount
        }
      ]
    )
    localStorage.setItem('coinsArray', JSON.stringify(storageCoins));
  }

  return (
    <Modal active={activeModal} setActive={setActiveModal}>
      <div className={styles.case}>
        <h1 className={styles.case_title}>Сhoose an action</h1>
        {coins && coins.map((item, index) => {
          if(item.id === coinId){
            return (
              <form className={styles.case_card} key={index}>
                <h3>{item.name}</h3>
                <p>
                  {round(item.priceUsd, 3)}$
                  <span
                    className={clsx(Math.sign(item.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}
                  >
                    ({Math.sign(item.changePercent24Hr) !== -1 || -0 ? '+' : ''}
                    {round(item.changePercent24Hr, 4)})
                  </span>
                </p>
                <input type="number" min="1" required value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>
                <div className={styles.case_button} onClick={() => handleAddCoinCase(item, amount)}>Add</div>
              </form>
            )
          }
        })}
      </div>
    </Modal>
  )
}

export default AddCoin;
