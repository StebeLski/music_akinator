import React from 'react';
import { useSelector } from 'react-redux';
import { SongListItem } from '../SongListItem';
import { SongListStyled } from './SongListStyled';

export const SongList = () => {
  const songList = useSelector(state => state.songList);

  const songListRender = arr => {
    return arr.map(song => {
      return <SongListItem key={song.deezerId} data={song} />;
    });
  };
  return <SongListStyled>{songListRender(songList)}</SongListStyled>;
};
