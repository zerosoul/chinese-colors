import React, { useState } from 'react';
import styled from 'styled-components';
import URLSearchParams from '@ungap/url-search-params';
import { getCorrectTextColor } from '../../utils';

import Download from '../DownloadBtn';
import Tip from '../Tip';
import IconClose from './IconClose';
import BodyBg from '../../assets/img/bg.texture.png';
import BounceInDown from '../animates/BounceInDown';
import Toggle from './Toggle';
import Poetry from './Poetry';
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

  .figure {
    position: absolute;
    right: 0;
    z-index: -1;
    max-height: 100%;
  }
`;

const Preview = ({ name, color, rgb, figure = 'default.png?width=8rem', closePreview }) => {
  console.log('ffff', figure);
  const [peotryVisible, setPeotryVisible] = useState(true);
  const oppositeColor = getCorrectTextColor(color);
  const params = new URLSearchParams(figure.split('?')[1] || '');
  const figureW = params.get('width') || '23rem';
  const figureO = +(params.get('o') || 1);
  const pos = params.get('position') || 'bottom';

  return (
    <Wrapper id="PREVIEW" bgColor={color} bgRgb={rgb}>
      <Toggle checkVal={peotryVisible} togglePoetry={setPeotryVisible} />
      {peotryVisible && <Poetry bgColor={oppositeColor} bgRgb={rgb} />}

      <div className="close" data-html2canvas-ignore>
        <IconClose closePreview={closePreview} />
      </div>
      <h1 className="name" style={{ color: oppositeColor }}>
        {name}
      </h1>
      {figure && (
        <img
          className="figure"
          style={{ width: figureW, opacity: figureO, [pos]: 0 }}
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
