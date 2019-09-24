import React from 'react';
import styled from 'styled-components';

import { useShareColor } from '../hooks';
import Card from '../components/Card';
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Share = ({ match }) => {
  const { id } = match.params;
  const { set, color } = useShareColor(id);
  document.body.style.backgroundColor = `rgba(${color.RGB.join(',')},.4)`;

  console.log('idddd', id, color, set);
  return (
    <Wrapper>
      <Card color={color} setName={set.name} />
    </Wrapper>
  );
};

export default Share;
