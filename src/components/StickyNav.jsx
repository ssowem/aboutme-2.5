import styled from '@emotion/styled';
import { label } from 'framer-motion/client';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkWrap = styled.div`
  z-index: 9999;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;

  font-size: 2rem;
  font-family: 'Tektur', serif;
  text-decoration: none;

  background-color: #313131;
  padding: 1rem 3rem;
  border-radius: 1rem;

  .link {
    color:#fff;
    text-decoration: none;

  }
  .active {
    color: #fe8d1c;
  }
`;

function StickyNav() {

  const location = useLocation();

  const links = [
    { path: "/", label: "Intro"},
    { path: "/about", label: "About"},
    { path: "/portfolio", label: "Portfolio"},
    { path: "/guestbook", label: "Guestbook"},
  ]

  return (
    <LinkWrap>
      {links.map(({path, label}) => (
        <Link key={path} to={path} className={`link ${location.pathname === path ? "active" : "" }`}>{label}</Link>
      ))}
    </LinkWrap>
  );
}

export default StickyNav;
