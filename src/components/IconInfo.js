import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.62);
  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const IconInfo = ({ showInfoModal }) => {
  return (
    <Wrapper onClick={showInfoModal}>
      <svg
        t="1567818024968"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2007"
        width="30"
        height="30"
      >
        <path
          d="M512 0C229.226667 0 0 229.226667 0 512s229.226667 512 512 512 512-229.226667 512-512S794.773333 0 512 0z m0 938.666667C276.736 938.666667 85.333333 747.264 85.333333 512S276.736 85.333333 512 85.333333s426.666667 191.402667 426.666667 426.666667-191.402667 426.666667-426.666667 426.666667z m0-725.333334c-37.546667 0-64 31.573333-64 64s26.453333 64 64 64c37.525333 0 64-29.034667 64-64 0-34.986667-26.474667-64-64-64z m-42.666667 597.333334h85.333334V426.666667h-85.333334v384z"
          p-id="2008"
          fill="#eee"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default IconInfo;
