import React from 'react';
import styled from 'styled-components';
import { getCorrectTextColor } from '../utils';
import Download from './DownloadBtn';
const Wrapper = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  box-shadow: -13px 18px 10px rgba(0, 0, 0, 0.2);
  margin-top: -4rem;
  .circle {
    position: relative;

    width: 18rem;
    height: 18rem;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .img {
      height: 80%;
      opacity: 0.8;
    }
  }
  .title {
    position: absolute;
    right: 0.6rem;
    bottom: 0.6rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    writing-mode: vertical-lr;
    font-weight: bold;
    /* text-shadow: 0 0 2px rgba(0, 0, 0, 0.2); */
  }
  .btn {
    font-size: 1.4rem;

    position: absolute;
    bottom: -6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem 0.8rem;
  }
`;

const Card = ({ color: { hex, name, RGB, figure = 'default.png' }, setName = '' }) => {
  return (
    <Wrapper
      id={'SHARE_CARD'}
      style={{
        background: getCorrectTextColor(hex)
      }}
    >
      <h2 className="title" style={{ color: `rgba(${RGB.join(',')},.8)` }}>
        {setName}·{name}
      </h2>
      <div
        className="circle"
        style={{
          background: `linear-gradient(180deg, rgb(${RGB.join(',')}), rgba(${RGB.join(',')},.6))`
        }}
      >
        <img className="img" src={`../figure/${figure}`}></img>
      </div>

      <Download name={name} query="#SHARE_CARD" style={{ bottom: '-5rem' }} />
    </Wrapper>
  );
};

export default Card;
