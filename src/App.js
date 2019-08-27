import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
const StyledBody = styled.section`
  height: 60vh;
`;
const App = () => {
  return (
    <>
      <Header />
      <StyledBody>body</StyledBody>
      <Footer />
    </>
  );
};
export default App;
