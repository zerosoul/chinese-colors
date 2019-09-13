import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  color: #eee;
  background: #1f2f2d;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.5);
  &.tip {
    visibility: hidden;
    &:after {
      content: '长按图片保存';
      display: block;
      position: absolute;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      padding: 0.4rem 0.6rem;
      border-radius: 0.2rem;
      font-size: 0.8rem;
      top: -120%;
      left: 50%;
      visibility: visible;
      transform: translateX(-50%);
      width: 100%;
    }
  }
`;
const generateImage = (ele, name, isWeixin = false) => {
  html2canvas(ele, {
    onclone: document => {
      let tmp = document.querySelector('#PREVIEW');
      tmp.classList.add('starting');

      tmp.style.height = window.innerHeight + 'px';
    },
    scale: window.devicePixelRatio * 4
  }).then(function(canvas) {
    console.log(canvas);
    if (isWeixin) {
      console.log('weixin');
      let img = document.createElement('img');
      img.classList.add('downloadImg');
      canvas.toBlob(blob => {
        const {
          URL: { createObjectURL }
        } = window;
        img.src = createObjectURL(blob);
      });
      ele.classList.add('img');
      ele.appendChild(img);
    } else {
      canvas.toBlob(blob => {
        const {
          URL: { createObjectURL, revokeObjectURL },
          setTimeout
        } = window;
        const url = createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.setAttribute('href', url);
        anchor.setAttribute('download', `${name}-${new Date().getTime()}.png`);
        anchor.click();

        setTimeout(() => {
          revokeObjectURL(url);
        }, 100);
      });
      // saveAs(canvas.toDataURL(), `${name}-${new Date().getTime()}.png`);
    }
    ele.classList.remove('starting');
  });
};
const Download = ({ name, isWeixin = false, ...rest }) => {
  const btn = useRef(null);
  const handleDownloadClick = () => {
    // startScreenshoot();
    let ele = document.querySelector('#PREVIEW');

    generateImage(ele, name, isWeixin);
    if (isWeixin) {
      btn.current.classList.add('tip');
    }
  };
  return (
    <Wrapper ref={btn} onClick={handleDownloadClick} {...rest}>
      生成壁纸
    </Wrapper>
  );
};

export default Download;
