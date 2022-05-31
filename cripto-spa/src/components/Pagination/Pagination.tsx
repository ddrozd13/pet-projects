import styles from './Pagination.module.scss';
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import clsx from 'clsx';
import { setCurrentPage } from '../../store/GetCoins/ActionCreator';
import { createPages } from '../../utils/createPages';

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const {perPage, currentPage, totalCount} = useSelector((state: RootState) => state.allCoins);
  const pagesCount = Math.ceil(totalCount/perPage);
  const pages: number[] = [];

  createPages(pages, pagesCount, currentPage);

  return (
    <div className={styles.container}>
      <div className={styles.container_pages}>
        {perPage && pages.map((page, index) => (
          <span
            key={index}
            className={clsx(styles.container_pages_item, currentPage === page && styles.container_pages_item_currentPage)}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Pagination;
