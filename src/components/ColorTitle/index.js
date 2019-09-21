import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const jinrishici = require('jinrishici');
import IconFav from './IconFav';
import { useMobile } from '../../hooks';

import { getCorrectTextColor } from '../../utils';
import Poetry from './Poetry';

const Wrapper = styled.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* align-self: center; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: 2rem;
  margin-right: 0.5rem;
  &.mobile {
    width: 5.8rem;
    margin-top: 6rem;
    > h1 {
      font-size: 3.6rem;
    }
  }
  &:hover > h1 {
    transform: scale(1.1);
  }

  > h1 {
    color: inherit;
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
    top: 0.4rem;
    color: inherit;
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    top: -2rem;
    display: flex;
  }
`;

const ColorTitle = ({ name, pinyin, hex, RGB, CMYK }) => {
  const { isMobile } = useMobile();
  const [poetry, setPoetry] = useState(null);
  useEffect(() => {
    console.log('jrsc', jinrishici);

    setPoetry(null);
    jinrishici.load(
      result => {
        let obj = {
          content: result.data.content,
          author: result.data.origin.author,
          title: result.data.origin.title
        };
        setPoetry(obj);
      },
      err => {
        setPoetry(null);
        console.log('err', err);
      }
    );
  }, [name]);

  return (
    <Wrapper className={isMobile ? 'mobile' : ''} style={{ color: getCorrectTextColor(RGB) }}>
      <h1>{name}</h1>
      <IconFav currColor={{ hex, name, pinyin, RGB, CMYK }} />
      <h2>{pinyin}</h2>
      {poetry && <Poetry {...poetry} color={getCorrectTextColor(RGB)} />}
    </Wrapper>
  );
};

export default ColorTitle;
