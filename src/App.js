import React, { useState, useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

import ColorTitle from './components/ColorTitle';
import Color from './components/Color';
import ColorParam from './components/ColorParam';
import InfoModal from './components/InfoModal';
import IconInfo from './components/IconInfo';
import Header from './components/Header';
import styled from 'styled-components';
import useModal from './hooks';
import colors from './assets/colors.json';
import allColors from './assets/colors.full.json';
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-evenly;
  .params {
    margin-right: 1rem;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    min-width: 3rem;
    max-width: 20rem;
    height: 100vh;
    overflow-y: scroll;
  }
`;
console.log('colors', colors);
const SelectedColor = JSON.parse(localStorage.getItem('SELECTED_COLOR') || 'null') || {
  CMYK: [0, 43, 43, 0],
  RGB: [246, 173, 143],
  hex: '#f6ad8f',
  name: '\u6de1\u85cf\u82b1\u7ea2',
  pinyin: 'dancanghuahong'
};
const TheColors = process.env.NODE_ENV === 'production' ? allColors : colors;
const App = () => {
  const colorContainer = useRef(null);
  const { visible: modalVisible, showModal, closeModal } = useModal();
  const [currColor, setCurrColor] = useState(SelectedColor);
  useEffect(() => {
    const target = colorContainer.current.querySelector('.curr');
    scrollIntoView(target, {
      behavior: 'smooth',
      block: 'center',
      scrollMode: 'if-needed'
    });
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = currColor.hex;
  }, [currColor]);
  const handleColorClick = hex => {
    let clickedColor = TheColors.find(c => {
      return c.hex === hex;
    });
    setCurrColor(clickedColor);
    localStorage.setItem('SELECTED_COLOR', JSON.stringify(clickedColor));
  };
  return (
    <>
      <Wrapper>
        <nav>
          <ul ref={colorContainer} className="colors">
            {TheColors.map((color, idx) => {
              return (
                <Color
                  seq={idx + 1}
                  isCurr={currColor.name == color.name}
                  setCurrColor={handleColorClick}
                  {...color}
                  key={color.name}
                />
              );
            })}
          </ul>
        </nav>
        <ColorParam className="params" {...currColor} />
        <ColorTitle {...currColor}></ColorTitle>
        <Header />
      </Wrapper>
      {!modalVisible && <IconInfo showInfoModal={showModal} />}
      <InfoModal visible={modalVisible} bgColor={currColor.hex} closeModal={closeModal} />
    </>
  );
};
export default App;
