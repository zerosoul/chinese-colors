import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import scrollIntoView from 'scroll-into-view-if-needed';

import CirclePercent from './CirclePercent';
const Wrapper = styled.li.attrs(({ color }) => ({
  style: { borderTopColor: color }
}))`
  color: #fff;
  border-top: 0.4rem solid;
  display: flex;
  flex-direction: row;
  writing-mode: vertical-lr;
  padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  margin: 0.4rem;
  cursor: pointer;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: all 0.5s;
  align-self: flex-start;
  opacity: 0.8;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  &.curr {
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    text-shadow: 0 0 10px black;
  }
  .line1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    min-height: 6.4rem;
    .name {
      color: ${({ color }) => color};
      writing-mode: vertical-lr;
      align-self: flex-end;
      font-size: 0.8rem;
      margin-left: 0.2rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      height: 100%;
      .seq {
        opacity: 0.5;
      }
    }
    .cmyk {
      display: flex;
      justify-content: space-between;
      .circle:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }
  .line2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    color: #fff;
    .hex {
      font-size: 0.6rem;
    }
    .pinyin {
      text-transform: capitalize;
    }
    .rgb {
      display: flex;
      flex-direction: column;
      .line {
        /* background-image: linear-gradient(180deg, #ddd 45%, #fff 40%); */
        width: 2px;
        height: 6rem;
        margin: 0 1px;
        &.r {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({ rgb }) => 100 * (rgb[0] / 255)}%,
            rgba(255, 255, 255, 0.3) ${({ rgb }) => 100 * (rgb[0] / 255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.g {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({ rgb }) => 100 * (rgb[1] / 255)}%,
            rgba(255, 255, 255, 0.3) ${({ rgb }) => 100 * (rgb[1] / 255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.b {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({ rgb }) => 100 * (rgb[2] / 255)}%,
            rgba(255, 255, 255, 0.3) ${({ rgb }) => 100 * (rgb[2] / 255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
      }
    }
  }
`;

const Color = ({ setCurrColor, seq = 1, isCurr, hex, name, pinyin, CMYK, RGB, intro }) => {
  const [r, g, b] = RGB;
  const [c, m, y, k] = CMYK;
  const colorEle = useRef(null);
  useEffect(() => {
    if (isCurr) {
      scrollIntoView(colorEle.current, {
        behavior: 'smooth',
        block: 'center',
        scrollMode: 'if-needed'
      });
    }
  }, [isCurr]);
  return (
    <Wrapper
      ref={colorEle}
      rgb={RGB}
      className={isCurr && 'curr'}
      onClick={setCurrColor.bind(null, name)}
      color={hex}
      title={intro ? intro : null}
    >
      <div className="line1">
        <div className="cmyk">
          <i className="circle c">
            <CirclePercent progress={c} />
          </i>
          <i className="circle m">
            <CirclePercent progress={m} />
          </i>
          <i className="circle y">
            <CirclePercent progress={y} />
          </i>
          <i className="circle k">
            <CirclePercent progress={k} />
          </i>
        </div>
        <h2 className="name">
          <span className="seq">{seq}</span>
          <span className="txt">{name}</span>
        </h2>
      </div>
      <div className="line2">
        <p className="hex">{hex}</p>
        <div className="rgb">
          <i className="line r" percent={r}></i>
          <i className="line g" percent={g}></i>
          <i className="line b" percent={b}></i>
        </div>
        <p className="pinyin">{pinyin}</p>
      </div>
    </Wrapper>
  );
};

export default Color;
