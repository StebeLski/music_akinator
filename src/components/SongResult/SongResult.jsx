import React from 'react';
import { useSelector } from 'react-redux';
import { SongResultBox, FrameBox, InfoBox, SongInfo, AlbumInfo, SongName, SongArtist } from './SongResultStyled';

export const SongResult = () => {
  const currentSong = useSelector(state => state.currentSong);
  const { deezerId, artist, songName, album } = currentSong;
  console.log(deezerId);
  return (
    <SongResultBox>
      <FrameBox>
        <iframe
          title="deezer"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=ff0000&layout=dark&size=medium&type=tracks&id=${deezerId}&app_id=1`}
          width="200"
          height="200"
        />
      </FrameBox>
      <InfoBox>
        <SongInfo>
          <SongName>{songName}</SongName>
          <SongArtist>{artist}</SongArtist>
        </SongInfo>
        <AlbumInfo>
          <span>Album:</span>
          <span>{album}</span>
        </AlbumInfo>
      </InfoBox>
    </SongResultBox>
  );
};
