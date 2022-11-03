import React, { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import FadeInDown from '../animates/FadeInDown';
const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    width: 1.4rem;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.3rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
  }
  .copyTip {
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    padding: 0.3rem 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
  }
`;
const IconFav = ({ currColorHex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    console.log('copy click');
  };
  return (
    <CopyToClipboard
      text={currColorHex}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1800);
      }}
    >
      <Wrapper onClick={handleCopyClick}>
        <svg
          t="1568174087144"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7098"
          width="36"
          height="36"
        >
          <path
            d="M220.429 838.029c-18.2 0-32.9-14.7-32.9-32.9v-437c0-18.2 14.7-32.9 32.9-32.9h440c18.2 0 32.9 14.7 32.9 32.9v436.9c0 18.2-14.7 32.9-32.9 32.9h-440z m407-65.9v-371.1h-374.1v371.1h374.1z"
            fill="#fff"
            p-id="7099"
          ></path>
          <path
            d="M438.129 254.029c-18.2 0-32.9-14.7-32.9-32.9s14.7-32.9 32.9-32.9h369.6c18.2 0 32.9 14.7 32.9 32.9v363.5c0 18.2-14.7 32.9-32.9 32.9s-32.9-14.7-32.9-32.9v-330.6h-336.7z"
            fill="#fff"
            p-id="7100"
          ></path>
        </svg>
        <span className="hex">{currColorHex}</span>
        {copied ? <span className="copyTip">已复制!</span> : null}
      </Wrapper>
    </CopyToClipboard>
  );
};

export default IconFav;
