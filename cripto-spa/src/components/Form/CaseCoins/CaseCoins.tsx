import styles from './CaseCoins.module.scss';
import React, { FC, useState } from 'react'
import Modal from '../../Modal/Modal';
import clsx from 'clsx';
import { round } from 'lodash';
import { IStorageCoin } from '../../../utils/GetCoinToLS';
import { getCoinsFromLS } from '../../../utils/GetCoinToLS';
import { signMath } from '../../../utils/Math';

interface ICaseCoinsProps {
  activeModal: boolean;
  setActiveModal: (args: boolean) => void;
};

const CaseCoins: FC<ICaseCoinsProps> = ({activeModal, setActiveModal}) => {
  const [, setCoinsStorage] = useState<IStorageCoin[] | []>(getCoinsFromLS);
  const removeCoinFromLS = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.dataset.id;
    const data = getCoinsFromLS().filter((item) => item.id !== id);
    localStorage.setItem('coinsArray', JSON.stringify(data));
    setCoinsStorage(getCoinsFromLS());
  };

  return (
    <Modal active={activeModal} setActive={setActiveModal}>
      <div className={styles.case}>
        <h1 className={styles.case_title}>Coins in your case</h1>
        <div className={styles.case_container}>
          {getCoinsFromLS() && getCoinsFromLS().map((item, index) => (
            <div className={styles.case_card} key={index}>
              <h3>
                <span className={styles.none_adaptive}>Coin: </span>
                {item.name}
              </h3>
              <p>
              <span className={styles.none_adaptive}>Price: </span>
                {round(item.price, 3)}$
              </p>
              <span
                className={clsx(Math.sign(item.percent) === -1 || -0 ? styles.red : styles.green)}
              >
                <span className={styles.none_adaptive}>Change percent: </span>
                {signMath(item.percent)}
                {round(item.percent, 4)}%
              </span>
              <div>
                <span className={styles.none_adaptive}>Amount: </span>
                <span>
                  {item.amount}
                </span>
              </div>
              <span>
                <span className={styles.none_adaptive}>Total: </span>
                {round(item.total, 1)}$
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
  );
};

export default CaseCoins;
