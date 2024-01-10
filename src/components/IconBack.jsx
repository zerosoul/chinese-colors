import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import Icon from './Icon';

const IconBack = () => {
  const navigateTo = useNavigate();
  return (
    <Icon
      handleClick={() => {
        navigateTo('/');
      }}
      icon={<IoArrowBackCircleOutline size="35" />}
    ></Icon>
  );
};

export default IconBack;
