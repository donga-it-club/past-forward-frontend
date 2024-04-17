import React, { useState, useEffect } from 'react';
import * as S from '@/styles/RetroList/Pagination.styles';

interface PaginationProps {
  totalPage: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, limit, page, setPage }) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[][]>([]);

  const sliceArrayByLimit = (totalPage: number, limit: number): number[][] => {
    const totalPageArray = Array.from(Array(totalPage).keys());
    return Array(Math.ceil(totalPage / limit))
      .fill(null)
      .map(() => totalPageArray.splice(0, limit));
  };

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page, limit, totalPageArray]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage, limit]);

  return (
    <S.Conatiner>
      <S.ButtonContainer>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <S.LeftArrow>&#x3008;</S.LeftArrow>
        </button>
        <div>
          {currentPageArray?.map(i => (
            <S.PageNumberContainer
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? true : undefined}
            >
              <S.PageNumber active={page === i + 1}>{i + 1}</S.PageNumber>
            </S.PageNumberContainer>
          ))}
        </div>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPage}>
          <S.RightArrow>&#x3009;</S.RightArrow>
        </button>
      </S.ButtonContainer>
    </S.Conatiner>
  );
};

export default Pagination;
