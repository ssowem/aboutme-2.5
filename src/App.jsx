import { useEffect, useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import Intro from './pages/intro';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
// import { throttle } from 'lodash';
// import Sidebar from './components/Sidebar';
import Guestbook from './pages/Guestbook';
// import StickyNav from './components/StickyNav';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { throttle } from 'lodash';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.5s ease-in-out;
//   will-change: transform;
//   width: 100vw;
//   height: auto;
// `;

const SidebarWrap = styled.div`
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

const pages = ['/', '/about', '/portfolio', '/guestbook'];

// 마우스휠 감지하고 페이지를 이동시키는 함수
function ScrollNavigator({
  setSidebarVisible,
  portfolioScrollIsStart,
  portfolioScrollIsEnd,
}) {
  const navigate = useNavigate(); // 특정 Url로 이동할때 사용
  const location = useLocation(); // 현재 Url정보 가져옴 (location.pathname 사용하면 현재 어떤페이지인지 확인가능)

  // useEffect를 사용해서 휠이벤트가 발생할때마다 페이지를 변경시킴
  useEffect(() => {
    // 휠의 방향을 감지하는 함수
    const handleScroll = throttle((event) => {
      //  deltaY > 0 아래로스크롤, deltaY < 0 위로 스크롤
      const { deltaY } = event;
      // 현재 페이지 인덱스 가져옴 [pages 배열에서 현재url(location.pathname)을 기준으로 인덱스를 찾음]
      const currentIndex = pages.indexOf(location.pathname);

      // 휠 감지되면 사이드바 바로닫기
      setSidebarVisible(false);

      // 아래로 스크롤, 현재 인덱스가 마지막페이지가 아니면 다음페이지 이동
      if (deltaY > 0 && currentIndex < pages.length - 1) {
        console.log(portfolioScrollIsEnd);
        if (currentIndex === 2 && portfolioScrollIsEnd) {
          navigate(pages[currentIndex + 1]);
        } else if (currentIndex !== 2) {
          navigate(pages[currentIndex + 1]);
        }
      }

      if (deltaY < 0 && currentIndex > 0) {
        // 이전 페이지 URL로 변경
        // navigate(pages[currentIndex - 1]);

        if (currentIndex === 2 && portfolioScrollIsStart) {
          navigate(pages[currentIndex - 1]);
        } else if (currentIndex !== 2) {
          navigate(pages[currentIndex - 1]);
        }
      }
    }, 1000);

    // 전역적으로 휠이벤트를 감지하면 handleScroll함수 실행
    window.addEventListener('wheel', handleScroll);

    // 컴포넌트가 언마운트될때 이벤트리스너 제거(메모리누수방지?)
    return () => window.removeEventListener('wheel', handleScroll);
  }, [
    location.pathname,
    navigate,
    portfolioScrollIsStart,
    portfolioScrollIsEnd,
  ]);
}

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // 포트폴리오 컴포넌트 가로 X스크롤좌표 (시작과 끝확인하고 상태관리함)
  const [portfolioScrollIsStart, setPortfolioScrollIsStart] = useState(true); //스크롤초기값은0이기때문
  const [portfolioScrollIsEnd, setPortfolioScrollIsEnd] = useState(false);
  const [sevedScrollPosition, setSevedScrollPosition] = useState(null);

  useEffect(() => {
    //현재페이지가 /about 이면 true, 아니면 false
    setIsAboutVisible(location.pathname === '/about');
  }, [location.pathname]);
  //location.pathname을 사용해서 현재브라우저 url정보를가져옴
  // useEffect로 location.pathname이 변경될때마다 setIsAboutVisible 업데이트

  const handleSidebar = () => {
    if (sidebarVisible === false) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  };

  // 포트폴리오 영역 스크롤이 0인지 체크하는 함수
  const portFolioIsAtStart = (state) => {
    setPortfolioScrollIsStart(state);
  };

  const portFolioIsAtEnd = (state) => {
    setPortfolioScrollIsEnd(state);
  };

  return (
    <BrowserRouter>
      {/* 마우스 휠 감지를 위한 컴포넌트,   */}
      <ScrollNavigator
        setSidebarVisible={setSidebarVisible}
        portfolioScrollIsStart={portfolioScrollIsStart}
        portfolioScrollIsEnd={portfolioScrollIsEnd}
      />

      <SidebarWrap onClick={handleSidebar}>
        <Sidebar sidebarVisible={sidebarVisible} />
      </SidebarWrap>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/about"
          element={<About isAboutVisible={isAboutVisible} />}
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              portFolioIsAtStart={portFolioIsAtStart}
              portFolioIsAtEnd={portFolioIsAtEnd}
              sevedScrollPosition={sevedScrollPosition}
              setSevedScrollPosition={setSevedScrollPosition}
            />
          }
        />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
