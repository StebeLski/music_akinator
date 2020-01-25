import ACTION_TYPE, { SCREENS } from './constants';

// {
//   artist: 'Test artist',
//   songName: 'test song',
//   album: 'test album',
//   deezerLink: '#',
//   deezerId: 3148104,
//   songImage:
//     'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
// },
// {
//   artist: 'Test artist',
//   songName: 'test song',
//   album: 'test album',
//   deezerLink: '#',
//   deezerId: 3148104,
//   songImage:
//     'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
// },
// {
//   artist: 'Test artist',
//   songName: 'test song',
//   album: 'test album',
//   deezerLink: '#',
//   deezerId: 3148104,
//   songImage:
//     'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
// },
// {
//   artist: 'Test artist',
//   songName: 'test song',
//   album: 'test album',
//   deezerLink: '#',
//   deezerId: 3148104,
//   songImage:
//     'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
// },

const initialState = {
  songList: [],
  maximumRounds: 5,
  currentRound: 1,
  maximumTries: 3,
  currentTry: 1,
  songValueInInput: '',
  currentSong: {},
  curentScreen: SCREENS.MAIN_SCREEN,
  isDeezerError: false,
  gameResult: [],
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
    case ACTION_TYPE.SET_GAME_RESULT: {
      const newGameResult = state.gameResult;

      newGameResult.push(action.payload);
      return {
        ...state,
        gameResult: newGameResult,
      };
    }
    case ACTION_TYPE.SET_SONG_OBJECT_IN_LIST: {
      if (!state.currentSong) {
        return state;
      }
      if (Object.keys(state.currentSong).length === 0) {
        return state;
      }
      const newSongList = state.songList;
      newSongList.unshift(state.currentSong);
      return {
        ...state,
        songList: newSongList,
      };
    }
    case ACTION_TYPE.SET_CURRENT_TRY: {
      return {
        ...state,
        currentTry: action.payload,
      };
    }

    case ACTION_TYPE.SET_CURRENT_ROUND: {
      return {
        ...state,
        currentRound: action.payload,
      };
    }
    case ACTION_TYPE.RESET_STORE: {
      return {
        songList: [],
        maximumRounds: 5,
        currentRound: 1,
        maximumTries: 3,
        currentTry: 1,
        songValueInInput: '',
        currentSong: {
          artist: 'Test artist',
          songName: 'test song',
          album: 'test album',
          deezerLink: '#',
          deezerId: 3148104,
          songImage:
            'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
        },
        curentScreen: SCREENS.MAIN_SCREEN,
        isDeezerError: false,
        gameResult: [],
      };
    }

    default:
      return state;
  }
};
