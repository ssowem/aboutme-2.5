import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  background-color: azure;
  width: 100%;
  height: 100%;
  padding: 5rem 0 8rem 8rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 8.2rem;
  font-weight: 800;
`;

const CardWrap = styled.div`
  width: 100%;
  height: 800px;
  /* border: 1px solid red; */
  display: flex;
  gap: 2rem;

  overflow-x: scroll;
  /* flex-direction: column; */
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .card {
    width: 500px;
    border: 1px solid black;
  }

  .card.two {
    height: 50%;
  }

  .card.single {
    height: 100%;
  }
`;

function Portfolio({onScrollChange}) {
  const CardWrapRef = useRef(null); // CardWrap(드래그할수있는 영역) 참조하
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // 드래그시작점 X축 좌표값
  const [totalX, setTotalX] = useState(0);

  
  const ScrollPosition = () => {
    if (!CardWrapRef.current) return;

    const isAtStart = CardWrapRef.current.scrollLeft === 0;
    onScrollChange(isAtStart); // app 부모 컴포넌트에 상태 전달
  };

 

  // 마우스 드래그 시작될때 동작
  const onDragStart = (e) => {
    console.log('드래그 시작');
    setIsDragging(true); // 드래그중으로 상태업데이트
    setStartX(e.clientX); // 시작 위치(X좌표) 를 저장
    if (CardWrapRef.current) {
      setTotalX(CardWrapRef.current.scrollLeft); // 카드랩 스크롤 위치를 저장
    }
  };

  // 마우스가 드래그 될때 스크롤위치를 업데이트 시켜주는 동작
  const onDragMove = (e) => {
    // 드래그중이 아닐때 그대로 반환 (isDragging = false일때)
    if (!isDragging) return;

    // 드래그중일때 동작
    const currentMouseX = e.clientX; // 현재 마우스 위치를 저장
    const dragX = startX - currentMouseX; // 드래그 거리를 저장

    if (CardWrapRef.current) {
      // 스크롤 업데이트
      CardWrapRef.current.scrollLeft = totalX + dragX;
      ScrollPosition();
    
    }
  };

  // 드래그 끝났을때 isDragging 상태로 업데이트 시키는 동작
  const onDragEnd = () => {
    setIsDragging(false);
    ScrollPosition();

  };

  const onWheel = (e) => {
    if (!CardWrapRef.current) return;
    // e.preventDefault();
    CardWrapRef.current.scrollLeft += e.deltaY; // 세로 휠값을 가로스크롤로 적용;=
    ScrollPosition();
  };

  return (
    <Container>
      <Title>PORTPOLIO</Title>

      <CardWrap
        ref={CardWrapRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onWheel={onWheel}
        // onChange={handleInputChange}
      >
        <CardBox>
          <div className="card two">포트폴리오 제목01</div>
          <div className="card two">포트폴리오 제목02</div>
        </CardBox>

        <CardBox>
          <div className="card single">포트폴리오 제목03</div>
        </CardBox>

        <CardBox>
          <div className="card two">포트폴리오 제목01</div>
          <div className="card two">포트폴리오 제목02</div>
        </CardBox>

        <CardBox>
          <div className="card single">포트폴리오 제목03</div>
        </CardBox>

        <CardBox>
          <div className="card two">포트폴리오 제목01</div>
          <div className="card two">포트폴리오 제목02</div>
        </CardBox>

        <CardBox>
          <div className="card single">포트폴리오 제목03</div>
        </CardBox>
      </CardWrap>
    </Container>
  );
}

export default Portfolio;
