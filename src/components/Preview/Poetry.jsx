import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  font-family: SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, 'Microsoft YaHei';
  position: absolute;
  left: 50%;
  top: 9rem;
  transform: translateX(-50%);
  min-width: 6rem;
  white-space: nowrap;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ bgRgb }) => `rgba(${bgRgb.join(',')},.5)`};
  padding: 0.8rem 1.2rem;

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
`;

export default function Poetry({ bgColor, bgRgb }) {
  const currPoetry = JSON.parse(localStorage.getItem('POETRY'));
  const { author, title, content } = currPoetry;
  return (
    <Wrapper contentEditable={true} style={{ color: bgColor }} bgRgb={bgRgb}>
      {content.map(line => {
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
    </Wrapper>
  );
}
