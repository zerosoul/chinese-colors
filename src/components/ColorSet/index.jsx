import React, { useState } from 'react';
import { GiYinYang } from 'react-icons/gi';
import styled from 'styled-components';
import IconCollection from './IconCollection';

const Wrapper = styled.div`
  ul {
    display: flex;
    position: relative;
    > li {
      transition: all 0.6s;
      cursor: pointer;
      box-shadow: 0 0 0.8rem black;
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 800;
      &:not(:first-child) {
        margin-right: -1.8rem;
      }
      &.selected {
        transform: translateY(-1.6rem);
      }
    }
  }
  &.expand ul li {
    margin-right: -0.34rem;
  }

  .btn {
    cursor: pointer;
    position: absolute;
    right: -1.6rem;
    top: 50%;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    transition: all 0.6s;
    /* box-shadow: 1px -1px 6px black; */
    padding: 0;
  }
  &.expand .btn {
    transform: translateY(-50%) rotateZ(180deg);
  }
`;

const ColorSet = ({ currSetName = '', setCurrSet, sets = [] }) => {
  const [isHover, setIsHover] = useState(false);

  const handleSetClick = (name) => {
    console.log('clicked set name', name);

    setCurrSet(name);
  };

  const handleSetHover = () => {
    setIsHover((prev) => !prev);
  };
  return (
    <Wrapper className={`sets ${isHover ? 'expand' : ''}`}>
      <ul>
        <IconCollection
          className={'' == currSetName ? 'selected' : ''}
          showCollection={handleSetClick.bind(null, '')}
        />

        {sets.map(({ name, RGB }) => {
          if (name) {
            return (
              <li
                onClick={handleSetClick.bind(null, name)}
                key={name}
                style={{
                  background: `rgba(${RGB.join(',')})`,
                }}
                className={name == currSetName ? 'selected' : ''}
              >
                {name}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <button onClick={handleSetHover} className="btn">
        <GiYinYang className="icon" fill="#000" size="100%" />
      </button>
    </Wrapper>
  );
};

export default ColorSet;
