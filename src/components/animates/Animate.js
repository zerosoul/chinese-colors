import React from 'react';
import styled, { keyframes } from 'styled-components';

const FlipXIn = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
const Animates = {
  flipInX: FlipXIn
};
const StyledWrapper = styled.div`
  backface-visibility: visible !important;
  animation-name: ${({ animate }) => animate};
  animation-duration: 1s;
  animation-fill-mode: both;
`;
const Animate = ({ children, animate = 'flipInX' }) => {
  const ani = Animates[animate] || FlipXIn;
  return <StyledWrapper animate={ani}>{children}</StyledWrapper>;
};
export default Animate;
