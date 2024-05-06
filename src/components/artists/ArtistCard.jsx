import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./css/ArtistCard.css"

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
      <div className='artist-card-details'>
    <img src={artist.artistImg} alt={artist.stageName} className="artist-detail-img" />
    <div className="artist-detail-info">
    <h2>{artist.stageName}</h2>
      <p>Name: {artist.realName}</p>
      <p>DOB: {artist.dob}</p>
      <p>From: {artist.location}</p>
      <p>Bio: {artist.bio}</p>
      </div>
        </div>
      <div className='ac-album-details'>
      {artist.albums.map((album) => (
        <Link to={`/albums/${album.id}`} className="aa-link">
          <li key={album.id}>
            <div className="aa-card">
            <img src={album.albumImg} alt={album.name} className="aa-img" />
            <h4 className="aa-title">{album.name}</h4>
          </div>
          </li>
          </Link>
        ))}
    </div>
  </div>
  )
}

export default ArtistCard