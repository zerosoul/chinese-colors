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
  padding: 0.6rem 0.8rem;
  padding-top: 1rem;
  position: relative;
  transition: transform 0.4s ease-in;
  width: 4.6rem;
  cursor: pointer;
  margin-top: -6rem;

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
    writing-mode: vertical-lr;
    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: uppercase;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    bottom: 0.4rem;
    color: rgba(255, 255, 255, 0.66);
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
