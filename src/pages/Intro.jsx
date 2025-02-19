import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PageTransition from './PageTransition';

const Container = styled.div`
  /* 배경색 화면에 고정시킴, PageTransition컴포넌트 애니메이션 동작위해서 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fe8d1c;

  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    background-color: lightcoral;
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
    background-color: lightblue;
    /* padding: 1rem; */
  }
`;

const MainText = styled.div`
  padding: 8rem;
  width: 100%;
  height: 50%;
  color: #fff;

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    padding: 16rem 10rem;
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
    background-color: lightblue;
    padding: 12rem 4rem;
  }
`;

const MainTextLine1 = styled.div`
  font-size: calc(1.4rem + 2.5vw);
  font-weight: 600;
`;
const MainTextLine2 = styled.div`
  font-size: calc(1rem + 2.5vw);
  font-weight: 600;
`;

const MainTextLine3 = styled.div`
  margin-top: calc(0.2rem + 1vw);
  font-size: calc(0.5rem + 1vw);
`;

const MainTextLine4 = styled.div`
  font-size: calc(0.5rem + 1vw);
`;

const Skills = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  /* flex-direction: column; */
  position: relative;
`;

const SkillsLeft = styled.div`
  /* width: 50%; */
  height: 100%;
  z-index: 9999;
  padding-left: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 600px) {
    padding-left: 4rem;
    justify-content: flex-start;
  }
`;

const GifImage = styled.div`
  /* width: 50%; */
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9999;

  bottom: 0;
  right: 0;

  img {
    width: calc(10rem + 15vw);
    height: calc(10rem + 15vw);
    border-radius: 10px;
    margin-right: 8rem;

  /* 태블릿 (601px ~ 1024px) */
  @media (max-width: 1024px) {
    /* width: 350px;
    height: 350px; */
  }

  /* 모바일 (최대 600px) */
  @media (max-width: 600px) {
    
  }

  }
`;

const AnimatedContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 9998;
`;

const FlowBox = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const FlowWrap = styled.div`
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`;

const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Flow = styled.div`
  font-size: clamp(18px, 30vw, 20rem);
  animation: ${flowing} 20s linear infinite;
  span {
    display: inline-block;
    font-weight: 800;
    padding: 0 20px;
    color: #df7c19;
    text-transform: uppercase;
  }
`;

const ItemBox = styled.div`
  .title {
    background-color: #000;
    display: inline-block;
    padding: 4px 16px;
    border-radius: 5px;
    font-size: calc(1rem + 0.5vw);
    color: #fff;
  }

  .wrap {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .item {
    width: calc(3rem + 2vw);
    height: calc(3rem + 2vw);
    background-color: #fff;
    border-radius: 10px;
    padding: calc(0.3rem + 0.5vw)
  }

  img {
    /* display: block; */
    width: 100%;
    height: 100%;
  }
`;

const Intro = () => {
  return (
    <PageTransition>
      <Container>
        <MainText>
          <MainTextLine1>
            안녕하세요. <span>😁</span>
          </MainTextLine1>
          <MainTextLine2>
            새로운 꿈에 첫발을 내딛고자 하는 이소연입니다<span>✨</span>
          </MainTextLine2>
          <MainTextLine3>
            저는 레이아웃을 디자인하고, CSS를 동적으로 바꾸어가는 과정이
            재미있고 즐거워요!
          </MainTextLine3>
          <MainTextLine4>
            이 즐거움을 바탕으로, 현재에 머무르지 않고 꾸준히 성장해나가고
            싶습니다.
          </MainTextLine4>
        </MainText>

        <Skills>
          <SkillsLeft>
            <ItemBox>
              <div className="title">Skills</div>
              <div className="wrap">
                <div className="item">
                  <img src="src/images/html.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/css.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/javascript.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/jquery.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/react.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/ps.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/illustrator.png" alt="" />
                </div>
              </div>
            </ItemBox>

            <ItemBox>
              <div className="title">Collab Tools</div>
              <div className="wrap">
                <div className="item">
                  <img src="src/images/vscode.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/figma.png" alt="" />
                </div>
                <div className="item">
                  <img src="src/images/git.png" alt="" />
                </div>
              </div>
            </ItemBox>
          </SkillsLeft>

          <GifImage>
            <img src="src/images/hello.gif" alt="프로필 이미지" />
          </GifImage>

          {/* 흐르는 텍스트 애니메이션 영역 */}
          <AnimatedContent>
            <FlowBox>
              <FlowWrap>
                <Flow>
                  <span>It is a long established</span>
                  <span>It is a long established</span>
                  <span>It is a long established</span>
                  <span>It is a long established</span>
                  <span>It is a long established</span>
                  <span>It is a long established</span>
                </Flow>
              </FlowWrap>
            </FlowBox>
          </AnimatedContent>
        </Skills>
      </Container>
    </PageTransition>
  );
};

export default Intro;
