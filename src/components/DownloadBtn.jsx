import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import styled, { keyframes } from 'styled-components';

const Bling = keyframes`
from{
box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.5);
}
to{
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
}

`;
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
  &:disabled {
    animation: ${Bling} 1s infinite;
    animation-direction: alternate;
    background: #666;
  }
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
const sleep = async (dur = 2) => {
  const misDur = dur * 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, misDur);
  });
};
const Download = ({
  query = '#PREVIEW',
  full = true,
  name = 'default',
  isWebview = false,
  ...rest
}) => {
  const [generating, setGenerating] = useState(false);

  const btn = useRef(null);
  const generateImage = async (ele, name, isWebview = false) => {
    setGenerating(true);
    await sleep(1);
    html2canvas(ele, {
      debug: process.env.NODE_ENV !== 'production',
      onclone: document => {
        let tmp = document.querySelector(query);
        tmp.classList.add('starting');
        if (isWebview) {
          tmp.style.boxShadow = 'none';
        }
        if (full) {
          tmp.style.height = window.innerHeight + 'px';
        }
        console.log('dommmm', tmp.innerHTML);
      },
      scale: window.devicePixelRatio * (isWebview ? 2 : 1)
    }).then(function(canvas) {
      console.log(canvas);
      if (isWebview) {
        console.log('weixin');
        let img = document.createElement('img');

        canvas.toBlob(blob => {
          const {
            URL: { createObjectURL }
          } = window;
          img.src = createObjectURL(blob);
          img.classList.add('downloadImg');
        });
        ele.classList.add('img');
        ele.appendChild(img);
        setGenerating(false);
      } else {
        canvas.toBlob(blob => {
          saveAs(blob, `${name}-${new Date().getTime()}.png`);
          setGenerating(false);
        }, 'image/png');
        // saveAs(canvas.toDataURL(), `${name}-${new Date().getTime()}.png`);
      }
      ele.classList.remove('starting');
    });
  };
  const handleDownloadClick = async () => {
    // startScreenshoot();
    let ele = document.querySelector(query);

    await generateImage(ele, name, isWebview);
    if (isWebview) {
      btn.current.classList.add('tip');
    }
  };
  return (
    <Wrapper disabled={generating} ref={btn} onClick={handleDownloadClick} {...rest}>
      {generating ? `生成中...` : `生成图片`}
    </Wrapper>
  );
};

export default Download;
