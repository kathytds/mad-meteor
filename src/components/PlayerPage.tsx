import React, { useEffect } from 'react';
import './PlayerPage.css';
import { $currentSong } from '../store';
import type { Song } from '../types/song';

export default function PlayerPage() {

  const [song, setSong] = React.useState<null | Song>(null)

  React.useEffect(function () {
    $currentSong.subscribe(function (state) {
      setSong(state)

    })
  }, [])

  return (
    <div className="player-container">
      <audio src={song?.audio.url} controls autoPlay></audio>
      <div className="cover">
        <img src={song?.image.url} alt="Song Cover" />
      </div>
      <div className="song-info">
        <h2 className="title">{song?.title}</h2>
        <p className="artist">{song?.author}</p>
      </div>
      <div className="progress-bar">
        <span className="current-time">0:00</span>
        <div className="bar">
          <div className="progress"></div>
        </div>
        <span className="duration">3:45</span>
      </div>
      <div className="controls">
        <button className="prev">&#9664;</button>
        <button className="play">&#9654;</button>
        <button className="next">&#9654;&#9654;</button>
      </div>
    </div>
  );
}   