import React from 'react'
import Artists from './Artists';
import { Link } from "react-router-dom";


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
            <Link
            to={`/artists/${index}`}
            className="artist-card"
            key={index}
          >
        <Artists key={artist.id} artist={artist} index={index} />
        </Link>
      ))}
    </div>
  );
}

export default ArtistList