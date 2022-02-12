import css from './Paginator.module.css';
import React from 'react';

const Paginator = ({pageSize, totalUsersCount, currentPage, onPageChanged,  ...props}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return <div>
        {pages.map(p => {
          return <span className={css.page_number + ` ${currentPage === p && css.selectedPage}`}
          onClick={(e) => onPageChanged(p)}>{p}</span>
        })}
      </div>
}

export default Paginator;