import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
const ColorTitle = lazy(() => import('../components/ColorTitle'));
const Color = lazy(() => import('../components/Color'));
const ColorParam = lazy(() => import('../components/ColorParam'));
const IconInfo = lazy(() => import('../components/IconInfo'));
const IconImage = lazy(() => import('../components/IconImage'));
const Header = lazy(() => import('../components/Header'));
const IconScreenshot = lazy(() => import('../components/IconScreenshot'));
const ColorSet = lazy(() => import('../components/ColorSet'));
import Preview from '../components/Preview';
import InfoModal from '../components/InfoModal';

import { useModal, useColor, usePreview } from '../hooks';

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  justify-content: space-evenly;
  transition: all 0.9s;
  .params {
    margin-right: 1rem;
  }
  .colorSet {
    position: fixed;
    bottom: 1rem;
    right: 3rem;
    padding: 0 1rem;
    z-index: 999;
  }
  .colorNav {
    position: relative;
    height: 100%;
    width: 11.8rem;
    margin-right: 1.5rem;
    overflow-y: scroll;
    .colors {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      overflow-y: scroll;
    }
  }
  .btns {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Index = () => {
  const { visible: modalVisible, showModal, closeModal } = useModal();
  const { preview, showPreview, closePreview } = usePreview();
  const { sets, currSet, currColor, updateCurrColor, updateCurrSet } = useColor();
  return (
    <Suspense fallback={<Loading color="rgba(57, 47, 65, 0.8)" size="4" sizeUnit="rem" />}>
      <Wrapper>
        <aside className="colorSet">
          <ColorSet sets={sets} currSetName={currSet.name} setCurrSet={updateCurrSet} />
        </aside>
        <nav className="colorNav">
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
        <Header rgb={currColor.RGB} />
        <section className="btns">
          <IconInfo showInfoModal={showModal} />
          <IconScreenshot showPreview={showPreview} />
          <IconImage path={`share/${currColor.id}`} />
        </section>
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
      {modalVisible && <InfoModal bgColor={currColor.hex} closeModal={closeModal} />}
    </Suspense>
  );
};
export default Index;
