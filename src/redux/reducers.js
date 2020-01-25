import ACTION_TYPE from './constants';

const initialState = {
  songList: [],
  maximumRounds: 5,
  currentRound: 1,
  maximumTries: 5,
  currentTry: 1,
  songValueInInput: '',
  currentSong: {},
  curentScreen: 'startScreen',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CURRENT_SONG_OBJECT:
      return { ...state, currentSong: action.payload };
    case ACTION_TYPE.SET_SCREEN: {
      return { ...state, curentScreen: action.payload };
    }

    default:
      return state;
  }
};
