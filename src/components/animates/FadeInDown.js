import { keyframes } from 'styled-components';

const FadeInDown = keyframes`
from {
    opacity: 0;
    transform: translate3d(0, -400%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, -250%, 0);
  }
`;
export default FadeInDown;
