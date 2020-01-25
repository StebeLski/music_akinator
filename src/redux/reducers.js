import ACTION_TYPE, { SCREENS } from './constants';

const initialState = {
  songList: [],
  maximumRounds: 5,
  currentRound: 1,
  maximumTries: 5,
  currentTry: 1,
  songValueInInput: '',
  currentSong: {},
  curentScreen: SCREENS.MAIN_SCREEN,
  isDeezerError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CURRENT_SONG_OBJECT:
      return { ...state, currentSong: action.payload };
    case ACTION_TYPE.SET_SCREEN: {
      return { ...state, curentScreen: action.payload };
    }
    case ACTION_TYPE.DEZEER_ERROR: {
      return {
        ...state,
        currentSong: null,
        isDeezerError: true,
      };
    }

    case ACTION_TYPE.RESET_DEZEER_ERROR: {
      return {
        ...state,
        isDeezerError: false,
      };
    }

    default:
      return state;
  }
};
