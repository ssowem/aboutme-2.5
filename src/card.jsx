import React from 'react';
import styled from '@emotion/styled';
const Item = styled.div`
  border: 1px solid #000;
  width: 700px;
  height: 500px;
  flex-shrink: 0;
`;

function Card() {
  return (
    <Item>
      <span>이름</span>
      <p>내용인데요내용인데요내용인데요내용인데요내용인데요</p>
    </Item>
  );
}

export default Card;
