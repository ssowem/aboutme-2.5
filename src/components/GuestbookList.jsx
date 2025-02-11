import styled from '@emotion/styled';
import React, { useState } from 'react';
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
  align-items: center;
  gap: 0.2rem;
  padding: 2rem 4rem;
  background-color: #f7f2ed;
  border-radius: 0.4rem;
  border: 1px solid #979797;
  /* box-shadow: 2px 2px 6px 2px rgba(99, 99, 99, 0.2); */

  .guest-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .guest-name {
      font-size: 1.4rem;
      font-weight: 600;
    }

    .guest-date,
    .guest-time {
      font-size: 1.2rem;
    }
  }

  .guest-message {
    font-size: 1.4rem;
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
  position: relative;

  .check-modal {
    display: flex;
    align-items: center;

    position: absolute;
    content: '';
    /* width: 50px;
    height: 50px; */
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);

    color: #000;
    background-color: #fff;
    border: 1px solid #000;
    padding: 1rem;
    gap: 1rem;
    border-radius: 0.5rem;

    input {
      width: 10rem;
      height: 3rem;
      padding: 0.5rem;
      font-size: 1.4rem;
    }

    button {
      width: 5rem;
      height: 3rem;
      
    }
  }
`;

const UserEmoji = styled.span`
  margin-right: 0.5rem;
  &::after {
    content: '🧒🏻';
    font-size: 3rem;
  }
`;

function GuestbookList({ messages }) {

  
  return (
    <ListContainer>
      {messages.map((item, index) => (
        <ListItem key={index}>
          <UserEmoji />
          <GuestInfoWrap>
            <div className="guest-info">
              <div className="guest-name">{item.nickname}</div>
              <div className="guest-date">2025.02.01</div>
              <div className="guest-time">18:12</div>
            </div>
            <div className="guest-message">{item.message}</div>
          </GuestInfoWrap>

          <DeleteButton>
            <FaTrashAlt />
            <div className="check-modal">
              <input type="password" placeholder="비밀번호" maxLength={4} />

              <button>확인</button>
            </div>
          </DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default GuestbookList;
