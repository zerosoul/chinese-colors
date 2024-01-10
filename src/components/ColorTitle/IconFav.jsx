import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdHeart } from 'react-icons/io';

const Wrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1rem;
    height: 1rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
`;
const FavStoreKey = 'FAV_COLORS';
const IconFav = ({ currColor }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem(FavStoreKey) || '[]');
    console.log('favs e', favs);

    if (favs.some((f) => f.name == currColor.name)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [currColor]);
  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem(FavStoreKey) || '[]');
    console.log('favs t', favs);

    if (isFav) {
      favs = favs.filter((color) => {
        return color.name != currColor.name;
      });
    } else {
      favs.push(currColor);
    }
    setIsFav((prev) => !prev);
    localStorage.setItem(FavStoreKey, JSON.stringify(favs));
  };
  return (
    <Wrapper className="fav" onClick={toggleFav}>
      <IoMdHeart className="icon" fill={isFav ? '#ef7a82' : '#fff'} />
    </Wrapper>
  );
};

export default IconFav;
