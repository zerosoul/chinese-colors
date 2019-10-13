import { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import BodyBg from './assets/img/bg.texture.png';
import BgTop from './assets/img/bg.top.png';
const BgAnimate = keyframes`
from{
background-position:0 0,0 -30px;
}
to{
background-position:0 0,0 0;

}
`;
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    /* user-select:none; */
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
    touch-action: manipulation;
  }

  span,p,i{
    color:inherit;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  *::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  body{
    -webkit-overflow-scrolling: touch;
    margin:0 auto;
    background-image: url(${BodyBg}),url(${BgTop});
    background-repeat:repeat,repeat-x;
    background-position:0 0,0 -40px;
    background-size:auto,auto 1.5rem;
    transition:background-color 1.6s;
    overflow:hidden;
    animation: ${BgAnimate} .8s ease forwards;
    animation-delay:2s;
  }


  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 18px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 22px;
      }
  }
  @media screen and (min-width: 1281){
      html {
          font-size: 24px;
      }
  }
  @media screen and (min-width: 1379px){
      html {
          font-size: 28px;
      }
  }
  @font-face {
    font-family: "TChinese";
    src: url("/font/chinese.font.eot");
    src: url("/font/chinese.font.eot?#iefix") format("embedded-opentype"),

    url("/font/chinese.font.woff") format("woff"),
    url("/font/chinese.font.ttf") format("truetype"),

    url("/font/chinese.font.svg#font/chinese.font") format("svg");
    font-style: normal;
    font-weight: normal;
}
`;

export default GlobalStyle;
