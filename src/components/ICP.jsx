import React from 'react';
import styled, { keyframes } from 'styled-components';
const AniHide = keyframes`
0%,70%{
opacity: 0.8;
}
100%{
opacity: 0.2;
}
`;
const StyledWrapper = styled.aside`
  position: fixed;
  left: 50%;
  bottom: 0.4rem;
  transform: translateX(-50%);
  animation: ${AniHide} 60s forwards;
  .link {
    font-size: 0.5rem;
    text-decoration: none;
  }
`;

export default function ICP() {
  return (
    <StyledWrapper>
      <a
        className="link"
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.beian.miit.gov.cn/"
      >
        京ICP备16015459号-1
      </a>
    </StyledWrapper>
  );
}
