import styled from '@emotion/styled';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdInsertComment } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';
import MiniGuestbook from './MiniGuestbook';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SideBarWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #fe8d1c;
  z-index: 9999;

  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
`;

const SideBarContent = styled.div`
  display: flex;
  gap: 1rem;
  width: ${(props) => (props.sidebarVisible ? '360px' : '40px')};
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 360px;
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

const PaginationWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AllButton = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  color: #000;
`;
const PaginationNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;

  button {
    background-color: transparent;
    border: 1px solid #e7821d;
    border-radius: 50%;
    padding: 0.2rem;
    display: flex;
    align-items: center;

    color: #000000;
    font-size: 1.8rem;
  }
`;

const Sidebar = ({ sidebarVisible }) => {
  return (
    <SideBarWrap>
      <SideBarContent sidebarVisible={sidebarVisible}>
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

              <MiniGuestbook />

              <PaginationWrap>
                <AllButton>전체보기</AllButton>
                <PaginationNav>
                  <button className="prev-button">
                    <IoIosArrowBack />
                  </button>

                  <button className="next-button">
                    <IoIosArrowForward />
                  </button>
                </PaginationNav>
              </PaginationWrap>
            </div>
          </div>
        </ContentWrap>
      </SideBarContent>
    </SideBarWrap>
  );
}

export default Sidebar;
