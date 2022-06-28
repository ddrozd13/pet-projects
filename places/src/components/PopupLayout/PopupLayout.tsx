import { Dialog, DialogTitle } from '@mui/material';
import { FC } from 'react';
import styles from './PopupLayout.module.scss';

interface IPopupLayoutProps {
  title: string;
  onClose: () => void;
}
const PopupLayout: FC<IPopupLayoutProps> = ({ title, children, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <div className={styles.container}>
        {children}
      </div>
    </Dialog>
  )
};

export default PopupLayout;
