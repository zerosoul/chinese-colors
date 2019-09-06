import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  > h1 {
    font-size: 4rem;
    writing-mode: vertical-lr;
    letter-spacing: 0.8rem;
    font-weight: 800;
  }
  > h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
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
