import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

import { useSelector, useDispatch } from 'react-redux';
import { Button } from './components';
import { Header } from './components/Header';
import { SongResult } from './components/SongResult';
import { SongList } from './components/SongList';

import {
  getSongByLyrics,
  getSongByHumming,
  setRaundResult,
  setCurrentScreen,
  setCurrentSong,
  pushSongInSongList,
  setCurrentTry,
  setCurrentRound,
  resetDezeerError,
  resetStore,
} from './redux/actions';

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
  // const [songInputValue, setSongInputValue] = useState('');
  const [isRecord, setIsRecord] = useState(false);
  // const currentSong = useSelector(state => state.currentSong);
  const screen = useSelector(state => state.curentScreen);

  const {
    maximumRounds,
    currentRound,
    maximumTries,
    currentTry,
    songList,
    isDeezerError,
    gameResult,
    currentSong,
  } = useSelector(state => {
    return {
      maximumRounds: state.maximumRounds,
      currentRound: state.currentRound,
      maximumTries: state.maximumTries,
      currentTry: state.currentTry,
      songList: state.songList,
      isDeezerError: state.isDeezerError,
      gameResult: state.gameResult,
      currentSong: state.currentSong,
    };
  });

  const points = gameResult.reduce((accumulator, currentValue) => {
    if (currentValue) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  const dispatch = useDispatch();

  const userAnswered = answer => {
    if (answer) {
      dispatch(setRaundResult(answer));
      if (currentRound <= maximumRounds) {
        dispatch(pushSongInSongList());
        dispatch(setCurrentScreen(SCREENS.MAIN_SCREEN));
        dispatch(setCurrentSong({}));
        dispatch(setCurrentRound(currentRound + 1));
        dispatch(setCurrentTry(1));
      } else {
        dispatch(pushSongInSongList());
        dispatch(setCurrentSong({}));
        dispatch(setCurrentScreen(SCREENS.RESULT_SCREEN));
      }
    } else if (currentTry < maximumTries) {
      dispatch(pushSongInSongList());
      dispatch(setCurrentScreen(SCREENS.MAIN_SCREEN));
      dispatch(setCurrentSong({}));
      dispatch(setCurrentTry(currentTry + 1));
    } else if (currentRound <= maximumRounds) {
      dispatch(pushSongInSongList());
      dispatch(setCurrentScreen(SCREENS.MAIN_SCREEN));
      dispatch(setCurrentRound(currentRound + 1));
      dispatch(setCurrentTry(1));
      dispatch(setCurrentSong({}));
    } else {
      dispatch(pushSongInSongList());
      dispatch(setCurrentSong({}));
      dispatch(setCurrentScreen(SCREENS.RESULT_SCREEN));
    }
  };

  const recordVoice = () => {
    dispatch(resetDezeerError());
    setIsRecord(true);
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
              setIsRecord(false);
              dispatch(
                getSongByHumming(file, () => {
                  userAnswered(false);
                })
              );
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
          <>
            <InputContainer>
              <RecordButton onClick={recordVoice} isRecord={isRecord} />
            </InputContainer>
            {songList.length ? <SongList /> : null}
          </>
        );
      case SCREENS.SONG_SCREEN:
        return (
          <GameContainer>
            <SongResult />
            <AnswerContainer>
              <Button primary color="green" onClick={() => userAnswered(true)}>
                Yeap
              </Button>
              <Button primary color="red" onClick={() => userAnswered(false)}>
                Nope
              </Button>
            </AnswerContainer>
            <Button color="pink" onClick={() => window.open(currentSong.deezerLink, '_blank')}>
              Listen in deezer
            </Button>
            {songList.length ? <SongList /> : null}
          </GameContainer>
        );
      case SCREENS.RESULT_SCREEN:
        return (
          <>
            <ResultContainer>
              <span>My point: {points}</span>
              <Button
                primary
                color="green"
                onClick={() => {
                  dispatch(resetStore());
                }}
              >
                Try Again
              </Button>
            </ResultContainer>
            {songList.length ? <SongList /> : null}
          </>
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
        {screen === SCREENS.MAIN_SCREEN ? (
          <MainSubtitle>
            {isDeezerError ? 'Nothing found. Try it again.' : 'Write audio to recognize a song.'}
          </MainSubtitle>
        ) : null}
        {screenHandler(screen)}
      </MainContainer>
    </>
  );
};

export default App;
