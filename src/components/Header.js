import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks';
import { getCorrectTextColor } from '../utils';
import Logo from '../assets/img/logo.png';
const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  .logo {
    width: 2.8rem;
    height: 2.8rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 1s;
    transition-delay: 1s;
  }
  > h1 {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }
`;
export default function Header({ rgb = [0, 0, 0] }) {
  const { isMobile } = useMobile();
  return isMobile ? null : (
    <Wrapper>
      <img
        className="logo"
        src={Logo}
        alt="logo"
        style={{ backgroundColor: `rgba(${rgb.join(',')},.5)` }}
      />
      <h1 style={{ color: getCorrectTextColor(rgb) }}>chinese color</h1>
    </Wrapper>
  );
}
