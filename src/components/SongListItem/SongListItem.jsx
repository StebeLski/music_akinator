import React from 'react';
import { SongListItemStyled, Image, Link, ColumeDiv, RowDiv } from './SongListItemStyled';

export const SongListItem = ({ data }) => {
  const { songName, album, artist, songImage, deezerLink } = data;

  return (
    <Link target="_blank" href={deezerLink}>
      <SongListItemStyled>
        <RowDiv>
          <Image src={songImage} alt={songName} />
          <ColumeDiv>
            <span>{songName}</span>
            <span>{album}</span>
          </ColumeDiv>
        </RowDiv>
        <span>{artist}</span>
      </SongListItemStyled>
    </Link>
  );
};
