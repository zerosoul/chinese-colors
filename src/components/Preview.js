import React from 'react';
import styled from 'styled-components';
import Download from './DownloadBtn';
import IconClose from './IconClose';
import BodyBg from '../assets/img/bg.texture.png';

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
  &.starting {
    aside,
    button {
      display: none;
    }
  }
  hgroup {
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: flex;
    align-items: flex-end;
    > h1 {
      font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
        'Microsoft YaHei';
      font-size: 6rem;
      width: 6rem;
      opacity: 0.6;
      padding-top: 0.4rem;

      border-top: 0.6rem solid ${({ bgColor }) => bgColor};
    }
    > h2 {
      font-size: 2.8rem;
      text-transform: capitalize;
      transform-origin: left;
      transform: rotate(90deg);
      opacity: 0.3;
      margin-bottom: 2.6rem;
      margin-left: 1rem;
      font-weight: bold;
    }
  }
`;

const Preview = ({ name, pinyin, color, closePreview }) => {
  return (
    <Wrapper id="PREVIEW" bgColor={color}>
      <IconClose closePreview={closePreview} />
      <hgroup>
        <h1>{name}</h1>
        <h2>{pinyin}</h2>
      </hgroup>
      <Download name={name} />
    </Wrapper>
  );
};

export default Preview;
