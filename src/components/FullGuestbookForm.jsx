import styled from '@emotion/styled';

const FormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  background-color: #f7f2ed;
  border: 1px solid #000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const NicknameInput = styled.input`
  width: 50%;
  padding: 0.8rem;
  font-size: 1.4rem;
  border: 1px solid #dadada;
`;

const PasswordInput = styled.input`
  width: 50%;
  padding: 0.8rem;
  font-size: 1.4rem;
  border: 1px solid #dadada;
`;

const MessageTextarea = styled.textarea`
  width: 100%;
  height: 8rem;
  padding: 1rem;
  font-size: 1.4rem;
  border: 1px solid #dadada;
  resize: none;
`;

const GuestbookSubmitButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: #fff;
  background-color: #000;
  padding: 1rem 5rem;
  border-radius: 0.5rem;
`;

function FullGuestbookForm() {
  return (
    <FormContainer>
      <InputWrap>
        <NicknameInput type="text" placeholder="닉네임" />
        <PasswordInput type="password" placeholder="비밀번호" />
      </InputWrap>

      <MessageTextarea placeholder="내용을 입력해주세요" />

      <GuestbookSubmitButton>등록하기</GuestbookSubmitButton>
    </FormContainer>
  );
}

export default FullGuestbookForm;
