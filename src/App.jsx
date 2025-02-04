import { useEffect} from 'react';
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
  Router,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.5s ease-in-out;
//   will-change: transform;
//   width: 100vw;
//   height: auto;
// `;

// const Section = styled.div`
//   height: 100vh;
//   border: 1px solid #ddd;
//   box-sizing: border-box;
// `;

const SidebarWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #fe8d1c;

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
function ScrollNavigator() {
  const navigate = useNavigate(); // 특정 Url로 이동할때 사용
  const location = useLocation(); // 현재 Url정보 가져옴 (location.pathname 사용하면 현재 어떤페이지인지 확인가능)

  // useEffect를 사용해서 휠이벤트가 발생할때마다 페이지를 변경시킴
  useEffect(() => {


    const handleScroll = (event) => {
      // 휠의 방향을 감지함, ( deltaY > 0 아래로스크롤, deltaY < 0 위로 스크롤)
      const { deltaY } = event;
      // 현재 페이지 인덱스 가져옴 [pages 배열에서 현재url(location.pathname)을 기준으로 인덱스를 찾음]
      const currentIndex = pages.indexOf(location.pathname);

      // 아래로 스크롤, 현재 인덱스가 마지막페이지가 아니면 다음페이지 이동
      if (deltaY > 0 && currentIndex < pages.length - 1) {
        // 다음페이지 URL로 변경
        navigate(pages[currentIndex + 1]);

        //위로 스크롤, 현재 인덱스가 첫번째 페이지가 아니면 이전페이지로 이동
      } else if (deltaY < 0 && currentIndex > 0) {
        // 이전 페이지 URL로 변경
        navigate(pages[currentIndex - 1]);
      }
    };

    // 전역적으로 휠이벤트를 감지하면 handleScroll함수 실행
    window.addEventListener('wheel', handleScroll);

    // 컴포넌트가 언마운트될때 이벤트리스너 제거(메모리누수방지?)
    return () => window.removeEventListener('wheel', handleScroll);
  }, [location.pathname, navigate]);
}

function App() {
  return (
    <BrowserRouter>
      <ScrollNavigator /> {/* 마우스 휠 감지를 위한 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
