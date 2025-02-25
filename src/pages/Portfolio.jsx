import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import PageTransition from './PageTransition';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import { style } from 'framer-motion/client';

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

const ContentWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 10rem;
`;

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .text {
    font-size: 4em;
    font-weight: 600;
  }

  .button-wrap {
    display: flex;
    gap: 1.5rem;

    button {
      cursor: pointer;
      font-size: 4.5rem;

      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
    }

    .page-number {
      font-size: 3rem;
      font-weight: 600;
      display: flex;
      gap: 1rem;
    }
  }
`;

const CardWrap = styled.div`
  /* width: 100%; */
  width: 134rem;

  height: auto;
  overflow: hidden;
  border: 2px solid #580cbb;

  .swiper {
    display: flex;
    gap: 4rem;
  }
`;

const CardBox = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid red; */
  /* border: 1px solid red; */

  .card {
    overflow: hidden;
    width: 520px;
    height: 520px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
    position: relative;

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

const cards = [
  { id: 1, image: 'src/images/todolist.png' },
  { id: 2, image: 'src/images/todolist.png' },
  { id: 3, image: 'src/images/todolist.png' },
  { id: 4, image: 'src/images/todolist.png' },
  { id: 5, image: 'src/images/todolist.png' },
  { id: 6, image: 'src/images/todolist.png' },
];


const Portfolio = () => {

  const [index, setIndex] = useState(0);
  const translateXValue = 56; // 슬라이드이동거리, gap 2rem포함됨
  const carouselRef = useRef(null);

  useEffect(() => {
    if(index < 0) {
      setIndex(cards.length - 1);
    } else if(index >= cards.length) {
      setIndex(0);
    }
  }, [index])



  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <Container>
      <PageTransition>
        <Title>Portpolio</Title>

        <ContentWrap>
          <PageWrap>
            <div className="text">열심히 준비해온 포트폴리오 입니다:)</div>

            <div className="button-wrap">
              <button>
                <LiaArrowLeftSolid onClick={handlePrevClick} />
              </button>

              <div className="page-number">
                <span className="total">6</span>
                <span>/</span>
                <span className="current">1</span>
              </div>

              <button>
                <LiaArrowRightSolid onClick={handleNextClick} />
              </button>
            </div>
          </PageWrap>

          <CardWrap>
            <div
              className="swiper"
              style={{
                transform: `translate3d(-${translateXValue}rem, 0, 0)`,
                transition: 'transform 0.5s ease-in-out'
              }}
              ref={carouselRef}
            >
              {cards.concat(cards).map((card, index) => (
                <CardBox key={index}>
                  <div className="card">
                    <div className="thumbnail">
                      <img src={card.image}/>
                    </div>

                    <div className="tag-box">
                      <span>{index}. TO DO LIST</span>

                      <div className="skills-wrap">
                        <img src="src/images/react-js-icon.png" />
                      </div>
                    </div>

                    <div className="modal-box">
                      <span>📌Overveiw</span>

                      <p>
                        리액트를 사용해서 만든 포트폴리오 입니다. 백엔드 api
                        협업 경험이 있으며, 다양한 경험을 할 수 있었던
                        포트폴리오 중 하나입니다
                      </p>
                    </div>
                  </div>
                </CardBox>
              ))}

            </div>
          </CardWrap>
        </ContentWrap>
      </PageTransition>
    </Container>
  );
};

export default Portfolio;
