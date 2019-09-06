import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo.png';
const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 2.8rem;
    height: 2.8rem;
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 50%;
  }
  > h1 {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <img className="logo" src={Logo} alt="logo" />
      <h1>chinese colors</h1>
    </Wrapper>
  );
}
