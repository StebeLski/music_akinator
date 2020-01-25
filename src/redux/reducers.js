import { ACTION_TYPE } from './constants';

const initialState = {
  songList: [],
  maximumRounds: 5,
  currentRaund: 0,
  songValueInInput: '',
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
