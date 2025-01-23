import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 8.2rem;
  font-weight: 800;
  color: #000000;
`;

const CardWrap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  gap: 2rem;

  overflow: hidden;
  padding-top: 1rem;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .card {
    border: 2px solid red;
    overflow: hidden;
    width: 720px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
    position: relative;

    .thumbnail {
      background-color: #000000;

      img {
        opacity: 0.8;
        width: 100%;
        height: 100%;
        /* display: block; */
      }
    }

    .tag-box {
      position: absolute;
      width: 100%;
      height: 8rem;
      display: flex;
      justify-content: space-between;
      background-color: #000000;

      padding: 0 1rem 1rem 0;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;

      /* transform: translateY(2rem); */

      span {
        color: #ffffff;
        font-size: 2.4rem;
        font-weight: 600;
        margin: 1rem 0 0 2rem;
      }

      .skills-wrap {
        display: flex;
        gap: 1rem;
        height: 4rem;
        background-color: aqua;
        margin-right: 1rem;
        
      }

      .skills-wrap img {
        width: 4rem;

        /* border: 3px solid #fff; */
        border-radius: 0.5rem;
        border: 1px solid #ffffff;
        padding: .5rem;
      }
    }
  }

  .card:hover .tag-box {
    /* transform: translateY(1rem); */
    transition: 1s;
  }

  .card:hover .thumbnail img {
    opacity: 1;
    transition: 1s;
  }

  .card.two {
    height: 50%;
  }

  .card.single {
    height: 100%;
  }
`;

function Portfolio({ scrollUpdate }) {
  const CardWrapRef = useRef(null); // CardWrap(드래그할수있는 영역) 참조하
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // 드래그시작점 X축 좌표값
  const [totalX, setTotalX] = useState(0);

  const scrollChecker = () => {
    const xScrollValue = CardWrapRef.current.scrollLeft;

    if (xScrollValue === 0) {
      scrollUpdate(true);
      console.log('0임요');
    } else {
      scrollUpdate(false);
    }
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
    }
  };

  // 드래그 끝났을때 isDragging 상태로 업데이트 시키는 동작
  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onWheel = (e) => {
    if (!CardWrapRef.current) return;
    // e.preventDefault();
    CardWrapRef.current.scrollLeft += e.deltaY; // 세로 휠값을 가로스크롤로 적용;=
  };

  return (
    <Container onWheel={onWheel}>
      <Title>PORTPOLIO</Title>

      <CardWrap
        ref={CardWrapRef}
        onScroll={scrollChecker}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <CardBox>
          <div className="card single">
            <div className="thumbnail">
              <img src="src/images/todolist.png" />
            </div>

            <div className="tag-box">
              <span>TO DO LIST</span>

              <div className="skills-wrap">
                <img src="src/images/react-js-icon.png" />
              </div>
            </div>
          </div>
        </CardBox>

        <CardBox>
          <div className="card single">
            <div className="text-box">
              <span>TO DO LIST</span>
            </div>
          </div>
        </CardBox>

        <CardBox>
          <div className="card single">
            <img src="src/images/todolist.png" />
            <div className="text-box">
              <span>TO DO LIST</span>
            </div>
          </div>
        </CardBox>

        <CardBox>
          <div className="card single">
            <img src="src/images/todolist.png" />
            <div className="text-box">
              <span>TO DO LIST</span>
            </div>
          </div>
        </CardBox>

        <CardBox>
          <div className="card single">
            <img src="src/images/todolist.png" />
            <div className="text-box">
              <span>TO DO LIST</span>
            </div>
          </div>
        </CardBox>

        <CardBox>
          <div className="card two">
            <span>메가박스</span>
          </div>
          <div className="card two">
            <span>스포티파이</span>
          </div>
        </CardBox>
      </CardWrap>
    </Container>
  );
}

export default Portfolio;
