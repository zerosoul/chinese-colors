/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import BgImage from '../assets/img/modal.code.top.png';
import BgBtmImage from '../assets/img/modal.code.btm.png';
import FlipInX from './animates/FlipInX';

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
    height: 40vh;
    box-shadow: 0 0 9px black;
    border-radius: 8px;
    text-shadow: 0 0 8px black;
    background-color: ${({ bgColor }) => {
      return bgColor;
    }};
    background-image: url(${BgImage}), url(${BgBtmImage});
    background-repeat: no-repeat, no-repeat;
    background-position: 0 0, bottom;
    background-size: contain, contain;
    padding-bottom: 1.5rem;
    transition: all 0.5s;
    backface-visibility: visible !important;
    animation-name: ${FlipInX};
    animation-duration: 1s;
    animation-fill-mode: both;
    .tabs {
      width: 100%;
      list-style: none;
      position: relative;
      margin-top: 1rem;
      text-align: left;
      li {
        float: left;
        display: block;
      }
      input[type='radio'] {
        position: absolute;
        top: 0;
        left: -9999px;
      }
      label {
        display: block;
        padding: 1rem 1.4rem;
        border-radius: 0.4rem 0.4rem 0 0;
        font-size: 1.2rem;
        font-weight: 800;
        background: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        position: relative;
        top: 0.2rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: #333;
        }
      }
      .tab-content {
        z-index: 2;
        display: none;
        overflow: hidden;
        width: 100%;
        font-size: 1rem;
        line-height: 1.4;
        padding: 1rem;
        position: absolute;
        top: 3rem;
        left: 0;
        background: transparent;
      }
      [id^='tab']:checked + label {
        top: 0;
        padding-top: 1rem;
        background: rgba(0, 0, 0, 0.4);
      }
      [id^='tab']:checked ~ [id^='tab-content'] {
        display: block;
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
        <ul className="tabs" role="tablist">
          <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label
              htmlFor="tab1"
              role="tab"
              aria-selected="true"
              aria-controls="panel1"
              tabIndex="0"
            >
              Web
            </label>
            <div
              id="tab-content1"
              className="tab-content"
              role="tabpanel"
              aria-labelledby="description"
              aria-hidden="false"
            >
              <pre>color:#333;</pre>
            </div>
          </li>

          <li>
            <input type="radio" name="tabs" id="tab2" />
            <label
              htmlFor="tab2"
              role="tab"
              aria-selected="false"
              aria-controls="panel2"
              tabIndex="0"
            >
              iOS
            </label>
            <div
              id="tab-content2"
              className="tab-content"
              role="tabpanel"
              aria-labelledby="specification"
              aria-hidden="true"
            >
              <pre>color:#fff;</pre>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
