import React, { useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import IconFav from './IconFav';
import IconDownload from './IconDownload';
import { useMobile, usePoetry } from '../../hooks';

import { getCorrectTextColor } from '../../utils';
import Poetry from './Poetry';
import FadeIn from '../animates/FadeIn';
import BodyBg from '../../assets/img/bg.texture.png';

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
  &:hover .download {
    visibility: visible;
  }
  &.download {
    border-radius: 0;
    box-shadow: none;
    background-color: ${({ bgColor }) => bgColor};
    background-image: url(${BodyBg});
    background-repeat: repeat;
    .fav {
      display: none;
    }
    > h2 {
      writing-mode: initial;
    }
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
  const cardRef = useRef(null);
  const { isMobile } = useMobile();
  const { poetry, fetchPoetry } = usePoetry(name);
  const oppoColor = getCorrectTextColor(RGB);

  const handleDownload = () => {
    if (!cardRef.current) return;
    cardRef.current.classList.add('download');

    html2canvas(cardRef.current, {
      debug: process.env.NODE_ENV !== 'production',
      // onclone: document => {
      //   let tmp = document.querySelector(query);
      //   tmp.classList.add('starting');
      //   if (isWebview) {
      //     tmp.style.boxShadow = 'none';
      //   }
      //   if (full) {
      //     tmp.style.height = window.innerHeight + 'px';
      //   }
      //   console.log('dommmm', tmp.innerHTML);
      // },
      scale: window.devicePixelRatio * 2,
    }).then(function (canvas) {
      canvas.toBlob((blob) => {
        saveAs(blob, `card-${name}-${new Date().getTime()}.png`);
        cardRef.current.classList.remove('download');
      }, 'image/png');
    });
  };

  return (
    <Wrapper
      bgColor={`rgba(${RGB.join(',')})`}
      ref={cardRef}
      className={isMobile ? 'mobile' : ''}
      style={{ color: oppoColor }}
    >
      <h1>{name}</h1>
      <IconFav currColor={{ hex, name, pinyin, RGB, CMYK }} />
      <IconDownload handleDownload={handleDownload} />
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
export default ColorTitle;
