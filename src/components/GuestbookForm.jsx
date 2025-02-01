import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const InputField = styled.input`
  padding: 0.8rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  border: none;
`;

const TextArea = styled.textarea`
  height: 10rem;
  padding: 0.8rem;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  background-color: #000;
  cursor: pointer;
`;

function GuestbookForm() {
  return (
    <Container>
      <InputField type="text" placeholder="닉네임" />
      <TextArea placeholder="내용을 입력해주세요" />

      <SubmitButton>전송</SubmitButton>
    </Container>
  );
}

export default GuestbookForm;
