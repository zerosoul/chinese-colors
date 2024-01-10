import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from './Icon';
import { GoImage } from 'react-icons/go';

const IconImage = ({ path = '' }) => {
  const navigateTo = useNavigate();
  return (
    <Icon
      handleClick={() => {
        navigateTo(path);
      }}
      icon={<GoImage size="36" />}
    ></Icon>
  );
};

export default IconImage;
