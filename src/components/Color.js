import React from 'react';
import styled from 'styled-components';

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
  transition: all 0.5s;
  &:hover,
  &.curr {
    box-shadow: 0 0 4px black;
  }
  &.curr {
    text-shadow: 0 0 10px black;
  }
  .line1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    .name {
      color: ${({ color }) => color};
      writing-mode: vertical-lr;
    }
  }
  .line2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    .hex {
      font-size: 0.6rem;
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

const Color = ({ setCurrColor, isCurr, hex, name, pinyin, CMYK, RGB }) => {
  const [r, g, b] = RGB;
  const [c, m, y, k] = CMYK;
  return (
    <Wrapper
      rgb={RGB}
      className={isCurr && 'curr'}
      onClick={setCurrColor.bind(null, hex)}
      color={hex}
    >
      <div className="line1">
        <p className="cmyk">
          <i className="circle c">{c}</i>
          <i className="circle m">{m}</i>
          <i className="circle y">{y}</i>
          <i className="circle k">{k}</i>
        </p>
        <h2 className="name">{name}</h2>
      </div>
      <div className="line2">
        <p className="hex">{hex}</p>
        <p className="rgb">
          <i className="line r" percent={r}></i>
          <i className="line g" percent={g}></i>
          <i className="line b" percent={b}></i>
        </p>
        <p className="pinyin">{pinyin}</p>
      </div>
    </Wrapper>
  );
};

export default Color;