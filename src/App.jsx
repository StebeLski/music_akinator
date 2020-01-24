import React from 'react';
import { Button } from './components';
import { Header } from './components/Header';
import { MainContainer, MainTitle, MainSubtitle, GameContainer, AnswerContainer, InputContainer } from './AppStyled';
import { Input } from './components/Input';
import { RecordButton } from './components/RecordButton';

const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainTitle>Try to beat me, human!</MainTitle>
        <MainSubtitle>Enter lyrics or write audio to recognize a song.</MainSubtitle>
        <InputContainer>
          <Input />
          <span>or</span>
          <RecordButton />
        </InputContainer>
        <GameContainer>
          <AnswerContainer>
            <Button primary color="green">
              Yeap
            </Button>
            <Button primary color="red">
              Nope
            </Button>
          </AnswerContainer>
          <Button color="pink">Listen in deezer</Button>
        </GameContainer>
      </MainContainer>
    </>
  );
};

export default App;
