import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PaginationContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 1rem;
  /* border: 1px solid red; */
  gap: 1rem;
  .text {
    font-size: 1.4rem;
  }
  .button-wrap {
    display: flex;
    gap: 0.5rem;

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      border-radius: 50%;
      padding: 0.5rem;

      &:hover {
        background-color: #bbbbbb;
      }
    }
  }
`;

const GuestPagination = ({
  fetchGuestbook,
  currentPage,
  setCurrentPage,
  totalItems,
  size,
  totalPage,
  
}) => {
  const [startItem, setStartItem] = useState(1);
  const [endItem, setEndItem] = useState(4);

  useEffect(() => {
    fetchGuestbook();
    updateItemRange();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if(currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
 
    
  }

// 시작번호 , 끝번호 업데이트 시켜주는 함수
  const updateItemRange = () => {
 
    // debugger;

   // 시작 아이템 인덱스
    const startIndex = (currentPage - 1) * (size - 1) + currentPage;

    setStartItem(startIndex);


    // 현재페이지가 마지막페이지일때
    if (currentPage === totalPage) {

      // 마지막페이지를 제외한 총갯수
      const prevTotal  = (totalPage - 1) * size;

      //마지막페이지의 갯수
      const lastCount = totalItems - prevTotal;
      // end 값
      const end = startIndex + lastCount - 1;

      setEndItem(end);
      return;
    }

    // 현재페이지가 마지막페이지가 아닐때
    else {
      setEndItem(startIndex + size - 1);
    }

  };


  return (
    <PaginationContainer>
      <div className="text">
        총 {totalItems}개 중 {startItem}-----------{endItem}
      </div>

      <div className="button-wrap">
        <button onClick={handlePrevPage}>
          <IoIosArrowBack />
        </button>

        <button onClick={handleNextPage}>
          <IoIosArrowForward />
        </button>
      </div>
    </PaginationContainer>
  );
};

export default GuestPagination;
