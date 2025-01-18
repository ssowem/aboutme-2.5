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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const { deltaY } = event; // 스크롤 방향 감지
    const totalSections = containerRef.current.children.length;

    if (deltaY > 0 && activeIndex < totalSections - 1) {
      //아래로 스크롤
      setActiveIndex((prev) => prev + 1);
    } else if (deltaY < 0 && activeIndex > 0) {
      // 위로 스크롤
      setActiveIndex((prev) => prev - 1);
    }
  };

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
        <About />
      </Section>

      <Section>
        <Portfolio />
      </Section>
    </Container>
  );
}

export default App;
