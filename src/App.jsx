import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

import { Button } from './components';
import { Header } from './components/Header';
import { getSongByLyrics, getSongByHumming } from './redux/actions';
import { MainContainer, MainTitle, MainSubtitle, GameContainer, AnswerContainer, InputContainer } from './AppStyled';
import { Input } from './components/Input';
import { RecordButton } from './components/RecordButton';


const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const recordVoice = () => {
    const recorder = new MicRecorder({
      bitRate: 128,
    });
    recorder
      .start()
      .then(() => {
        setTimeout(() => {
          recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
              const file = new File(buffer, 'uglyVoise.mp3', {
                type: blob.type,
                lastModified: Date.now(),
              });
              console.log(file);
              getSongByHumming(file);
              // const player = new Audio(URL.createObjectURL(file));
              // player.play();
            });
        }, 2000);
      })
      .catch(error => {
        console.error('Error whith recorder', error);
      });
  };

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
            <Button primary color="green" onClick={recordVoice}>
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
