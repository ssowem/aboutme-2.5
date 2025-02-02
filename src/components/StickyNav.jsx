import styled from '@emotion/styled';
import React from 'react';

const NavWrap = styled.div`
  /* border: 1px solid red; */
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  span {
    color: #1a1a1a;
    font-size: 2rem;
    font-family: 'Lexend', serif;

    /* text-transform: lowercase; */
  }
`;
function StickyNav() {
  return (
    <NavWrap>
      <span>Intro</span>
      <span>About</span>
      <span>Portpolio</span>
      <span>Guestbook</span>
    </NavWrap>
  );
}

export default StickyNav;
