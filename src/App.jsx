import React from 'react';
import { Button } from './components';
import { Header } from './components/Header';
import { MainContainer, MainHeader } from './AppStyled';

const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainHeader>Try to beat me, human!</MainHeader>
      </MainContainer>
      <Button primary color="green">
        Yeap
      </Button>
      <Button primary color="red">
        Nope
      </Button>
      <Button>Listen</Button>
    </>
  );
};

export default App;
