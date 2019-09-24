/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import Logo from '../assets/img/logo.png';
import BounceInDown from './animates/BounceInDown';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .info {
    z-index: 9;
    padding: 1.4rem 1rem;
    width: 22rem;
    box-shadow: 0 0 9px black;
    border-radius: 8px;
    text-shadow: 0 0 8px black;
    background-color: ${({ bgColor }) => {
      return bgColor;
    }};
    text-align: center;
    transition: all 0.5s;
    animation: ${BounceInDown} 1s;

    > h1 {
      margin-bottom: 1rem;
      img {
        width: 4rem;
      }
    }
    > h2 {
      text-transform: uppercase;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }
    .producthunt {
      margin: 1rem 0;
      display: block;
      img {
        width: 10rem;
        height: 2.2rem;
      }
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
        margin-top: 0.5rem;
        flex-direction: row;
        justify-content: center;
        text-shadow: none;
        > span:not(:first-child) {
          padding-left: 0.4rem;
        }
      }
    }
  }
`;
export default function InfoModal({ closeModal, bgColor }) {
  console.log('bgcolor', bgColor);

  return (
    <Wrapper bgColor={bgColor}>
      <div className="mask" onClick={closeModal}></div>
      <div className="info">
        <h1>
          <img className="logo" src={Logo} alt="logo" />
        </h1>
        <h2>chinese colors</h2>
        <p>
          <span>
            Inspired by
            <a href="http://nipponcolors.com" target="_blank">
              Nipponcolors
            </a>
          </span>
        </p>
        <p>
          <span>
            数据来源：
            <a href="http://blog.sina.com.cn/s/blog_5c3b139d0101deia.html" target="_blank">
              新浪博客：中国传统颜色卡
            </a>
          </span>
        </p>

        {process.env.NODE_ENV === 'production' && (
          <>
            <a
              className="producthunt"
              href="https://www.producthunt.com/posts/chinese-color?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chinese-color"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=167119&theme=dark"
                alt="Chinese Traditional Color - Chinese Color Cheatsheet Online! "
              />
            </a>
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
          </>
        )}
        <p>
          <span>
            Copyright © 2019 by
            <a href="//yangerxiao.com" target="_blank">
              Tristan
            </a>
          </span>
        </p>
      </div>
    </Wrapper>
  );
}
