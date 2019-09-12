import React from 'react';
import html2canvas from 'html2canvas';

import styled, { keyframes } from 'styled-components';
const Float = keyframes`
0%,40%,80%{
  transform:translateX(-50%) translateY(0%);
}
20%,60%,100%{
  transform:translateX(-50%) translateY(2%);
}

`;

function saveAs(uri, filename) {
  var link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
const Wrapper = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10vh;
  left: 50%;
  /* transform: translateX(-50%); */
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  color: #eee;
  background: #1f2f2d;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.5);
  animation: ${Float} 3s infinite forwards;
`;

const Download = ({ name }) => {
  const handleDownloadClick = () => {
    // startScreenshoot();
    let ele = document.querySelector('#PREVIEW');
    ele.classList.add('starting');
    ele.style.height = window.innerHeight + 'px';
    html2canvas(ele, {
      // width: window.screen.availWidth,
      // height: window.screen.availHeight,
      // width: window.innerWidth,
      // height: window.screen.availHeight
      // onclone: cloned => {
      //   cloned.querySelector('aside').remove();
      //   cloned.querySelector('button').remove();
      //   return cloned;
      // }
    }).then(function(canvas) {
      console.log(canvas);
      saveAs(canvas.toDataURL(), `${name}-${new Date().getTime()}.png`);
      ele.classList.remove('starting');
    });
  };
  return <Wrapper onClick={handleDownloadClick}>保存</Wrapper>;
};

export default Download;
