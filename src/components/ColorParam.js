import React from 'react';
import styled from 'styled-components';
import Circle from './CircleProgress';
const Wrapper = styled.section`
  color: #333;
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  .item {
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding: 1rem 0.2rem 0.6rem 0.2rem;
    position: relative;
    &.rgb {
      color: #fff;
      text-align: right;
      &.r {
        color: rgb(255, 0, 0, 0.8);
      }
      &.g {
        color: rgb(0, 255, 0, 0.8);
      }
      &.b {
        color: rgb(0, 0, 255, 0.8);
      }
    }

    &:before {
      content: attr(data-id);
      text-transform: uppercase;
      position: absolute;
      font-size: 0.5rem;
      font-weight: 800;
      color: #fff;
      top: 0.4rem;
      left: 0;
      text-shadow: 0px 0 6px black;
    }
  }
`;
const ColorParam = ({ CMYK, RGB = [0, 0, 0], ...rest }) => {
  const [C, M, Y, K] = CMYK;

  const [R, G, B] = RGB;
  return (
    <Wrapper {...rest}>
      <div className="item c" data-id="c">
        <Circle progress={C} color={'#0093D3'} />
      </div>
      <div className="item m" data-id="m">
        <Circle progress={M} color={'#CC006B'} />
      </div>
      <div className="item y" data-id="y">
        <Circle progress={Y} color={'#FFF10C'} />
      </div>
      <div className="item rgb k" data-id="k">
        <Circle progress={K} color={'#333'} />
      </div>
      <div className="item rgb r" data-id="r">
        {R}
      </div>
      <div className="item rgb g" data-id="g">
        {G}
      </div>
      <div className="item rgb b" data-id="b">
        {B}
      </div>
    </Wrapper>
  );
};

export default ColorParam;
