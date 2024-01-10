// import React from 'react';
import { MdDownload } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const IconDownload = ({ handleDownload }) => {
  return (
    <Wrapper className="download" onClick={handleDownload}>
      <MdDownload />
    </Wrapper>
  );
};

export default IconDownload;
