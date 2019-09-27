import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../../hooks';
import FadeInDown from '../animates/FadeInDown';
const Wrapper = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 0.6rem;
  line-height: 1.4;
  padding: 0.4rem;
  margin-top: 1rem;
  text-shadow: 0 0 4px rgba(33, 33, 33, 0.6);
  animation: ${FadeInDown} 1s forwards;
  &.mobile {
    font-size: 0.8rem;
  }
  > h2 {
    color: inherit;
    font-size: 0.4rem;
    align-self: flex-end;
    writing-mode: vertical-lr;
    margin-right: 0.3rem;
  }
  .line {
    color: inherit;
    writing-mode: vertical-lr;
    letter-spacing: 0.14rem;
    font-weight: bold;
  }
`;
const Poetry = ({ content = '', author = '', title = '' }) => {
  const { isMobile } = useMobile();
  return (
    <Wrapper className={isMobile ? 'mobile' : ''}>
      <h2>
        {author} ·《 {title} 》
      </h2>
      <p className="line">「{content.replace(/[，|。|！|？|、]/g, ' ').trim()}」</p>
    </Wrapper>
  );
};

export default Poetry;
