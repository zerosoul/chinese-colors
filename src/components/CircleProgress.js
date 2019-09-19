import styled from 'styled-components';
import React from 'react';
const Wrapper = styled.div`
  padding: 0;

  margin-bottom: 0.2rem;
  .circular-chart {
    display: block;
    min-width: 2.6rem;
    .circle-bg {
      fill: rgba(255, 255, 255, 0.8);
      stroke: #eee;
      stroke-width: 4.2;
    }
    .circle {
      fill: rgba(255, 255, 255, 0.6);
      stroke-width: 3.2;
      stroke-linecap: round;
      transition: all 1s ease-out;
    }
    .percentage {
      font-family: sans-serif;
      font-size: 0.5em;
      text-anchor: middle;
      font-weight: bold;
    }
  }
`;

const Circle = ({ progress = 10, color = '#333' }) => {
  return (
    <Wrapper className={`p${progress}`} color={color}>
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          style={{ stroke: color }}
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" style={{ fill: color }} className="percentage">
          {progress}
        </text>
      </svg>
    </Wrapper>
  );
};

export default Circle;
