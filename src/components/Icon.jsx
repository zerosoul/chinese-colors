import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  .icon {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const Icon = ({ icon, handleClick = () => {} }) => {
  return (
    <Wrapper className="icon" onClick={handleClick}>
      {icon}
    </Wrapper>
  );
};

export default Icon;
