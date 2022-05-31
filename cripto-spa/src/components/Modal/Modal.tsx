import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  active: boolean;
  setActive: (val: boolean) => void;
  children: React.ReactNode;
}
const Modal: FC<IModalProps> = ({active, setActive, children}) => {
  return (
    <div className={clsx(styles.container, active && styles.container_active)} onClick={() => setActive(false)}>
      <div className={clsx(styles.container_content, active && styles.container_content_active)} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
