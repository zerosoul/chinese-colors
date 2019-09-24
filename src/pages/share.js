import React from 'react';
import styled from 'styled-components';
import Tip from '../components/Tip';

import { useShareColor } from '../hooks';
import Card from '../components/Card';
import IconBack from '../components/IconBack';
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .icon {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
`;
const ua = navigator.userAgent;
const isiOSwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
const isWebview = ua.toLowerCase().indexOf('micromessenger') > -1 || isiOSwebview;

const Share = ({ match }) => {
  const { id } = match.params;
  const { set, color } = useShareColor(id);
  document.body.style.backgroundColor = `rgba(${color.RGB.join(',')},.4)`;

  console.log('idddd', id, color, set);
  return (
    <Wrapper>
      <IconBack />
      <Card color={color} setName={set.name} />
      {isWebview && <Tip>APP内打开，图片生成功能可能受限，建议在浏览器内打开</Tip>}
    </Wrapper>
  );
};

export default Share;
