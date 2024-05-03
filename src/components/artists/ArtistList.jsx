import React from 'react'
import Artists from './Artists';

function ArtistList({ artists }) {
  const sortedArtists = artists.slice().sort((a, b) => {
    const nameA = a.stageName.toUpperCase(); 
    const nameB = b.stageName.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; 
  });
  return (
    <div>
      {sortedArtists.map((artist, index) => (
        <Artists key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
}

export default ArtistList