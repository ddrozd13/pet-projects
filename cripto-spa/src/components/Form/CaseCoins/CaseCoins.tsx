import styles from './CaseCoins.module.scss';
import React, { FC, useEffect, useState } from 'react'
import Modal from '../../Modal/Modal';
import clsx from 'clsx';
import { round } from 'lodash';
import { IStorageCoin } from '../AddCoin/AddCoin';

interface ICaseCoinsProps {
  activeModal: boolean;
  setActiveModal: (args: boolean) => void;
}
const CaseCoins: FC<ICaseCoinsProps> = ({activeModal, setActiveModal}) => {
  const [coinsStorage, setCoinsStorage] = useState<IStorageCoin[] | []>(JSON.parse(localStorage.getItem('coinsArray')!));

  const handleDeleteCoin = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget.dataset.id
    setCoinsStorage(coinsStorage.filter((item) => item.id !== target));
    localStorage.setItem('coinsArray', JSON.stringify(coinsStorage));
  }
  return (
    <Modal active={activeModal} setActive={setActiveModal}>
      <div className={styles.case}>
        <h1 className={styles.case_title}>Coins in your case</h1>
        <div className={styles.case_container}>
          <div className={styles.case_header}>
            <ul>
              <li>Coin</li>
              <li>Price</li>
              <li>Change Percent(24H)</li>
            </ul>

          </div>
          {coinsStorage && coinsStorage.map((item, index) => (
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
                onClick={(event) => handleDeleteCoin(event)}
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
