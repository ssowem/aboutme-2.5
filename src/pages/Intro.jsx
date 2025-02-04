import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PageTransition from './PageTransition';

const Container = styled.div`
  /* 배경색 화면에 고정시킴, PageTransition컴포넌트 애니메이션 동작위해서 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fe8d1c;
  z-index: -1;

  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: 62.5%;
  overflow: hidden;
`;

const MainText = styled.div`
  padding: 10rem;
  width: 100%;
  height: 50%;
  color: #fff;
`;

const MainTextLine1 = styled.div`
  font-size: 6.2rem;
  font-weight: 600;
`;
const MainTextLine2 = styled.div`
  font-size: 6.2rem;
  font-weight: 600;
`;
const MainTextLine3 = styled.div`
  margin-top: 20px;
  font-size: 28px;
`;
const MainTextLine4 = styled.div`
  font-size: 28px;
`;

const Skills = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: #266194; */

  display: flex;
  position: relative;
`;

const SkillsLeft = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: antiquewhite; */
  z-index: 9999;
  padding-left: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const SkillsRight = styled.div`
  width: 50%;
  height: 100%;

  /* background-color: #8b8b1a; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9999;
  img {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    margin: 0 80px 100px 0;
  }
`;

const AnimatedContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
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
    font-size: 20px;
    color: #fff;
  }

  .wrap {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .item {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 10px;
    padding: 14px;
  }

  img {
    /* display: block; */
    width: 100%;
    height: 100%;
  }
`;

const Intro = () => {
  return (
    <Container>
      <PageTransition>
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

          <SkillsRight>
            <img src="src/images/hello.gif" alt="프로필 이미지" />
          </SkillsRight>

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
      </PageTransition>
    </Container>
  );
};

export default Intro;
