import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Intro from './pages/intro';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

import Guestbook from './pages/Guestbook';

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { throttle } from 'lodash';
import StickyNav from './components/StickyNav';

const pages = ['/', '/about', '/portfolio', '/guestbook'];

// 마우스휠 감지하고 페이지를 이동시키는 함수
const ScrollNavigator = ({ setIsAboutVisible }) => {
  const navigate = useNavigate(); // 특정 Url로 이동할때 사용
  const location = useLocation(); // 현재 Url정보 가져옴 (location.pathname 사용하면 현재 어떤페이지인지 확인가능)
  const isScrolling = useRef(false); // 스크롤방지용

  // 휠 이벤트를 감지하는 함수
  const handleScroll = useCallback(
    // throttle을 사용해서 마우스휠 동작을 0.5초마다 한번씩 실행하게함
    throttle((event) => {
      if (isScrolling.current) return; // 이미스크롤중이면 무시하게함, 스크롤 연속실행을 방지함
      isScrolling.current = true; // 현재 실행되고 있음으로 변경시킴
      setTimeout(() => (isScrolling.current = false), 300); // 5초 후에 현재스크롤상태를 false로 변경시킴(다음스크롤 허용시키기)

      // 스크롤 방향을 감지 deltaY > 0 이면 아래로스크롤, deltaY < 0 이면 위로 스크롤
      const { deltaY } = event;
      // 현재 페이지 인덱스 가져옴 [pages 배열에서 현재url(location.pathname)을 기준으로 인덱스를 찾음]
      const currentIndex = pages.indexOf(location.pathname);

      // 아래로 스크롤(=다음페이지로 이동), 현재 인덱스가 마지막 페이지가 아니면 다음페이지 이동
      if (deltaY > 0 && currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1]);
      }

      // 위로 스크롤 , 첫번째 페이지가 아니면 이전 페이지로 이동
      if (deltaY < 0 && currentIndex > 0) {
        navigate(pages[currentIndex - 1]);
      }
    }, 500),
    [location.pathname, navigate]
  );

  // useEffect 사용해서 휠이벤트 감지될때마다 handleScroll 함수를 실행.
  //
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    const path = location.pathname; //현재페이지

    // 현재페이지가 about이면 isAboutVisible = true로 변경함 (애니메이션 적용)
    if (path === '/about') {
      setIsAboutVisible(true);
    }

    //메모리누수방지
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return null;
};

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  return (
    <BrowserRouter>
      {/* 마우스 휠 감지를 위한 컴포넌트,   */}
      <ScrollNavigator
        setIsAboutVisible={setIsAboutVisible}
        isAboutVisible={isAboutVisible}
      />

      <StickyNav />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/about"
          element={<About isAboutVisible={isAboutVisible} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
