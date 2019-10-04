import React from 'react';
import styled from 'styled-components';
import IconFav from './IconFav';
import { useMobile, usePoetry } from '../../hooks';

import { getCorrectTextColor } from '../../utils';
import Poetry from './Poetry';
import FadeIn from '../animates/FadeIn';

const Wrapper = styled.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: 1rem;
  margin-right: 0.5rem;
  min-height: 18rem;
  &.mobile {
    width: 5.8rem;
    margin-top: 8rem;
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
  .figure {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    opacity: 0;
    animation: ${FadeIn} 1s forwards;
    animation-delay: 1s;
  }
`;

const ColorTitle = ({ name, pinyin, hex, RGB, CMYK, figure }) => {
  const { isMobile } = useMobile();
  const { poetry, fetchPoetry } = usePoetry(name);
  const oppoColor = getCorrectTextColor(RGB);

  console.log('color title');

  return (
    <Wrapper className={isMobile ? 'mobile' : ''} style={{ color: oppoColor }}>
      <h1>{name}</h1>
      <IconFav currColor={{ hex, name, pinyin, RGB, CMYK }} />
      <h2>{pinyin}</h2>
      {poetry && (
        <Poetry
          refetch={fetchPoetry}
          bgColor={`rgba(${RGB.join(',')},.5)`}
          fontColor={oppoColor}
          {...poetry}
        />
      )}
      {figure && <img className="figure" src={`figure/${figure}`} alt="figure" />}
    </Wrapper>
  );
};
ColorTitle.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'ColorTitleComp'
};
export default ColorTitle;
