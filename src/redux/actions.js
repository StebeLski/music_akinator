import axios from 'axios';
import ACTION_TYPE, { SCREENS } from './constants';

const accestTokken = '4f4560649da234063527f04c3d8c7951';

export const getSongByHumming = (file, callBack = () => {}) => {
  return dispatch => {
    const formData = new FormData();
    formData.set('file', file);
    return axios({
      method: 'post',
      url: `https://api.audd.io/recognize/?api_token=${accestTokken}&return=deezer`,
      data: formData,
      headers: {
        'content-type': `multipart/form-data; boundary=mp3`,
      },
    })
      .then(response => {
        if (response.data.result !== null) {
          const payload = {
            artist: response.data.result.artist,
            songName: response.data.result.title,
            album: response.data.result.album,
            deezerLink: response.data.result.deezer.link,
            deezerId: response.data.result.deezer.id,
            songImage: response.data.result.deezer.album.cover_small,
          };
          dispatch({ type: ACTION_TYPE.SET_CURRENT_SONG_OBJECT, payload });
          dispatch({ type: ACTION_TYPE.SET_SCREEN, payload: SCREENS.SONG_SCREEN });
        } else {
          dispatch({ type: ACTION_TYPE.DEZEER_ERROR });
          callBack();
        }
      })
      .catch(err => {
        dispatch({ type: ACTION_TYPE.DEZEER_ERROR });
        callBack();
      });
  };
};

export const getSongByLyrics = searchString => {
  return dispatch => {
    return axios
      .get(`https://api.audd.io/findLyrics/?api_token=${accestTokken}&q=${searchString}&return=deezer`, {
        return: 'deezer',
      })
      .then(response => {
        if (response.data.status === 'success') {
          const song = response.data.result[0];
          dispatch({ type: ACTION_TYPE.SET_CURRENT_SONG_OBJECT, payload: song });
          // getSongFromLastFm(song.title);
        }
      })
      .catch(err => console.log(err));
  };
};

export const setCurrentScreen = screenId => {
  return { type: ACTION_TYPE.SET_SCREEN, payload: screenId };
};

export const setRaundResult = result => ({ type: ACTION_TYPE.SET_GAME_RESULT, payload: result });

export const setCurrentSong = song => ({ type: ACTION_TYPE.SET_CURRENT_SONG_OBJECT, payload: song });

export const pushSongInSongList = () => ({ type: ACTION_TYPE.SET_SONG_OBJECT_IN_LIST });

export const setCurrentTry = payload => ({ type: ACTION_TYPE.SET_CURRENT_TRY, payload });

export const setCurrentRound = payload => ({ type: ACTION_TYPE.SET_CURRENT_ROUND, payload });

export const resetDezeerError = () => ({ type: ACTION_TYPE.RESET_DEZEER_ERROR });

export const resetStore = () => ({ type: ACTION_TYPE.RESET_STORE });

// export const pushSetCurrentTry = payload => ({ type: ACTION_TYPE.SET_CURRENT_TRY, payload });
