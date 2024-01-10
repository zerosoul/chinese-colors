import { FaXTwitter } from 'react-icons/fa6';
import styled from 'styled-components';

const StyledWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const IconTwitter = () => {
  return (
    <StyledWrapper href="https://twitter.com/wsygc" target="_blank">
      <FaXTwitter size="30" />
    </StyledWrapper>
  );
};

export default IconTwitter;
