/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 999;

  &.visible {
    display: block;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0.8rem 1rem;
    width: 80vw;
    box-shadow: 0 0 9px black;
    border-radius: 8px;
    text-shadow: 0 0 8px black;
    background-color: ${({ bgColor }) => {
      return bgColor;
    }};
    > h2 {
      text-transform: uppercase;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }
    > p {
      font-size: 0.6rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
      display: flex;
      flex-direction: column;
      a {
        padding: 0 0.4rem;
      }
      &.btns {
        margin-top: 2rem;
        flex-direction: row;
        justify-content: space-between;
        width: 44%;
        text-shadow: none;
      }
    }
  }
`;
export default function InfoModal({ visible, closeModal, bgColor }) {
  console.log('bgcolor', bgColor);

  return (
    <Wrapper bgColor={bgColor} className={visible && 'visible'}>
      <div className="mask" onClick={closeModal}></div>
      <div className="info">
        <h2>chinese colors</h2>
        <p>
          <span>
            Inspired by
            <a href="http://nipponcolors.com" target="_blank">
              Nipponcolors
            </a>
            &
            <a href="http://zhongguose.com" target="_blank">
              http://zhongguose.com
            </a>
          </span>
          <span>
            Copyright © 2019 by
            <a href="//yangerxiao.com" target="_blank">
              Tristan
            </a>
          </span>
        </p>
        <p>
          <span>参看: 色谱 中科院科技情报编委会名词室.科学出版社,1957.</span>
          <span>Adobe RGB / CMYK FORGA39, Dot Gain 15% Screenshot</span>
        </p>
        <p className="btns">
          <GitHubButton
            href="https://github.com/zerosoul/chinese-colors"
            data-show-count="true"
            aria-label="Star zerosoul/chinese-colors on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            href="https://github.com/zerosoul/chinese-colors/fork"
            data-show-count="true"
            aria-label="Fork zerosoul/chinese-colors on GitHub"
          >
            Fork
          </GitHubButton>
        </p>
      </div>
    </Wrapper>
  );
}
