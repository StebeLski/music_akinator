import React from 'react';
import { Button } from './components';
import { Header } from './components/Header';
import { MainContainer, MainHeader, MainSubtitle } from './AppStyled';

const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainHeader>Try to beat me, human!</MainHeader>
        <MainSubtitle>Enter lyrics or write audio to recognize a song.</MainSubtitle>
        <div>
          <Button primary color="green">
            Yeap
          </Button>
          <Button primary color="red">
            Nope
          </Button>
          <Button>Listen</Button>
        </div>
      </MainContainer>
    </>
  );
};

export default App;
