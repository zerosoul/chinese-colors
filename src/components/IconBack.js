import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';

const IconBack = () => {
  return (
    <Link to={'/'}>
      <Icon
        icon={
          <svg
            style={{ width: '2rem', height: '2rem' }}
            t="1569329382185"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3667"
            width="45"
            height="45"
          >
            <path
              d="M512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333zM512 853.333333c-188.202667 0-341.333333-153.130667-341.333333-341.333333s153.130667-341.333333 341.333333-341.333333 341.333333 153.130667 341.333333 341.333333S700.202667 853.333333 512 853.333333z"
              p-id="3668"
              fill="#ffffff"
            ></path>
            <path
              d="M626.304 329.984 568.362667 267.349333 322.048 495.189333 567.552 734.549333 627.114667 673.450667 445.952 496.810667Z"
              p-id="3669"
              fill="#ffffff"
            ></path>
          </svg>
        }
      ></Icon>
    </Link>
  );
};

export default IconBack;
