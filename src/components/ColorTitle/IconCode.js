import React from 'react';
import Icon from '../Icon';

const IconInfo = ({ showModal }) => {
  return (
    <Icon
      handleClick={showModal}
      icon={
        <svg
          t="1572327267226"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5318"
          width="32"
          height="32"
        >
          <path
            d="M128 192v576h704V192H128z m0-64h704a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z"
            p-id="5319"
            fill="#ffffff"
          ></path>
          <path
            d="M320 537.6V640L192 480l128-160v102.4L273.92 480z m320-115.2V320l128 160-128 160V537.6l46.08-57.6zM512 320h64L448 640h-64z"
            p-id="5320"
            fill="#ffffff"
          ></path>
        </svg>
      }
    ></Icon>
  );
};

export default IconInfo;
