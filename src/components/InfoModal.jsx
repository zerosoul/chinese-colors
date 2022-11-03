/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import Logo from '../assets/img/logo.png';
import Bird from '../assets/img/bg.bird.png';
import BgImage from '../assets/img/code.bg.png';
import BgBtmImage from '../assets/img/info.bg.btm.png';
import RewardImage from '../assets/img/reward.jpg';
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
    padding: 1rem;
    width: 22rem;
    box-shadow: 0 0 9px black;
    border-radius: 8px;
    text-shadow: 0 0 8px black;
    background-color: ${({ bgColor }) => {
      return bgColor;
    }};
    background-image: url(${BgImage}), url(${BgBtmImage});
    background-repeat: no-repeat, repeat-x;
    background-position: 0 0, bottom;
    background-size: contain, auto 1.4rem;
    padding-bottom: 1.5rem;
    text-align: center;
    transition: all 0.5s;
    animation: ${BounceInDown} 1s;

    > h1 {
      position: relative;
      margin: 1rem 2rem;
      .logo {
        width: 4rem;
        transition: all 0.8s;
        padding: 0.4rem;
        border-radius: 50%;
        background-color: ${({ bgColor }) => {
          return bgColor;
        }};
      }
      &:hover .logo {
        transform: translateX(4rem) rotate(360deg);
      }
      .bird {
        position: absolute;
        left: 6.2rem;
        top: 0;
        width: 3.8rem;
        z-index: -1;
      }
    }
    > h2 {
      text-transform: uppercase;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }
    .producthunt {
      margin-top: 1rem;
      margin-bottom: 0.2rem;
      display: block;
      img {
        width: 10rem;
        height: 2.2rem;
      }
    }
    > p {
      font-size: 0.6rem;
      line-height: 1.2;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: center;
      a,
      > span {
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
    .reward {
      width: 10rem;
      border-radius: 0.4rem;
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
          <img className="bird" src={Bird} alt="hidden bird" />
        </h1>
        <h2>chinese colors</h2>

        <img className="reward" src={RewardImage} alt="reward image" />

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

        <p>
          <span>
            Inspired by
            <a href="http://nipponcolors.com" target="_blank">
              Nipponcolors
            </a>
          </span>
          <span>&</span>
          <span>
            数据来源：
            <a href="http://blog.sina.com.cn/s/blog_5c3b139d0101deia.html" target="_blank">
              中国传统颜色卡
            </a>
          </span>
        </p>

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
