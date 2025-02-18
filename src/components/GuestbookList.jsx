import styled from '@emotion/styled';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { FiEdit3 } from 'react-icons/fi';
import { RiEdit2Fill } from 'react-icons/ri';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 0 2rem;
  background-color: #f7f2ed;
  border: 1px solid #979797;
  border-radius: 0.4rem;
  
`;

const ListItem = styled.div`
  position: relative;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0 2rem;
  background-color: #f7f2ed;
  border-radius: 0.4rem;
  border: 1px solid #979797;
  /* box-shadow: 2px 2px 6px 2px rgba(99, 99, 99, 0.2); */
`;

const GuestInfoWrap = styled.div`
  /* border: 1px solid #0e8c91; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

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

const ButtonWrap = styled.div`
  position: relative;
`

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  align-self: center;
  font-size: 2rem;
  color: #d64747;
`;

const CheckModal = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
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
`;

const UserEmoji = styled.span`
  margin-right: 0.5rem;
  &::after {
    content: '🧒🏻';
    font-size: 3rem;
  }
`;

const GuestbookList = ({ item, fetchGuestbook }) => {
  // 선택된 삭제 모달에 item.id값을 저장해준다
  const [selectedId, setSelectedId] = useState(null);

  // 삭제모달에서 감지되는 비밀번호를 저장해준다.
  const [passwordInput, setPasswordInput] = useState('');

  dayjs.extend(utc);
  dayjs.extend(timezone);

  // UTC 시간 한국시간으로 변경하는 함수
  const getKoreanTime = (utcDate) => {
    return dayjs.utc(utcDate).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
  };

  // 방명록 삭제하는 함수 (DELETE 요청)
  const removeGuestbook = async (item) => {
    const url = `https://gateway.ssobility.me/api/v1/boards/${item.id}`;

    try {
      const response = await axios.delete(url, {
        data: { password: passwordInput },
      });
      // debugger;
      console.log('삭제성공', response);

      fetchGuestbook();
    } catch (error) {
      console.error('오류', error);
    }
  };

  // 삭제 모달을 열어주는 함수
  const openModal = (item) => {
    setSelectedId(item.id);
    // console.log(selectedId);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <ListContainer>
     
        <UserEmoji />
        <GuestInfoWrap>
          <div className="guest-info">
            <div className="guest-name">{item.writerNickname}</div>
            <div className="guest-date">{getKoreanTime(item.createdAt)}</div>
          </div>
          <div className="guest-message">{item.content}</div>
        </GuestInfoWrap>

        <ButtonWrap>
          <DeleteButton
            onClick={() => {
              openModal(item);
            }}
          >
            <FaTrashAlt />
          </DeleteButton>


           {/* 저장된 아이디값이 item.id와 동일하면 모달창 보여짐 */}
        {selectedId === item.id && (
          <CheckModal>
            <input
              type="password"
              placeholder="비밀번호"
              maxLength={4}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              onClick={() => {
                removeGuestbook(item);
              }}
            >
              확인
            </button>
            <button onClick={closeModal}>취소</button>
          </CheckModal>
        )}
        </ButtonWrap>
       
     
    </ListContainer>
  );
};

export default GuestbookList;
