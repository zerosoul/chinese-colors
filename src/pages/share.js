import React from 'react';
import styled from 'styled-components';

import { useShareColor } from '../hooks';
import Card from '../components/Card';
import IconBack from '../components/IconBack';
const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  .icon {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`;

const Share = ({ match }) => {
  const { id } = match.params;
  const { set, color } = useShareColor(id);
  document.body.style.backgroundColor = `rgba(${color.RGB.join(',')},.4)`;

  console.log('idddd', id, color, set);
  return (
    <Wrapper>
      <IconBack />
      <Card color={color} setName={set.name} />
    </Wrapper>
  );
};

export default Share;
