import styled from '@emotion/styled';
import React, { useEffect } from 'react';
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

const GuestPagination = ({ fetchGuestbook, currentPage, setCurrentPage }) => {
  
useEffect(()=>{
  fetchGuestbook();
},[currentPage])

  const handlePrevPage = () => {
    if(currentPage > 1 ){
      setCurrentPage(currentPage - 1); 
    }
   
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);    
  };


  return (
    <PaginationContainer>
      <div className="text">14개 중 1-4</div>

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
