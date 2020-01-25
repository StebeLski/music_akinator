import React from 'react';
import { useSelector } from 'react-redux';
import { SongResultBox, FrameBox, InfoBox, SongIfo, AlbumInfo } from './SongResultStyled';

export const SongResult = () => {
  const currentSong = useSelector(state => state.currentSong);
  const { deezerId, artist, songName, album } = currentSong;

  return (
    <SongResultBox>
      <FrameBox>
        <iframe
          title="deezer"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=ff0000&layout=dark&size=medium&type=tracks&id=${deezerId}`}
          width="300"
          height="300"
        />
      </FrameBox>
      <InfoBox>
        <SongIfo>
          <span>{songName}</span>
          <span>{artist}</span>
        </SongIfo>
        <AlbumInfo>
          <span>Album:</span>
          <span>{album}</span>
        </AlbumInfo>
      </InfoBox>
    </SongResultBox>
  );
};
