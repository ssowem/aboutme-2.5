import styled from '@emotion/styled';
import { useState } from 'react';

const FormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: #f7f2ed;
  border: 1px solid #979797;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.4rem;
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

function GuestbookForm({handleAddList}) {
  console.log("handleAddList함수가전달됨?",handleAddList)
  
  // 닉네임,비밀번호, 방명록 내용을 감지하고 관리
  const [nicknameValue, setNicknameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [guestMessageValue, setGuestMessageValue] = useState('');

  // 닉네임 입력 상태를 감지하는 함수
  const nicknameHandleChange = (event) => {
    const inputValue = event.target.value;
    setNicknameValue(inputValue);
  };

  // 비밀번호 입력상태를 감지하는 함수
  const passwordHandleChange = (event) => {
    const inputValue = event.target.value;
    setPasswordValue(inputValue);
  };

  // 메세지 입력 상태를 감지하는 함수
  const messageHandleChange = (event) => {
    const inputValue = event.target.value;
    setGuestMessageValue(inputValue);
  };

  const words = [
    '건강한',
    '똑똑한',
    '풋풋한',
    '귀여운',
    '멋진',
    '빠른',
    '튼튼한',
    '즐거운',
    '기쁜',
    '행복한',
  ];
  const names = [
    '댕댕이',
    '냥냥이',
    '사람',
    '로봇',
    '노트북',
    '피자',
    '마법사',
    '햄버거',
    '요정',
    '구름',
    '눈사람',
  ];

  // 닉네임을 랜덤으로 조합해주는 함수
  const getRandemNickname = () => {
    // words 배열에서 무작위로 하나의단어를 선택한다.
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // names 배열에서 무작위로 하나의단어를 선택한다.
    const randomName = names[Math.floor(Math.random() * names.length)];
    // 0 ~ 999범위 랜덤 숫자 만든다
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${randomWord} ${randomName}${randomNumber}`;
  };

  // 등록하기 함수
  const HandleSubmit = (event) => {
    event.preventDefault();
    // 닉네임이 입력되어있으면 유지 (trim()은 문자열의 앞뒤공백을 제거)
    let finalNickname = nicknameValue.trim();

    // 닉네임이 빈값이면 랜덤 닉네임 생성후 넣어주기
    if(finalNickname === ""){
      finalNickname = getRandemNickname();
      setNicknameValue(finalNickname);
    }
   
    // 비밀번호가 4글자인지 확인
    if(passwordValue.length !== 4) {
      alert("비밀번호를 4자로 입력해주세요");
      return;
    }

    // 방명록 내용이 빈값인지 확인
    if(guestMessageValue.trim() === "") {
      alert("방명록 내용을 입력해주세요")
      return;
    }

    //모든 조건 만족하면 아래코드 실행

    // 새로운 방명록 데이터 객체 생성
    const newEntry = {
      nickname: finalNickname,
      message: guestMessageValue,
    }

    // handleAddList 함수에 방명록 데이터 전달
    handleAddList(newEntry);

    //빈값으로 초기화시키기
    setNicknameValue("");
    setPasswordValue("");
    setGuestMessageValue("");
  };



  return (
    <FormContainer>
      <InputWrap>
        <NicknameInput
          type="text"
          placeholder="닉네임"
          maxLength={20}
          value={nicknameValue}
          onChange={nicknameHandleChange}
        />

        <PasswordInput
          type="password"
          maxLength={4}
          placeholder="비밀번호"
          value={passwordValue}
          onChange={passwordHandleChange}
        />
      </InputWrap>

      <MessageTextarea
        placeholder="내용을 입력해주세요"
        value={guestMessageValue}
        onChange={messageHandleChange}
      />

      <GuestbookSubmitButton onClick={HandleSubmit}>
        등록하기
      </GuestbookSubmitButton>
    </FormContainer>
  );
}

export default GuestbookForm;
