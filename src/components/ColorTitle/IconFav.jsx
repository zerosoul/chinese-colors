import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1.4rem;
    height: 1.4rem;
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

    if (favs.some(f => f.name == currColor.name)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [currColor]);
  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem(FavStoreKey) || '[]');
    console.log('favs t', favs);

    if (isFav) {
      favs = favs.filter(color => {
        return color.name != currColor.name;
      });
    } else {
      favs.push(currColor);
    }
    setIsFav(prev => !prev);
    localStorage.setItem(FavStoreKey, JSON.stringify(favs));
  };
  return (
    <Wrapper onClick={toggleFav}>
      <svg
        t="1568172188297"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2640"
        width="32"
        height="32"
      >
        <path
          d="M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z"
          p-id="2641"
          fill={isFav ? '#ef7a82' : '#fff'}
        ></path>
      </svg>
    </Wrapper>
  );
};

export default IconFav;
