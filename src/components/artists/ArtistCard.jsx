import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ArtistCard() {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const fetchArtist = async () => {
          try {
            const response = await fetch(`http://localhost:8080/artists/${id}`);
            const artistData = await response.json();
            setArtist(artistData);
          } catch (error) {
            console.error('Error fetching artist details:', error);
          }
        };
    
        fetchArtist();
      }, [id]); 
    
      if (!artist) {
        return <div>Loading...</div>; 
      }

  return (
    <div className="artist-card-container">
    <h2>{artist.stageName}</h2>
    <img src={artist.artistImg} alt={artist.stageName} className="artist-detail-img" />
    <div className="artist-detail-info">
      <p>Real Name: {artist.realName}</p>
      <p>Location: {artist.location}</p>
      <p>Bio: {artist.bio}</p>
    </div>
  </div>
  )
}

export default ArtistCard