import styled from '@emotion/styled';
// import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdInsertComment } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';
import GuestbookForm from './GuestbookForm';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Container = styled.div`

  display: flex;
  gap: 1rem;
  min-width: 40px;
  max-width: ${(props) => (props.sidebarVisible ? '100%' : '40px')};
  transition: max-width 0.5s ease-in-out;

  &:hover {
    max-width: 360px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContentWrap = styled.div`
  width: 300px;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .content-box {
    width: 100%;
    height: 4rem;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;

    span {
      font-size: 1.4rem;
      /* color: #fff; */
    }
  }

  .board-box {
    .board-mini {
      .title {
        font-size: 1.6rem;
        height: 4rem;
        display: inline-block;
        display: flex;
        align-items: center;
      }

      .list-wrap {
        /* border: 1px solid #fff; */
        /* background-color: #fff; */
        margin-top: 1rem;
        /* background-color: #ffffff; */
        padding: 0.8rem 0.8rem 0.8rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .list-item {
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

          .text {
            border: 1px solid pink;
            white-space: nowrap;
            max-width: 17.2rem;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

        .list-item:after {
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

        .list-item:first-child {
          /* border-top:  2px dotted #000000; */
          /* border-top:  1px solid #afafaf; */
        }
      }
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: #fff;
  font-size: 2rem;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    color: #fff;
  }

  span {
    font-size: 1.4rem;
    color: #fff;
  }
`;

function Sidebar({ sidebarVisible }) {
  return (
    <Container sidebarVisible={sidebarVisible}>
      <ButtonWrap>
        <Button>
          <PiGithubLogoFill />
        </Button>

        <Button>
          <MdEmail />
        </Button>

        <Button>
          <FaPhone />
        </Button>

        <Button>
          <MdInsertComment />
        </Button>
      </ButtonWrap>

      <ContentWrap>
        <div className="content-box">
          <span>https://github.com/ssowem</span>
        </div>
        <div className="content-box">
          <span>lsyeon0516@gmail.com</span>
        </div>
        <div className="content-box">
          <span>010-9448-1104</span>
        </div>

        <div className="board-box">
          <div className="board-mini">
            <span className="title">방명록을 남겨주세요☺</span>

            <GuestbookForm />

            <div className="list-wrap">
              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">이아무개</div>
                  <div className="guest-date">2025.02.01</div>
                  <div className="guest-time">18:12</div>
                </div>
                <div className="guest-message">
                  안녕하세요 첫번째 방문자입니다 하핳하핳gggggggggggggg
                </div>
              </div>

              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">땡자</div>
                  <div className="guest-date">2025.02.01</div>
                  <div className="guest-time">18:19</div>
                </div>
                <div className="guest-message">ㅎㅇㅎㅇ</div>
              </div>

              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">익명</div>
                  <div className="guest-date">2025.02.03</div>
                  <div className="guest-time">09:07</div>
                </div>
                <div className="guest-message">굿모닝</div>
              </div>

              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">이아무개</div>
                  <div className="guest-date">2025.02.01</div>
                  <div className="guest-time">18:12</div>
                </div>
                <div className="guest-message">
                  안녕하세요 첫번째 방문자입니다 하핳하핳gggggggggggggg
                </div>
              </div>

              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">땡자</div>
                  <div className="guest-date">2025.02.01</div>
                  <div className="guest-time">18:19</div>
                </div>
                <div className="guest-message">ㅎㅇㅎㅇ</div>
              </div>

              <div className="list-item">
                <div className="guest-info">
                  <div className="guest-name">익명</div>
                  <div className="guest-date">2025.02.03</div>
                  <div className="guest-time">09:07</div>
                </div>
                <div className="guest-message">굿모닝</div>
              </div>
            </div>

            <PaginationNav>
              <button className="prev-button">
                <IoIosArrowBack />
              </button>
              <span>1/1</span>
              <button className="next-button">
                <IoIosArrowForward />
              </button>
            </PaginationNav>
          </div>
        </div>
      </ContentWrap>
    </Container>
  );
}

export default Sidebar;
