import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BodyBg from './assets/img/bg.texture.png';
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
    touch-action: manipulation
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  *::-webkit-scrollbar {
    width: 0px;
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  body{
    -webkit-overflow-scrolling: touch;
    margin:0 auto;
    background-image: url(${BodyBg});
    transition:background-color 1.6s;

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
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
  @font-face {
    font-family: "TChinese";
    src: url("/font/chinese.font.eot"); /* IE9 */
    src: url("/font/chinese.font.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */

    url("/font/chinese.font.woff") format("woff"), /* chrome、firefox */
    url("/font/chinese.font.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */

    url("/font/chinese.font.svg#font/chinese.font") format("svg"); /* iOS 4.1- */
    font-style: normal;
    font-weight: normal;
}
`;

export default GlobalStyle;
