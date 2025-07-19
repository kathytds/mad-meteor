import React, { useEffect, useRef } from 'react';
import './PlayerPage.css';
import { $currentSong } from '../store';
import type { Song } from '../types/song';

export default function PlayerPage() {

  const [song, setSong] = React.useState<null | Song>(null)

  const refAudio = useRef<null | HTMLAudioElement>(null)
  

  React.useEffect(function () {
    $currentSong.subscribe(function (state) {
      setSong(state)
      $currentSong.subscribe(function (getNextSong) {
        if (refAudio.current) {
          if (getNextSong) {
            refAudio.current.src = getNextSong.audio.url;
            refAudio.current.play();
          }
        }
      });
    })
  }, [])

  function handlerPlay() {
    if (refAudio.current) {
      refAudio.current.play()
    }
  }
  function handlerPause() {
    if (refAudio.current) {
      refAudio.current.pause()
    }
  }
  function handlerNext() {
    if (refAudio.current) {
      refAudio.current.getNextSong()
    }
  }
  function handlerPrevious() {
    if (refAudio.current) {
      refAudio.current.previous()
    }
  }

  return (
    <div className="player-container">
      <audio src={song?.audio.url} autoPlay ref={refAudio}></audio>
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
        <button className="prev" onClick={handlerPrevious}>&#9664;</button>
        <button className="play" onClick={handlerPlay}>&#9654;</button>
        <button className="pause" onClick={handlerPause}>&#10073;&#10073;</button>
        <button className="next" onClick={handlerNext}>&#9654;&#9654;</button>
      </div>
    </div>
  );
}

function getNextSong(): Song | null {
  throw new Error('Function not implemented.');
}
