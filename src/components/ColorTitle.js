import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.hgroup`
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  box-shadow: 0 0 8px black;
  border-radius: 6px;
  padding: 0.6rem 0.3rem;
  padding-top: 1rem;
  position: relative;
  transition: transform 0.4s ease-in;
  cursor: pointer;

  &:hover {
    transform: rotate(3deg) scale(1.1);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: rgba(255, 255, 200, 0.4);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }
  > h1 {
    font-size: 3.2rem;
    letter-spacing: 0.8rem;
    font-weight: 800;
    writing-mode: vertical-lr;
    font-family: 'JingDianWeiBeiJian';
  }
  > h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    writing-mode: vertical-lr;
    margin-top: -4rem;
  }
`;

const ColorTitle = ({ name, pinyin }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <h2>{pinyin}</h2>
    </Wrapper>
  );
};

export default ColorTitle;
