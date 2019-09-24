import styled from 'styled-components';
import React from 'react';
const Wrapper = styled.div`
  padding: 0;

  margin-bottom: 0.2rem;

  .circular-chart {
    display: block;
    max-width: 2.4rem;
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
  &.percent .circular-chart {
    min-width: unset;
    overflow: unset;
    .circle-bg {
      stroke: none;
    }
    .circle {
      stroke-width: 8;
      stroke-linecap: butt;
    }
  }
`;

const Circle = ({ progress = 10, color = '#333', type = '' }) => {
  return (
    <Wrapper className={`${type == 'percent' ? 'percent' : ''}`} color={color}>
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
        {type !== 'percent' && (
          <text x="18" y="22" style={{ fill: color }} className="percentage">
            {progress}
          </text>
        )}
      </svg>
    </Wrapper>
  );
};

export default Circle;
