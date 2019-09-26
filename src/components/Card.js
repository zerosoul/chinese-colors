import React from 'react';
import styled from 'styled-components';
import { getCorrectTextColor } from '../utils';
import Download from './DownloadBtn';
import Tip from './Tip';

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -13px 18px 10px rgba(0, 0, 0, 0.2);
  &.starting {
    box-shadow: none;
    .title {
      padding-left: 0.3rem;
      letter-spacing: 0;
    }
  }
  &.img {
    width: 80vw;
    padding: 0;
    .circle,
    .title {
      display: none;
    }
    img {
      width: 100%;
    }
  }
  .circle {
    width: 18.4rem;
    height: 18.4rem;
    border-radius: 50%;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .img {
      height: 80%;
      opacity: 0.8;
    }
  }
  .title {
    position: absolute;
    right: 0.6rem;
    bottom: 0.6rem;
    font-size: 1.2rem;
    letter-spacing: -0.3rem;
    writing-mode: vertical-lr;
    padding: 0.3rem;
    padding-bottom: 0.6rem;
    /* background: rgba(0, 0, 0, 0.29); */
    border-radius: 6px;
    border-top-right-radius: unset;
    border-bottom-left-radius: unset;
    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
`;
const ua = navigator.userAgent;
const isiOSwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
const isWebview = ua.toLowerCase().indexOf('micromessenger') > -1 || isiOSwebview;
const Card = ({ color: { hex, name, RGB, figure = 'default.png' }, setName = '' }) => {
  const theOtherColor = getCorrectTextColor(hex);
  const titleBgColor = theOtherColor == '#e9f1f6' ? '#50616d' : '#e9f1f6';
  return (
    <Wrapper
      id={'SHARE_CARD'}
      style={{
        background: theOtherColor
      }}
    >
      <h3
        className="title"
        style={{ color: `rgba(${RGB.join(',')},.8)`, backgroundColor: titleBgColor }}
      >
        <span className="set">{setName}</span>
        <span className="dot">·</span>
        <span className="color"> {name}</span>
      </h3>
      <div
        className="circle"
        style={{
          background: `linear-gradient(180deg, rgb(${RGB.join(',')}), rgba(${RGB.join(',')},.6))`
        }}
      >
        <img className="img" src={`../figure/${figure}`}></img>
      </div>

      <Download
        isWebview={isWebview}
        full={false}
        name={`卡片-${name}`}
        query="#SHARE_CARD"
        style={{ bottom: '-5rem' }}
      />
      {isWebview && <Tip>APP内打开，图片生成功能可能受限，建议在浏览器内打开</Tip>}
    </Wrapper>
  );
};

export default Card;
