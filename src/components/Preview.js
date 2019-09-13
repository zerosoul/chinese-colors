import React from 'react';
import styled, { keyframes } from 'styled-components';
import URLSearchParams from '@ungap/url-search-params';
import Download from './DownloadBtn';
import IconClose from './IconClose';
import BodyBg from '../assets/img/bg.texture.png';

const FadeIn = keyframes`
 from {
    opacity: 0;
    -webkit-transform:  translate3d(0, -100%, 0);
    transform:  translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(0.96) translate3d(0, 0, 0);
    transform: scale(0.96) translate3d(0, 0, 0);
  }
`;
const isWeixin = navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
const Wrapper = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${BodyBg});
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.4); */
  animation: ${FadeIn} 1s;
  animation-fill-mode: both;
  &.starting {
    animation: none;
    transform: initial;
  }
  &.img {
    .downloadImg {
      width: 100%;
      height: 100%;
    }
    hgroup,
    .figure {
      display: none;
    }
  }
  hgroup {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: flex-end;
    > h1 {
      font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
        'Microsoft YaHei';
      font-size: 6rem;
      width: 6rem;
      opacity: 0.7;
      padding-top: 0.4rem;

      border-top: 0.6rem solid ${({ bgColor }) => bgColor};
    }
    > h2 {
      font-size: 2.4rem;
      text-transform: capitalize;
      transform-origin: left;
      transform: rotate(90deg);
      color: rgba(255, 255, 235, 0.4);
      margin-bottom: 2.6rem;
      margin-left: 1rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }
  .figure {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Preview = ({ name, pinyin, color, figure = '', closePreview }) => {
  console.log('ffff', figure);
  const params = new URLSearchParams(figure.split('?')[1] || '');
  const figureW = params.get('width') || '23rem';
  const figureO = +(params.get('o') || 1);
  return (
    <Wrapper id="PREVIEW" bgColor={color}>
      <IconClose closePreview={closePreview} data-html2canvas-ignore />
      <hgroup>
        <h1>{name}</h1>
        <h2>{pinyin}</h2>
      </hgroup>
      {figure && (
        <img
          className="figure"
          style={{ width: figureW, opacity: figureO }}
          src={`figure/${figure}`}
          alt="figure"
        />
      )}
      <Download name={name} isWeixin={isWeixin} data-html2canvas-ignore />
    </Wrapper>
  );
};

export default Preview;
