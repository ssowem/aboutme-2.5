import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;

  padding: 100px 80px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 8.2rem;
  font-weight: 800;
`;

const TextWrap = styled.div`
  /* border: 2px solid red; */
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  justify-content: center;
`;

const reveal = keyframes`
 0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const grow = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  60% {
    transform: translateY(10px);
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
  align-self: flex-end; //부모요소의 stretch 영향 받지않게함
  margin-right: 30rem;

  .text-wrap {
    font-size: 4.2rem;
    background-color: #ebebeb;
    padding: 10px 30px;
    border-radius: 40px;
    opacity: 0;
    animation: ${grow} 0.5s ease-out;
    animation-delay: 0s;
    animation-fill-mode: forwards;
   
    span:first-child {
      margin-right: 1rem;
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
  margin-left: 32rem;

  /* animation: ${reveal} 3s cubic-bezier(0.77, 0, 0.175, 1) forwards; */

  .text-wrap {
    font-size: 6.2rem;
    background-color: #fe8d1c;
    color: #fff;
    padding: 10px 30px;
    border-radius: 60px;
    animation: ${grow} 0.5s ease-out;
    animation-delay: 0.3s;
    opacity: 0;
    animation-fill-mode: forwards;
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
  margin-left: 20rem;

  .text-wrap {
    font-size: 6.2rem;
    background-color: #000000;
    color: #fff;
    padding: 10px 30px;
    border-radius: 60px;
    animation: ${grow} 0.5s ease-out;
    animation-delay: .6s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;

const Text4 = styled.div`
  align-self: flex-start;
  margin-left: 54rem;

  position: relative;

  .text-wrap {
    font-size: 4.2rem;
    background-color: #ebebeb;
    padding: 10px 30px;
    border-radius: 40px;
    animation: ${grow} 0.5s ease-out;
    animation-delay: .9s;
    opacity: 0;
    animation-fill-mode: forwards;
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

function About() {
  return (
    <Container>
      <Title>ABOUT ME</Title>

      <TextWrap>
        <Text1>
          <div className="text-wrap">
            <span>#다정한</span>
            <span>#조화로운</span>
          </div>

          <div className="emoji-wrap">
            {/* <span className="emoji">💫</span> */}
          </div>
        </Text1>

        <Text2>
          <div className="text-wrap">
            <p>상호간의 조화와 균형을 중요시하며,</p>
          </div>

          <div className="emoji-wrap"></div>
        </Text2>

        <Text3>
          <div className="text-wrap">
            <p>모든일에 끈기와 열정을 갖고 최선을 다합니다.</p>
          </div>
        </Text3>

        <Text4>
          <div className="emoji-wrap">
            {/* <span className="emoji">🙋🏻‍</span> */}
          </div>
          <div className="text-wrap">
            <span>#겸손함</span>
            <span>#책임감</span>
          </div>
        </Text4>
      </TextWrap>
    </Container>
  );
}

export default About;
