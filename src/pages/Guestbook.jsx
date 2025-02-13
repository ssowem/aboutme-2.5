import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import GuestbookForm from '../components/GuestbookForm';
import GuestbookList from '../components/GuestbookList';
import PageTransition from './PageTransition';
import GuestPagination from '../components/GuestPagination';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.span`
  line-height: 1;
  color: #1a1a1a;

  .main {
    font-family: 'Lexend', serif;
    font-size: 8.2rem;
    font-weight: 800;
  }
  .one-line {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`;

function Guestbook() {
  // 방명록 목록을 저장하는 배열
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  


  // 방명록 목록 가져오는 함수 (GET 요청)
  const fetchGuestbook = async () => {
    // console.log(lists);
    const url =
      `https://gateway.ssobility.me/api/v1/boards?type=GUESTBOOK&page=${currentPage}&size=4`;

    try {
      const response = await axios.get(url);
      console.log('조회성공', response);
      setLists(response.data.data.content);

      return response.data;
    } catch (error) {
      console.error('오류', error);
      return null;
    }
  };

  useEffect(() => {
    fetchGuestbook();
  }, []);

  // 방명록 추가하는 함수 (POST 요청)
  const createGuestbook = async ({ nickname, message, password }) => {

    const url = 'https://gateway.ssobility.me/api/v1/boards';
    const body = {
      content: message,
      writerNickname: nickname,
      type: 'GUESTBOOK',
      isPrivate: false,
      password: password,
    };

    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('추가성공', response);
  
    
      fetchGuestbook();
    } catch (error) {
      console.error('오류', error);
    }
  };

 



  return (
    <PageTransition>
      <Container>
        <Title>
          <div className="main">Guestbook</div>
          <div className="one-line">자유롭게 방명록을 남겨주세요:)</div>
        </Title>

        <GuestbookForm createGuestbook={createGuestbook} />
        <GuestbookList lists={lists} setLists={setLists} fetchGuestbook={fetchGuestbook} />
        <GuestPagination fetchGuestbook={fetchGuestbook} currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
      </Container>
    </PageTransition>
  );
}

export default Guestbook;
