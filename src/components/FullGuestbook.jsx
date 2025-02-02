import styled from '@emotion/styled';
import React from 'react';
import FullGuestbookForm from './FullGuestbookForm';
import FullGuestbookList from './FullGuestbookList';

const Container = styled.div`
  /* background-color: #e67272; */
  width: 100%;
  height: 100%;
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.span`
  line-height: 1;
  color: #000000;
  .main {
    font-size: 8.2rem;
    font-weight: 800;
  }
  .one-line {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`;


function FullGuestbook() {
  return (
    <Container>
      <Title>
        <div className="main">Guestbook</div>
        <div className="one-line">자유롭게 방명록을 남겨주세요:)</div>
      </Title>

      <FullGuestbookForm />
      <FullGuestbookList />

    </Container>
  );
}

export default FullGuestbook;