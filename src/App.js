import React, { useEffect } from 'react';
import styled from 'styled-components';
import pinyin from 'pinyin';
import convert from 'color-convert';
import ColorTitle from './components/ColorTitle';
import Color from './components/Color';
import Preview from './components/Preview';
import ColorParam from './components/ColorParam';
import InfoModal from './components/InfoModal';
import IconInfo from './components/IconInfo';
import IconScreenshot from './components/IconScreenshot';
import Header from './components/Header';
import ColorSet from './components/ColorSet';
import { useModal, useColor, usePreview } from './hooks';
import colors from './assets/colors.json';

colors.push({
  name: '',
  colors: JSON.parse(localStorage.getItem('FAV_COLORS') || '[]')
});
const Colors = colors.map(set => {
  set.RGB = convert.hex.rgb(set.hex);
  set.colors = set.colors.map(c => {
    return {
      ...c,
      RGB: convert.hex.rgb(c.hex),
      CMYK: convert.hex.cmyk(c.hex),
      pinyin: pinyin(c.name, {
        heteronym: true, // 启用多音字模式
        segment: true // 启用分词，以解决多音字问题。
      })
        .map(item => {
          return item.length > 1 ? item[item.length - 1] : item;
        })
        .join(' ')
    };
  });
  return set;
});

console.log('colors:', Colors);
const SelectedColorSet =
  JSON.parse(localStorage.getItem('SELECTED_COLOR_SET') || 'null') || Colors[0];
const SelectedColor =
  JSON.parse(localStorage.getItem('SELECTED_COLOR') || 'null') || SelectedColorSet.colors[4];

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  padding: 1rem 0.5rem;
  justify-content: space-evenly;
  transition: all 0.9s;
  .params {
    margin-right: 1rem;
  }
  aside {
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    padding: 0 1rem;
    z-index: 999;
  }
  nav {
    position: relative;
    height: 100vh;
    width: 16rem;
    margin-right: 1.5rem;
    .colors {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      height: 100vh;
      overflow-y: scroll;
    }
  }
`;
console.log('colors', colors);
const App = () => {
  const { visible: modalVisible, showModal, closeModal } = useModal();
  const { preview, showPreview, closePreview } = usePreview();
  const { sets, currSet, currColor, updateCurrColor, updateCurrSet } = useColor({
    sets: Colors.map(set => {
      const newSet = { ...set };
      // delete newSet.colors;
      return newSet;
    }),
    currColor: SelectedColor,
    currSet: SelectedColorSet
  });
  useEffect(() => {
    document.body.style.backgroundColor = currColor.hex;
  }, [currColor]);
  return (
    <>
      <Wrapper>
        <aside>
          <ColorSet sets={sets} currSetName={currSet.name} setCurrSet={updateCurrSet} />
        </aside>
        <nav>
          <ul className="colors">
            {currSet.colors.map((color, idx) => {
              return (
                <Color
                  seq={idx + 1}
                  isCurr={currColor.name == color.name}
                  setCurrColor={updateCurrColor}
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
      {preview && (
        <Preview
          closePreview={closePreview}
          name={currColor.name}
          pinyin={currColor.pinyin}
          color={currColor.hex}
          figure={currColor.figure}
        />
      )}
      <IconScreenshot showPreview={showPreview} />
      {!modalVisible && <IconInfo showInfoModal={showModal} />}
      {modalVisible && <InfoModal bgColor={currColor.hex} closeModal={closeModal} />}
    </>
  );
};
export default App;
