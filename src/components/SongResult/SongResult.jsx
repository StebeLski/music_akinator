import React from 'react';
import { useSelector } from 'react-redux';

export const SongResult = () => {
  const songId = useSelector(state => state.currentSong.id);

  return (
    <div>
      <iframe
        title="deezer"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=tracks&id=${songId}`}
        width="700"
        height="350"
      />
      <span>Song Name</span>
      <span>Song Author</span>
      <span>Album:</span>
      <span>Album name</span>
    </div>
  );
};
