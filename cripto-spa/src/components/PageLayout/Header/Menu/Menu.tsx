import styles from './Menu.module.scss';
import { FC, useState } from 'react'
import { round } from 'lodash';
import { ICoin } from '../../../../api/Types';
import { useNavigate } from 'react-router-dom';
import { signMath } from '../../../../utils/Math';
import clsx from 'clsx';

interface IMenuProps {
  coins: ICoin[] | undefined
}
const Menu: FC<IMenuProps> = ({ coins }) => {
   const [press, setPress] = useState(false);
   const navigate = useNavigate();

  const handleClick = () => {
    if(!press) {
      setPress(true);
    }else {
      setPress(false);
    };
  };

  const handleNavigate = (id: string) => {
    navigate(`/coin/${id}`);
    setPress(false);
  };

  return (
    <div className={styles.menu}>
      <div onClick={handleClick} className={styles.showMenuButton}>Menu</div>
      <ul  className={clsx(!press ? styles.none : styles.dropdown_content)}>
        {coins && coins.slice(0, 3).map((coin) => (
          <li key={coin.id} className={styles.dropdown_content_container} onClick={() => handleNavigate(coin.id)}>
            {coin.name}
            <ul style={{display: 'flex'}} className={styles.dropdown_content_container_item}>
              <li>{round(coin.priceUsd, 2)} $</li>
              <li className={clsx(Math.sign(coin.changePercent24Hr) === -1 || -0 ? styles.red : styles.green)}>
                ({signMath(coin.changePercent24Hr)}
                {round(coin.changePercent24Hr, 3)})
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
