import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PageTransition from './PageTransition';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;

  padding: 100px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  color: #1a1a1a;
  font-family: 'Lexend', serif;
  font-size: 8.2rem;
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

const grow = keyframes`
  0% {
    transform: translateY(-70px);
    opacity: 0;
  }

  60% {
    transform: translateY(20px);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
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

  .text-wrap {
    background-color: #ebebeb;
    font-size: 3.8rem;
    padding: 1.5rem 4rem;
    border-radius: 5rem;
    transform: scale(0);

    /* span:first-child {
      margin-right: 1rem;
    } */

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
      right: -10rem;
      bottom: 0rem;
      font-size: 12rem;
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
    font-size: 4.8rem;
    padding: 1.5rem 6rem;
    border-radius: 60px;
    transform: scale(0);

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
      font-size: 10rem;
      bottom: 0;
      right: -8rem;
    }
  }
`;

const Text3 = styled.div`
  align-self: flex-start;
  margin-left: 36rem;

  .text-wrap {
    background-color: #000000;
    color: #fff;
    font-size: 4.8rem;
    padding: 1.5rem 6rem;
    border-radius: 60px;
    opacity: 0;
    transform: scale(0);

    &.active {
      opacity: 1;
      animation: ${ZoomIn} 1s ease-in-out 0.6s;
      animation-fill-mode: forwards;
    }
  }
`;

const Text4 = styled.div`
  align-self: center;
  margin-right: 20rem;

  position: relative;

  .text-wrap {
    background-color: #ebebeb;
    font-size: 3.8rem;
    padding: 1.5rem 4rem;
    border-radius: 5rem;
    opacity: 0;
    transform: scale(0);

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
      font-size: 10rem;
      top: -8rem;
      left: -10rem;
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
