import styled from '@emotion/styled'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 0.4rem;
  overflow: hidden;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.4rem;
`;

const PasswordInput = styled.input`
  width: 10rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.4rem;
`;

const MessageTextarea = styled.textarea`
  height: 10rem;
  padding: 0.8rem;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  resize: none;
`;

const GuestbookSubmitButton = styled.button`
  padding: 0.8rem;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  background-color: #000;
  cursor: pointer;
`;


function MiniGuestbookForm() {
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
  
  export default MiniGuestbookForm;