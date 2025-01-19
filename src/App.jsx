import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import Intro from './components/intro';
import Portfolio from './components/Portfolio';
import About from './components/About';
// import Intro from './components/intro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.8s ease-in-out; /* 부드러운 애니메이션 */
  will-change: transform;
  width: 100vw;
`;

const Section = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

function App() {
  const containerRef = useRef(null);
  // localStorage은 문자열로 저장되고 반환된다. saveIndex를 숫자로 반환하기위해 Number를 사용
  const saveIndex = Number(localStorage.getItem('activeIndex')) || 0; 
  const [activeIndex, setActiveIndex] = useState(saveIndex);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  console.log(activeIndex);

  const handleScroll = (event) => {

    const { deltaY } = event; 
    const totalSections = containerRef.current.children.length;

    // activeIndex가 0이거나1일때 (2아래일때)
    if (deltaY > 0 && activeIndex < totalSections - 1) {
      //아래로 스크롤
      setActiveIndex((prev) => prev + 1);

    } else if (deltaY < 0 && activeIndex > 0) {
      //activeIndex가 1이거나 2일때
      // 위로 스크롤
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {

    localStorage.setItem('activeIndex', activeIndex);

    if (activeIndex === 1) {
      setIsAboutVisible(true);
    } else {
      setTimeout(() => {
        setIsAboutVisible(false); 
      }, 500);
    }
  }, [activeIndex]);


  return (
    <Container
      className="slider"
      onWheel={handleScroll}
      ref={containerRef}
      style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
    >
      <Section>
        <Intro />
      </Section>

      <Section>
        <About isAboutVisible={isAboutVisible} />
      </Section>

      <Section>
        <Portfolio />
      </Section>
    </Container>
  );
}

export default App;
