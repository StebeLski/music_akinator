import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

import { useSelector, useDispatch } from 'react-redux';
import { Button } from './components';
import { Header } from './components/Header';
import { SongResult } from './components/SongResult';
import { getSongByLyrics, getSongByHumming } from './redux/actions';
import {
  MainContainer,
  MainTitle,
  MainSubtitle,
  GameContainer,
  AnswerContainer,
  InputContainer,
  ResultContainer,
} from './AppStyled';
import { Input } from './components/Input';
import { RecordButton } from './components/RecordButton';
import { SCREENS } from './redux/constants';

const App = () => {
  const [songInputValue, setSongInputValue] = useState('');
  const currentSong = useSelector(state => state.currentSong);
  const screen = useSelector(state => state.curentScreen);

  const dispatch = useDispatch();

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
              dispatch(getSongByHumming(file));
            });
        }, 5000);
      })
      .catch(error => {
        console.error('Error whith recorder', error);
      });
  };

  const screenHandler = currentScreen => {
    switch (currentScreen) {
      case SCREENS.MAIN_SCREEN:
        return (
          <InputContainer>
            <Input
              songInputValue={songInputValue}
              setSongInputValue={setSongInputValue}
              getSongByLyrics={getSongByLyrics}
            />
            <span>or</span>
            <RecordButton onClick={recordVoice} />
          </InputContainer>
        );
      case SCREENS.SONG_SCREEN:
        return (
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
        );
      case SCREENS.RESULT_SCREEN:
        return (
          <ResultContainer>
            <span>GG!</span>
          </ResultContainer>
        );
      default:
        return null;
    }
  };

  const screenTitleHandler = curentScreen => {
    switch (curentScreen) {
      case SCREENS.MAIN_SCREEN:
        return 'Try to beat me, human!';
      case SCREENS.SONG_SCREEN:
        return `I had a result! Is it right?`;
      case SCREENS.RESULT_SCREEN:
        return 'Game is over.';
      default:
        return `I'm listening carefully.`;
    }
  };

  return (
    <>
      <Header />
      <MainContainer>
        <MainTitle>{screenTitleHandler(screen)}</MainTitle>
        {screen !== SCREENS.RESULT_SCREEN ? (
          <MainSubtitle>Enter lyrics or write audio to recognize a song.</MainSubtitle>
        ) : null}
      </MainContainer>
      {screenHandler(screen)}
    </>
  );
};

export default App;
