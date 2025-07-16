import React from 'react';
import './PlayerPage.css'; 

export default function PlayerPage() {
    return (
        <div className="player-container">
  <div className="cover">
    <img src="/cover.jpg" alt="Song Cover" />
  </div>
  <div className="song-info">
    <h2 className="title">Song Title</h2>
    <p className="artist">Artist Name</p>
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