import React from 'react';
import styled from 'styled-components';
import Yinyang from '../../assets/img/yinyang.svg';
const Wrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 3.6rem;
  width: 32px;

  .onoffswitch-checkbox {
    display: none;
  }
  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 18px;
    padding: 0;
    line-height: 30px;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    background-color: #ffffff;
    transition: background-color 0.3s ease-in;
  }
  .onoffswitch-label:before {
    content: '';
    display: block;
    width: 16px;
    margin: 0;
    background-color: #fff;
    background-image: url(${Yinyang});
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 14px;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    transition: all 0.3s ease-in 0s;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label,
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0;
    transform: rotate(180deg);
  }
`;
export default function Toggle({ checkVal = true, togglePoetry }) {
  console.log('t vvv', checkVal);

  return (
    <Wrapper data-html2canvas-ignore>
      <input
        type="checkbox"
        name="onoffswitch"
        className="onoffswitch-checkbox"
        id="myonoffswitch"
        checked={checkVal}
        onChange={({ target }) => {
          console.log('t v', target.checked);
          togglePoetry(target.checked);
        }}
      />
      <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
    </Wrapper>
  );
}
