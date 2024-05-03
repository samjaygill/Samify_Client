import React from 'react'
import Artists from './Artists';

function ArtistList({ artists }) {
  return (
    <div>
      {artists.map((artist, index) => (
        <Artists key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
}

export default ArtistList