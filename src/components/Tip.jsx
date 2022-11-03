import styled from 'styled-components';

const Tip = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  padding: 0.5rem 0.7rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  background: rgba(22, 22, 22, 0.6);
  color: #fff;
  line-height: 1.4;
  text-align: center;
`;

export default Tip;
