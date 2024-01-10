import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCopyOutline } from 'react-icons/io5';
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
    margin-top: 4px;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.3rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
    margin-top: 5px;
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
        <IoCopyOutline className="icon" />
        <span className="hex">{currColorHex}</span>
        {copied ? <span className="copyTip">已复制！</span> : null}
      </Wrapper>
    </CopyToClipboard>
  );
};

export default IconFav;
