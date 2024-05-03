import React from 'react'

function ArtistData({artists}) {
  return (
    <div>
      {artists.map(artist => (
        <div key={artist.id}>
          <h2>{artist.stageName}</h2>
          <img src={artist.artistImg} alt={artist.stageName} />
          <p>Real Name: {artist.realName}</p>
          <p>Age: {artist.age}</p>
          <p>Date of Birth: {artist.dob}</p>
          <p>Location: {artist.location}</p>
          <p>Bio: {artist.bio}</p>

          <h3>Albums:</h3>
          {artist.albums.map(album => (
            <div key={album.id}>
              <h4>{album.name}</h4>
              <img src={album.albumImg} alt={album.name} />
              <p>Release Date: {album.releaseDate}</p>
              <p>Genre: {album.genre}</p>
              <p>Rating: {album.rating}</p>

              <h5>Songs:</h5>
              <ul>
                {album.songs.map(song => (
                  <li key={song.id}>{song.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ArtistData