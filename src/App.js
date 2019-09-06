import React, { useState, useEffect } from 'react';
import ColorTitle from './components/ColorTitle';
import Color from './components/Color';
import ColorParam from './components/ColorParam';
import Footer from './components/Footer';
import styled from 'styled-components';
import colors from './assets/colors.json';
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .colors {
    display: flex;
    flex-wrap: wrap;
    width: 20rem;
    height: 100vh;
    overflow-y: scroll;
  }
`;
console.log('colors', colors);

const App = () => {
  const [currColor, setCurrColor] = useState({
    CMYK: [4, 5, 18, 0],
    RGB: [249, 244, 220],
    hex: '#f9f4dc',
    name: '\u4e73\u767d',
    pinyin: 'rubai'
  });
  useEffect(() => {
    document.body.style.backgroundColor = currColor.hex;
  }, [currColor]);
  const handleColorClick = hex => {
    let clickedColor = colors.find(c => {
      return c.hex === hex;
    });
    setCurrColor(clickedColor);
  };
  return (
    <>
      <Wrapper>
        <nav>
          <ul className="colors">
            {colors.map(color => {
              return (
                <Color
                  isCurr={currColor.name == color.name}
                  setCurrColor={handleColorClick}
                  {...color}
                  key={color.name}
                />
              );
            })}
          </ul>
        </nav>
        <ColorParam {...currColor} />
        <ColorTitle {...currColor}></ColorTitle>
      </Wrapper>
      <Footer />
    </>
  );
};
export default App;
