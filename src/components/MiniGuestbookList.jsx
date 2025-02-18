import styled from '@emotion/styled';
import React from 'react';

const ListContainer = styled.div`
  margin-top: 1rem;
  padding: 0.8rem 0.8rem 0.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1rem;
  font-size: 1.4rem;
  background-color: #e7821d;
  border-radius: 0.4rem;

  .guest-info {
    display: flex;
    gap: 0.5rem;
  }

  .guest-message {
    width: 100%;
    /* background-color: red; */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    right: -15px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 22px solid #e7821d;
  }

 
`;

const MiniGuestbookList = () => {
  return (
    <ListContainer>
      <ListItem>
        <div className="guest-info">
          <div className="guest-name">이아무개</div>
          <div className="guest-date">2025.02.01</div>
          <div className="guest-time">18:12</div>
        </div>
        <div className="guest-message">
          안녕하세요 첫번째 방문자입니다 하핳하핳gggggggggggggg
        </div>
      </ListItem>

      <ListItem>
        <div className="guest-info">
          <div className="guest-name">땡자</div>
          <div className="guest-date">2025.02.01</div>
          <div className="guest-time">18:19</div>
        </div>
        <div className="guest-message">ㅎㅇㅎㅇ</div>
      </ListItem>

      <ListItem>
        <div className="guest-info">
          <div className="guest-name">익명</div>
          <div className="guest-date">2025.02.03</div>
          <div className="guest-time">09:07</div>
        </div>
        <div className="guest-message">굿모닝</div>
      </ListItem>

      <ListItem>
        <div className="guest-info">
          <div className="guest-name">이아무개</div>
          <div className="guest-date">2025.02.01</div>
          <div className="guest-time">18:12</div>
        </div>
        <div className="guest-message">
          안녕하세요 첫번째 방문자입니다 하핳하핳gggggggggggggg
        </div>
      </ListItem>

      <ListItem>
        <div className="guest-info">
          <div className="guest-name">땡자</div>
          <div className="guest-date">2025.02.01</div>
          <div className="guest-time">18:19</div>
        </div>
        <div className="guest-message">ㅎㅇㅎㅇ</div>
      </ListItem>

      <ListItem>
        <div className="guest-info">
          <div className="guest-name">익명</div>
          <div className="guest-date">2025.02.03</div>
          <div className="guest-time">09:07</div>
        </div>
        <div className="guest-message">굿모닝</div>
      </ListItem>
    </ListContainer>
  );
}

export default MiniGuestbookList;
