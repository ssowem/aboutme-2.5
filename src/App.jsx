import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import Intro from './components/intro';
import Portfolio from './components/Portfolio';
import About from './components/About';
import { set, throttle } from 'lodash';
import Sidebar from './components/Sidebar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  width: 100vw;
  height: auto;
`;

const Section = styled.div`
  height: ${(props) => props.screenHeight}px;
  height: 100vh;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

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

function App() {
  const containerRef = useRef(null);
  // 세션스토리지 문자열로 저장되고 반환된다. saveIndex를 숫자로 반환하기위해 Number를 사용
  const saveIndex = Number(sessionStorage.getItem('activeIndex')) || 0;
  const [activeIndex, setActiveIndex] = useState(saveIndex);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [screenHeight, SetScreenHeight] = useState(window.innerHeight);
  const [isScrollAtStart, setIsScrollAtStart] = useState(false);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    //창크기 바뀔때 동작하는 함수
    const handleResize = () => {
      SetScreenHeight(window.innerHeight); // screenHeight 상태값을 업데이트
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 포트폴리오 컴포넌트 스크롤값 업데이트 함수
  const handlePortfolioScroll = (scrollValue) => {
    setIsScrollAtStart(scrollValue);
    console.log('확인됨여', isScrollAtStart);
  };

  //마우스 휠 감지후 동작
  const handleScroll = throttle((event) => {
    const { deltaY } = event; // 세로스크롤 방향 확인 (위/아래)
    const totalSections = containerRef.current.children.length;


    // 휠 동작될때ㅑ 사이드바 상태 false 변경
    setSidebarVisible(false);
    // 아래로 스크롤
    if (deltaY > 0 && activeIndex < totalSections - 1) {
      // activeIndex가 2보다 작으면 1증가하게하고 2이상이면 증가시키지않고 유지(최대값을 2로제한하기)
      setActiveIndex((prev) => (prev < 2 ? prev + 1 : prev));
    }

    // 위로스크롤
    if (deltaY < 0 && activeIndex > 0) {
      // 포폴 영역이면서 isScrollAtStart === true일때
      if (activeIndex === 2 && isScrollAtStart) {
        setActiveIndex((prev) => prev - 1);
      } else if (activeIndex !== 2) {
        setActiveIndex((prev) => prev - 1);
      }
    }
  }, 1000);

  useEffect(() => {
    sessionStorage.setItem('activeIndex', activeIndex);

    if (activeIndex === 1) {
      setIsAboutVisible(true);
    } else {
      setTimeout(() => {
        setIsAboutVisible(false);
      }, 500);
    }
  }, [activeIndex]);


  // sidebar 클릭했을때 동작 (너비 변경되게함)
  const HandleSidebar = () => {

    if(sidebarVisible === false) {
      setSidebarVisible(true);
      console.log("true로변경",sidebarVisible)
    } else {
      setSidebarVisible(false);
      console.log("false로변경",sidebarVisible)
    }
  }
  

  return (
    <>
      <Container
        onWheel={handleScroll}
        ref={containerRef}
        style={{
          transform: `translateY(-${activeIndex * screenHeight}px)`,
        }}
      >
        <Section screenHeight={screenHeight}>
          <Intro />
        </Section>

        <Section screenHeight={screenHeight}>
          <About isAboutVisible={isAboutVisible} />
        </Section>

        <Section screenHeight={screenHeight}>
          <Portfolio scrollUpdate={handlePortfolioScroll} />
        </Section>
      </Container>

      <SidebarWrap onClick={HandleSidebar} >
        <Sidebar sidebarVisible={sidebarVisible}/>
  
      </SidebarWrap>
    </>
  );
}

export default App;
