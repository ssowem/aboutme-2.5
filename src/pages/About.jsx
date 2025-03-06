import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PageTransition from './PageTransition';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;

  padding: 10rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    background-color: lightcoral;
    padding: 8rem;
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
    background-color: lightblue;
    padding: 12rem 4rem;
  }
`;

const Title = styled.div`
  color: #1a1a1a;
  font-family: 'Lexend', serif;
  /* font-size: 8.2rem; */
  font-size: calc(2rem + 4vw);
  font-weight: 800;
`;

const TextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  justify-content: center;
`;

const ZoomIn = keyframes`
  0%{
        opacity: 0;
        transform: scale(0);
    }
    65%{
        opacity: 1;
        transform: scale(1);
    }
   
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

const float = keyframes`
   0% {
    transform: translateY(0); /* 기본 위치 */
  }
  50% {
    transform: translateY(-10px); /* 위로 살짝 이동 */
  }
  100% {
    transform: translateY(0); /* 원래 위치로 돌아옴 */
  }
`;

const Text1 = styled.div`
  //부모요소의 stretch 영향 받지않게함
  align-self: flex-end;
  margin-right: 38rem;
  /* margin-right: calc(30rem + 0vw); */

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    margin-right: 20rem;
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
    margin-right: 10rem;
  }

  .text-wrap {
    background-color: #ebebeb;
    font-size: calc(0.5rem + 2vw);
    padding: 1.5rem 4rem;
    border-radius: 5rem;
    transform: scale(0);

    /* 태블릿 (601px ~ 1024px) */
    @media (max-width: 1024px) {
      padding: 1rem 1.5rem;
    }

    /* 모바일 (최대 600px) */
    @media (max-width: 600px) {
      padding: 0.8rem 1.2rem;
    }

    &.active {
      opacity: 1;
      animation: ${ZoomIn} 1s ease-in-out 0s;
      animation-fill-mode: forwards;
    }
  }

  .emoji-wrap {
    position: relative;
    animation: ${float} 2s ease-in-out infinite;

    &::before {
      content: '💫';
      position: absolute;
      /* right: -10rem; */
      right: calc(-2.5rem - 3vw);
      bottom: 0rem;
      /* font-size: 12rem; */
      font-size: calc(2rem + 4.5vw);
      transform: rotate(30deg);
    }
  }
`;

const Text2 = styled.div`
  align-self: flex-start;
  margin-left: 18rem;

  .text-wrap {
    background-color: #fe8d1c;
    color: #fff;

    font-size: calc(0.5rem + 2vw);
    padding: 1.5rem 6rem;
    border-radius: 60px;
    transform: scale(0);

    /* 태블릿 (601px ~ 1024px) */
    @media (max-width: 1024px) {
      padding: 1.5rem 3rem;
    }

    /* 모바일 (최대 600px) */
    @media (max-width: 600px) {
      padding: 1rem 2rem;
    }

    &.active {
      opacity: 1;
      animation: ${ZoomIn} 1s ease-in-out 0.3s;
      animation-fill-mode: forwards;
    }
  }

  .emoji-wrap {
    position: relative;
    animation: ${float} 2s ease-in-out infinite;

    &::before {
      content: '🌱';
      position: absolute;
      font-size: calc(2rem + 4.5vw);
      bottom: 0;
      right: calc(-1rem - 3vw);
    }
  }

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    align-self: center;
    margin-left: 0;
  }
`;

const Text3 = styled.div`
  align-self: flex-start;
  margin-left: 36rem;

  .text-wrap {
    background-color: #000000;
    color: #fff;
    font-size: calc(0.5rem + 2vw);
    padding: 1.5rem 6rem;
    border-radius: 60px;
    opacity: 0;
    transform: scale(0);

    /* 태블릿 (601px ~ 1024px) */
    @media (max-width: 1024px) {
      padding: 1.5rem 3rem;
    }

    /* 모바일 (최대 600px) */
    @media (max-width: 600px) {
      padding: 1rem 2rem;
    }

    &.active {
      opacity: 1;
      animation: ${ZoomIn} 1s ease-in-out 0.6s;
      animation-fill-mode: forwards;
    }
  }

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    align-self: center;
    margin-left: 0;
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
  }
`;

const Text4 = styled.div`
  align-self: center;
  margin-right: 20rem;

  position: relative;

  .text-wrap {
    background-color: #ebebeb;
    font-size: calc(0.5rem + 2vw);
    padding: 1.5rem 4rem;
    border-radius: 5rem;
    opacity: 0;
    transform: scale(0);

    /* 태블릿 (601px ~ 1024px) */
    @media (max-width: 1024px) {
      padding: 1rem 1.5rem;
    }

    /* 모바일 (최대 600px) */
    @media (max-width: 600px) {
      padding: 0.8rem 1.2rem;
    }

    &.active {
      opacity: 1;
      animation: ${ZoomIn} 1s ease-in-out 0.9s;
      animation-fill-mode: forwards;
    }
  }

  .emoji-wrap {
    position: relative;
    animation: ${float} 2s ease-in-out infinite;
    z-index: 9998;

    &::before {
      content: '🙋🏻‍';
      position: absolute;
      font-size: calc(2rem + 4.5vw);
      /* top: -8rem;
      left: -10rem; */

      top: calc(-2rem - 3vw);
      left: calc(-4rem - 3.5vw);
      z-index: 9999;
    }
  }

  span:last-child {
    margin-left: 1rem;
  }
`;

const About = ({ isAboutVisible }) => {
  return (
    <PageTransition>
      <Container>
        <Title>ABOUT ME</Title>

        <TextWrap>
          <Text1>
            <div
              className={`text-wrap ${isAboutVisible === true ? 'active' : ''}`}
            >
              <span>#다정한</span>
              <span>#조화로운</span>
            </div>

            <div className="emoji-wrap">
              {/* <span className="emoji">💫</span> */}
            </div>
          </Text1>

          <Text2>
            <div
              className={`text-wrap ${isAboutVisible === true ? 'active' : ''}`}
            >
              <p>상호간의 조화와 균형을 중요시하며,</p>
            </div>

            <div className="emoji-wrap"></div>
          </Text2>

          <Text3>
            <div
              className={`text-wrap ${isAboutVisible === true ? 'active' : ''}`}
            >
              <p>모든일에 끈기와 열정을 갖고 최선을 다합니다.</p>
            </div>
          </Text3>

          <Text4>
            <div className="emoji-wrap">
              {/* <span className="emoji">🙋🏻‍</span> */}
            </div>
            <div
              className={`text-wrap ${isAboutVisible === true ? 'active' : ''}`}
            >
              <span>#겸손함</span>
              <span>#책임감</span>
            </div>
          </Text4>
        </TextWrap>
      </Container>
    </PageTransition>
  );
};

export default About;
