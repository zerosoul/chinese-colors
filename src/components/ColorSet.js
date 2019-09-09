import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.li`
  cursor: pointer;
  padding: 0.8rem 0.4rem;
  padding-top: 0.2rem;
  font-size: 1.5rem;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  margin-right: 0.4rem;
  transition: all 0.8s;
  min-height: 8rem;
  transform: translateY(50%);
  text-align: center;
  writing-mode: vertical-lr;
  font-weight: 800;
  box-shadow: 0 0 0.8rem black;
  &:last-child {
    margin-right: 0;
  }
  &.selected {
    transform: translateY(-0.6rem) scale(1.2);
  }
`;

const ColorSet = ({ name, rgb, hex, currSet, setCurrSet }) => {
  const handleSetClick = () => {
    console.log('clicked set name', name);

    setCurrSet(name);
  };
  return (
    <Wrapper
      onClick={handleSetClick}
      style={{ color: hex, background: `rgba(${rgb.join(',')},.4)` }}
      className={name == currSet ? 'selected' : ''}
    >
      {name}
    </Wrapper>
  );
};

export default ColorSet;
