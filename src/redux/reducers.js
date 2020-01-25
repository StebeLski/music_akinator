import ACTION_TYPE, { SCREENS } from './constants';

const initialState = {
  songList: [
    {
      artist: 'Test artist',
      songName: 'test song',
      album: 'test album',
      deezerLink: '#',
      deezerId: 3148104,
      songImage:
        'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
    },
    {
      artist: 'Test artist',
      songName: 'test song',
      album: 'test album',
      deezerLink: '#',
      deezerId: 3148104,
      songImage:
        'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
    },
    {
      artist: 'Test artist',
      songName: 'test song',
      album: 'test album',
      deezerLink: '#',
      deezerId: 3148104,
      songImage:
        'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
    },
    {
      artist: 'Test artist',
      songName: 'test song',
      album: 'test album',
      deezerLink: '#',
      deezerId: 3148104,
      songImage:
        'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
    },
  ],
  maximumRounds: 5,
  currentRound: 1,
  maximumTries: 5,
  currentTry: 1,
  songValueInInput: '',
  currentSong: {
    artist: 'Test artist',
    songName: 'test song',
    album: 'test album',
    deezerLink: '#',
    deezerId: 3148104,
    songImage: 'https://e-cdns-images.dzcdn.net/images/cover/fd195b4bc5112d75704acf0154039ccf/56x56-000000-80-0-0.jpg',
  },
  curentScreen: SCREENS.MAIN_SCREEN,
  isDeezerError: false,
  gameResult: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CURRENT_SONG_OBJECT:
      console.log('SET_CURRENT_SONG_OBJECT');

      return { ...state, currentSong: action.payload };
    case ACTION_TYPE.SET_SCREEN: {
      console.log('SET_SCREEN');

      return { ...state, curentScreen: action.payload };
    }
    case ACTION_TYPE.DEZEER_ERROR: {
      console.log('DEZEER_ERROR');

      return {
        ...state,
        currentSong: null,
        isDeezerError: true,
      };
    }

    case ACTION_TYPE.RESET_DEZEER_ERROR: {
      console.log('RESET_DEZEER_ERROR');

      return {
        ...state,
        isDeezerError: false,
      };
    }
    case ACTION_TYPE.SET_GAME_RESULT: {
      console.log('SET_GAME_RESULT');

      const newGameResult = state.gameResult;
      newGameResult.push(action.payload);
      return {
        ...state,
        gameResult: newGameResult,
      };
    }
    case ACTION_TYPE.SET_SONG_OBJECT_IN_LIST: {
      const newSongList = state.songList;
      newSongList.push(state.currentSong);
      return {
        ...state,
        songList: newSongList,
      };
    }
    case ACTION_TYPE.SET_CURRENT_TRY: {
      const newSongList = state.songList;
      newSongList.push(state.currentSong);
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

    default:
      return state;
  }
};
