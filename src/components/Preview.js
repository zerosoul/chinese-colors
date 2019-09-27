import React from 'react';
import styled from 'styled-components';
import URLSearchParams from '@ungap/url-search-params';
import { getCorrectTextColor } from '../utils';

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
  background-repeat: repeat;
  width: 100%;
  height: 100%;
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
    bottom: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
    z-index: 99;
  }
  .poetry {
    font-family: 'Microsoft YaHei', 微软雅黑, Tahoma, Arial, sans-serif;
    position: absolute;
    left: 50%;
    top: 5rem;
    transform: translateX(-50%);
    min-width: 6rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .line {
      font-size: 1.6rem;
      font-weight: bold;
      word-break: keep-all;
      color: inherit;
      font-family: inherit;
      letter-spacing: 2px;
    }
    > h2 {
      font-size: 0.8rem;
      word-break: keep-all;
      margin-top: 1rem;
      color: inherit;
      font-family: inherit;
      .dot {
        color: inherit;
        padding: 0 0.4rem;
        font-weight: bold;
      }
    }
  }
  .figure {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    max-height: 100%;
  }
`;

const Preview = ({ name, color, figure = 'default.png?width=8rem', closePreview }) => {
  console.log('ffff', figure);
  const oppositeColor = getCorrectTextColor(color);
  const params = new URLSearchParams(figure.split('?')[1] || '');
  const figureW = params.get('width') || '23rem';
  const figureO = +(params.get('o') || 1);
  const currPoetry = JSON.parse(localStorage.getItem('POETRY'));
  const { author, title, content } = currPoetry;
  const lines = content
    .replace(/[，|。|！|？]/g, ' ')
    .trim()
    .split(' ');
  return (
    <Wrapper id="PREVIEW" bgColor={color}>
      <article style={{ color: oppositeColor }} className={'poetry'}>
        {lines.map(line => {
          return (
            <p key={line} className="line">
              {line}
            </p>
          );
        })}
        <h2>
          {author}
          <span className="dot">·</span>
          {title}
        </h2>
      </article>

      <div className="close" data-html2canvas-ignore>
        <IconClose closePreview={closePreview} />
      </div>
      <h1 className="name" style={{ color: oppositeColor }}>
        {name}
      </h1>
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
