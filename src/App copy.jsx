import './App.css';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import Card from './card';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100vw;
  height: auto;
  gap: 10px;
  scroll-behavior: smooth;
`;

function App() {
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  // 드래그 시작 시점 X축 좌표값
  const [startX, setStartX] = useState(0);

  // 드래그 시작 시점 스크롤 포지션이 포함된 X축 좌표값;
  const [totalX, setTotalX] = useState(0);

  // 마우스 드래그 시작될때 동작
  const onDragStart = (e) => {
    console.log('드래그시작');
    // 드래그 시작되면 isDrag 를 true로 업데이트
    setIsDragging(true);
    setStartX(e.clientX); // 마우스 시작 위치
    if (containerRef.current) {
      setTotalX(containerRef.current.scrollLeft); // 시작 시점 스크롤 위치
    }
  };

  // 마우스가 드래그 될때 스크롤위치 업데이트 시켜주는 동작
  const onDragMove = (e) => {
    if (!isDragging) return;

    console.log('드래그 될때');
    const x = e.clientX; // 현재 마우스 위치
    const walk = startX - x; // 드래그 거리
    if (containerRef.current) {
      containerRef.current.scrollLeft = totalX + walk; // 스크롤 업데이트
    }
  };

  // 드래그가 끝났을 때 (눌렀던 마우스를 떼거나 커서가 스크롤 영역밖으로 벗어난 경우)
  const onDragEnd = () => {
    console.log("드래그끝")
    setIsDragging(false);
  };

  const onWheel = (e) => {
    if (!containerRef.current) return;
    e.preventDefault(); // 기본 휠 동작(수직 스크롤) 방지
    containerRef.current.scrollLeft += e.deltaY; // 수직 휠 값을 수평 스크롤로 적용
  };

  return (
    <Container
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onWheel={onWheel}
    >
      {[...Array(5)].map((item, index) => (
        <Card key={index}></Card>
      ))}
    </Container>
  );
}

export default App;
