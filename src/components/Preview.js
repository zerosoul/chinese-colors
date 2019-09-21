import React from 'react';
import styled from 'styled-components';
import URLSearchParams from '@ungap/url-search-params';
import Download from './DownloadBtn';
import Tip from './Tip';
import IconClose from './IconClose';
import BodyBg from '../assets/img/bg.texture.png';
import BounceInDown from './animates/BounceInDown';
const ua = navigator.userAgent;
const isiOSwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
const isWebview = ua.toLowerCase().indexOf('micromessenger') > -1 || isiOSwebview;

const Wrapper = styled.section`
  font-variant: normal;
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
  animation: ${BounceInDown} 1s;
  animation-fill-mode: both;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
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
  .name {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    margin-left: 1.2rem;
    margin-top: 1.4rem;
    display: flex;
    align-items: flex-end;
    > h1 {
      font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
        'Microsoft YaHei';
      font-size: 6rem;
      width: 6rem;
      opacity: 0.8;
      padding-top: 0.4rem;
    }
    > h2 {
      font-size: 2.4rem;
      text-transform: capitalize;
      transform-origin: left;
      transform: rotate(90deg);
      color: rgba(255, 255, 235, 0.3);
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

const Preview = ({ name, pinyin, color, figure = 'default.png?width=8rem', closePreview }) => {
  console.log('ffff', figure);
  const params = new URLSearchParams(figure.split('?')[1] || '');
  const figureW = params.get('width') || '23rem';
  const figureO = +(params.get('o') || 1);
  return (
    <Wrapper id="PREVIEW" bgColor={color}>
      <div className="close" data-html2canvas-ignore>
        <IconClose closePreview={closePreview} />
      </div>
      <hgroup className="name">
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
      <Download name={name} isWebview={isWebview} data-html2canvas-ignore />
      {isWebview && <Tip>APP内打开，壁纸生成功能可能受限，建议在浏览器内打开</Tip>}
    </Wrapper>
  );
};

export default Preview;
