import React from 'react';
import { SongListItemStyled, Image } from './SongListItemStyled';

export const SongListItem = ({ data }) => {
  const { songName, album, artist, songImage } = data;

  return (
    <SongListItemStyled>
      <Image src={songImage} alt={songName} />
      <span>{songName}</span>
      <span>{album}</span>
      <span>{artist}</span>
    </SongListItemStyled>
  );
};
