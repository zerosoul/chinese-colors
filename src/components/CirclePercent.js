import styled from 'styled-components';
import React from 'react';
import Circle from './CircleProgress';

const Wrapper = styled.div`
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
`;

const CirclePercent = ({ progress = 10, color = 'rgba(102, 87, 87, 0.96)' }) => {
  return (
    <Wrapper>
      <Circle progress={progress} color={color} type="percent" />
    </Wrapper>
  );
};

export default CirclePercent;
