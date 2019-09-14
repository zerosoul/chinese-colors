import React from 'react';
import styled from 'styled-components';
import IconFav from './IconFav';
import IconCopy from './IconCopy';

const Wrapper = styled.hgroup`
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: -6rem;
  margin-right: 0.5rem;

  &:hover > h1 {
    transform: scale(1.1);
  }

  > h1 {
    font-size: 3.2rem;
    letter-spacing: -0.5rem;
    writing-mode: vertical-lr;
    transition: transform 0.4s ease-in;

    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: capitalize;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    bottom: 0.4rem;
    color: rgba(255, 255, 255, 0.66);
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    bottom: -2.8rem;
    display: flex;
  }
`;

const ColorTitle = ({ name, pinyin, hex, RGB, CMYK }) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <IconFav currColor={{ hex, name, pinyin, RGB, CMYK }} />
      <h2>{pinyin}</h2>
      <h3>
        <IconCopy currColorHex={hex} />
      </h3>
    </Wrapper>
  );
};

export default ColorTitle;
