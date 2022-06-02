import styles from './CaseCoins.module.scss';
import React, { FC, useState } from 'react'
import Modal from '../../Modal/Modal';
import clsx from 'clsx';
import { round } from 'lodash';
import { IStorageCoin } from '../../../utils/GetCoinToLS';
import { getCoinsFromLS } from '../../../utils/GetCoinToLS';

interface ICaseCoinsProps {
  activeModal: boolean;
  setActiveModal: (args: boolean) => void;
}
const CaseCoins: FC<ICaseCoinsProps> = ({activeModal, setActiveModal}) => {
  const [coinsStorage, setCoinsStorage] = useState<IStorageCoin[] | []>(getCoinsFromLS);
  const removeCoinFromLS = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.dataset.id;
    const data = coinsStorage.filter((item) => item.id !== id);
    localStorage.setItem('coinsArray', JSON.stringify(data));
    setCoinsStorage(getCoinsFromLS)
  }

  return (
    <Modal active={activeModal} setActive={setActiveModal}>
      <div className={styles.case}>
        <h1 className={styles.case_title}>Coins in your case</h1>
        <div className={styles.case_header}>
          <ul>
            <li>Coin</li>
            <li>Price</li>
            <li>Change Percent(24H)</li>
          </ul>
        </div>
        <div className={styles.case_container}>
          {getCoinsFromLS() && getCoinsFromLS().map((item, index) => (
            <div className={styles.case_card} key={index}>
              <h3>{item.name}</h3>
              <p>
                {round(item.price, 3)}$
              </p>
              <span
                className={clsx(Math.sign(item.percent) === -1 || -0 ? styles.red : styles.green)}
              >
                {Math.sign(item.percent) !== -1 || -0 ? '+' : ''}
                {round(item.percent, 4)}%
              </span>
              <div
                className={styles.case_button}
                onClick={(event) => removeCoinFromLS(event)}
                data-id={item.id}
              >
                Delete
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </Modal>
  )
}

export default CaseCoins;
