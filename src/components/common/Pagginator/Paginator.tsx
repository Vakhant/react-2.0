import React, { useState } from 'react';
// @ts-ignore
import css from './Paginator.module.css';

type PropsTypes = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number
}

const Paginator: React.FC<PropsTypes> = ({pageSize, totalItemsCount, currentPage, onPageChanged, portionSize = 35}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let prevPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let nextPortionPageNumber = portionNumber * portionSize;
  
  

  return <div className={css.paginator}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(--portionNumber)}}>PREV</button>}
        
        {pages.filter(p => p >= prevPortionPageNumber && p <= nextPortionPageNumber).map(p => {
          return <span 
            className={css.page_number + ` ${currentPage === p && css.selected_page}`}
            onClick={(e) => onPageChanged(p)} 
            key={p}>
              {p}
            </span>
        })}

        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(++portionNumber)}}>NEXT</button>}
      </div>
}

export default Paginator;