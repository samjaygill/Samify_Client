import React from "react";
import "./css/RandomAlbum.css"
import Rating from "./Rating";

function RandomAlbum({ artists }) {
  if (!artists || !artists.length) {
    return <div>Loading...</div>;
  }

  const artistsWithAlbums = artists.filter(
    (artist) => artist.albums && artist.albums.length > 0
  );

  if (artistsWithAlbums.length === 0) {
    return <div>No albums available for any artist.</div>;
  }

  const randomArtist =
    artistsWithAlbums[Math.floor(Math.random() * artistsWithAlbums.length)];

  const randomAlbumIndex = Math.floor(
    Math.random() * randomArtist.albums.length
  );
  const randomAlbum = randomArtist.albums[randomAlbumIndex];

  return (
    <div className="random-container">
      <div className="text">
        <h4>{randomAlbum.name}</h4>
        <p>Release Date: {randomAlbum.releaseDate}</p>
        <p>Genre: {randomAlbum.genre}</p>
        <p><Rating rating={randomAlbum.rating} /></p>
      </div>
      <div className="image">
        <img src={randomAlbum.albumImg} alt={randomAlbum.name} className="ra-img" />
      </div>
    </div>
  );
}

export default RandomAlbum;
