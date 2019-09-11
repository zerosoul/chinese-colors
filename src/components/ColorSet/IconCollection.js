import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ef7a82;
  position: relative;
  .icon {
    width: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
  .favTip {
    position: absolute;
    top: -2rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 4rem;
    font-size: 0.7rem;
    text-align: center;
  }
`;
const IconCollection = ({ showCollection, ...rest }) => {
  const [showTip, setShowTip] = useState(false);
  const handleClick = () => {
    if (showTip) return;
    const favs = JSON.parse(localStorage.getItem('FAV_COLORS') || '[]');
    if (favs.length) {
      showCollection();
    } else {
      setShowTip(true);
      setTimeout(() => {
        setShowTip(false);
      }, 2000);
    }
  };
  return (
    <Wrapper onClick={handleClick} {...rest}>
      {showTip && <p className="favTip">暂无收藏</p>}

      <svg
        t="1568178514471"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8559"
        width="32"
        height="32"
      >
        <path
          d="M914.304 182.848H109.696v36.608h804.608v-36.608z m-73.152-109.696H182.848v36.544h658.304v-36.544z m109.696 256h36.544v-36.608H36.544v621.696h950.912v-512h-36.608v475.456H73.152V329.152h877.696zM510.464 440.064a130.112 130.112 0 0 0-181.056-2.112 132.8 132.8 0 0 0 1.6 188.224l166.784 165.952a17.984 17.984 0 0 0 25.6 0l166.528-165.952a132.8 132.8 0 0 0 1.28-188.288 130.112 130.112 0 0 0-180.736 2.176z m182.848 88.256a100.288 100.288 0 0 1-29.184 71.936l-153.6 152.896-153.6-152.896a100.288 100.288 0 0 1-29.12-71.936 88.384 88.384 0 0 1 26.944-64 93.504 93.504 0 0 1 130.112 1.536l25.6 25.6 25.6-25.6a93.504 93.504 0 0 1 130.112-1.536 88.384 88.384 0 0 1 27.136 63.936z"
          fill="#fff"
          p-id="8560"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default IconCollection;
