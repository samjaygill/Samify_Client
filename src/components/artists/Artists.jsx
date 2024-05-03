import React from 'react'
import "./css/Artists.css"

function Artists({ artist, index }) {
  return (
    <div className={`artist-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
    <img src={artist.artistImg} alt={artist.stageName} className="artist-img" />
    <div className="artist-details">
      <h2>{artist.stageName}</h2>
      <p>{artist.realName}</p>
      <p>{artist.location}</p>
    </div>
  </div>
  )
}

export default Artists