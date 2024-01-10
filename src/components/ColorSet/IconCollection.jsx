import React, { useState } from 'react';
import { BiCollection } from 'react-icons/bi';
import styled from 'styled-components';
import ChineseBorder from '../../assets/img/chinese.circle.border.png';

const Wrapper = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef7a82;
  background-image: url(${ChineseBorder});
  background-size: cover;
  position: relative;
  .icon {
    width: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
  .favTip {
    position: absolute;
    top: -2rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 4rem;
    font-size: 0.7rem;
    text-align: center;
  }
`;
const IconCollection = ({ showCollection, ...rest }) => {
  const [showTip, setShowTip] = useState(false);
  const handleClick = () => {
    if (showTip) return;
    const favs = JSON.parse(localStorage.getItem('FAV_COLORS') || '[]');
    if (favs.length) {
      showCollection();
    } else {
      setShowTip(true);
      setTimeout(() => {
        setShowTip(false);
      }, 2000);
    }
  };
  return (
    <Wrapper onClick={handleClick} {...rest}>
      {showTip && <p className="favTip">暂无收藏</p>}

      <BiCollection size="28" />
    </Wrapper>
  );
};

export default IconCollection;
