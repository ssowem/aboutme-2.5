import styled from '@emotion/styled';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  padding: 2rem 4rem;
  font-size: 1.4rem;
  background-color: #f7f2ed;
  border-radius: 0.4rem;
  border: 1px solid #dadada;
  /* box-shadow: 2px 2px 6px 2px rgba(99, 99, 99, 0.2); */

  .guest-info {
    display: flex;
    gap: 0.5rem;
  }

  .guest-message {
    width: 100%;
    max-width: 1400px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const GuestInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  align-self: center;
  font-size: 2rem;
  display: flex;
  color: #d64747;
  
`;

function FullGuestbookList() {
  return (
    <ListContainer>
      <ListItem>
        <GuestInfoWrap>
          <div className="guest-info">
            <div className="guest-name">이아무개</div>
            <div className="guest-date">2025.02.01</div>
            <div className="guest-time">18:12</div>
          </div>
          <div className="guest-message">
            안녕하세요 첫번째 방문자입니다 하핳하핳gggggggggggggg
          </div>
        </GuestInfoWrap>

        <DeleteButton>
          <FaTrashAlt />
        </DeleteButton>
      </ListItem>

      <ListItem>
        <GuestInfoWrap>
          <div className="guest-info">
            <div className="guest-name">이아무개</div>
            <div className="guest-date">2025.02.01</div>
            <div className="guest-time">18:12</div>
          </div>
          <div className="guest-message">
            글자수 제한하기
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요
          </div>
        </GuestInfoWrap>

        <DeleteButton>
          <FaTrashAlt />
        </DeleteButton>
      </ListItem>

      
      <ListItem>
        <GuestInfoWrap>
          <div className="guest-info">
            <div className="guest-name">이아무개</div>
            <div className="guest-date">2025.02.01</div>
            <div className="guest-time">18:12</div>
          </div>
          <div className="guest-message">
            글자수 제한하기
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요
          </div>
        </GuestInfoWrap>

        <DeleteButton>
          <FaTrashAlt />
        </DeleteButton>
      </ListItem>

      
      <ListItem>
        <GuestInfoWrap>
          <div className="guest-info">
            <div className="guest-name">이아무개</div>
            <div className="guest-date">2025.02.01</div>
            <div className="guest-time">18:12</div>
          </div>
          <div className="guest-message">
            글자수 제한하기
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요
          </div>
        </GuestInfoWrap>

        <DeleteButton>
          <FaTrashAlt />
        </DeleteButton>
      </ListItem>
    </ListContainer>
  );
}

export default FullGuestbookList;
