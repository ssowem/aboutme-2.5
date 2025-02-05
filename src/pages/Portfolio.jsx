import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import PageTransition from './PageTransition';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  padding: 10rem 0 10rem 10rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: 'Lexend', serif;
  font-size: 8.2rem;
  font-weight: 800;
  color: #1a1a1a;
`;

const CardWrap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  gap: 2rem;

  overflow: hidden;
  /* margin-top: 1rem; */
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .card {
    overflow: hidden;
    width: 720px;
    height: 520px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
    position: relative;
    border: 1px solid #fff;

    .thumbnail {
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        transition: transform 1s ease-out;
        width: 100%;
        height: 100%;
      }
    }

    .tag-box {
      position: absolute;
      width: 100%;
      height: 8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fe8d1c;

      padding: 0 1rem 1rem 0;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      transition: 1s ease-out;
      transform: translateY(2rem);

      span {
        color: #ffffff;
        font-size: 2.4rem;
        font-weight: 600;
        margin-left: 2rem;
        transition: 1s ease-out;
      }

      .skills-wrap {
        display: flex;
        gap: 1rem;
        margin-right: 1rem;
        justify-content: center;
        border: 1px solid #bdbdbd;
        border-radius: 0.5rem;
        transition: 1s ease-out;
        background-color: #000;
      }

      .skills-wrap img {
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
      }
    }

    .modal-box {
      opacity: 0;
      transition: 0.2s;

      position: absolute;
      width: 420px;
      height: auto;
      background-color: #ffffff;

      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      /* padding: 3rem; */
      color: #000000;
      padding: 4rem 4rem;
      border-radius: 1rem;
      border: 2px solid #000;

      span {
        font-size: 1.8rem;
        font-weight: 600;
        display: inline-block;
        line-height: 1;
      }

      p {
        font-size: 1.6rem;
        margin-top: 1.2rem;
      }
    }
  }

  .card:hover .modal-box {
    opacity: 1;
  }

  .card:hover .tag-box {
    transform: translateY(1rem);
  }

  .card:hover .thumbnail {
    background-color: #000000;
  }

  .card:hover .thumbnail img {
    opacity: 0.3;
    transform: scale(1.1);
    /* transform: translateX(-10rem); */
  }
`;

const Portfolio = ({ portFolioIsAtStart, portFolioIsAtEnd , sevedScrollPosition, setSevedScrollPosition  }) => {
  const CardWrapRef = useRef(null); // CardWrap(드래그할수있는 영역) 참조하
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); // 드래그시작점 X축 좌표값
  const [totalX, setTotalX] = useState(0);
  const [scrollTransitionTimeout, setScrollTransitionTimeout] = useState(null);
  // sevedScrollPosition값 변경될때마다 실행
  useEffect(() => {
    // 저장된스크롤값이있을때 && 스크롤할대상이있는지확인
    if(sevedScrollPosition !== null && CardWrapRef.current) {
      //현재가로스크롤위치에  저장된위치값을 줘서 이동시킴
      CardWrapRef.current.scrollLeft = sevedScrollPosition;
    }

  },[sevedScrollPosition])

 
  const scrollChecker = () => {
    // 스크롤 시작점0일때 앱컴포넌트로 true 업데이트,
    // 스크롤 끝지점일때 앱컴포넌트로 true업데이트

    // 스크롤 시작점 값 (시작점이 0일때 위로스크롤 가능하게함)
    const xScrollValue = CardWrapRef.current.scrollLeft;

    // 스크롤 가능한 전체너비의값을 저장하는 변수(전체가로길이,스크롤포함)
    const TotalScrollWidth = CardWrapRef.current.scrollWidth;

    // 현재화면에 보이는 가로길이를 저장하는 변수 (스크롤제외)
    const visibleWidth = CardWrapRef.current.clientWidth;

    // 스크롤이 끝나는 좌표값을 저장하는 변수
    const scrollMaxX = TotalScrollWidth - visibleWidth;

    const BUFFER = 20; // 끝에서 20px일때트리거



    if (xScrollValue <= BUFFER) {
      if (!scrollTransitionTimeout) {
        setScrollTransitionTimeout(
          setTimeout(() => {
            portFolioIsAtStart(true);
            setSevedScrollPosition(xScrollValue);
          }, 300)
        );
      }
    } else {
      clearTimeout(scrollTransitionTimeout);
      setScrollTransitionTimeout(null);
      portFolioIsAtStart(false);
    }


    if (xScrollValue >= scrollMaxX - BUFFER) {
      if (!scrollTransitionTimeout) {
        setScrollTransitionTimeout(
          setTimeout(() => {
            portFolioIsAtEnd(true);
            setSevedScrollPosition(xScrollValue);
          }, 300)
        );
      }
    } else {
      clearTimeout(scrollTransitionTimeout);
      setScrollTransitionTimeout(null);
      portFolioIsAtEnd(false);
    }
  };

  // 마우스 드래그 시작될때 동작
  const onDragStart = (e) => {
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
    CardWrapRef.current.scrollLeft += e.deltaY * 0.5; // 세로 휠값을 가로스크롤로 적용, 스크롤 속도 0.8배 더 줄임;=
  };

  return (
    <Container onWheel={onWheel}>
      <PageTransition>
        <Title>Portpolio</Title>

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

              <div className="modal-box">
                <span>📌Overveiw</span>

                <p>
                  리액트를 사용해서 만든 포트폴리오 입니다. 백엔드 api 협업
                  경험이 있으며, 다양한 경험을 할 수 있었던 포트폴리오 중
                  하나입니다
                </p>
              </div>
            </div>
          </CardBox>

          <CardBox>
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
        </CardWrap>
      </PageTransition>
    </Container>
  );
};

export default Portfolio;
