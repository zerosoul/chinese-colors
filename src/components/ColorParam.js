import React from 'react';
import styled from 'styled-components';
import Circle from './CircleProgress';
const Wrapper = styled.section`
  color: #333;
  display: flex;
  flex-direction: column;
  align-self: center;
  .item {
    border-top: 1px solid #fff;
    padding: 1.4rem 0.2rem 0.8rem 0.2rem;
    position: relative;
    &.rgb {
      color: #fff;
    }
    &:before {
      content: attr(data-id);
      text-transform: uppercase;
      position: absolute;
      font-size: 0.6rem;
      top: 0;
      left: 0;
    }
  }
`;

const ColorParam = ({ CMYK, RGB }) => {
  const [C, M, Y, K] = CMYK;
  const [R, G, B] = RGB;
  return (
    <Wrapper>
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