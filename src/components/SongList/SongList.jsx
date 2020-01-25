import React from 'react';
import { useSelector } from 'react-redux';

export const SongList = () => {
  const songList = useSelector(state => state.songList);

  return <div />;
};
