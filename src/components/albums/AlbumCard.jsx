import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function AlbumCard() {

    const { id } = useParams();
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbum = async () => {
          try {
            const response = await fetch(`http://localhost:8080/albums/${id}`);
            const albumData = await response.json();
            setAlbum(albumData);
          } catch (error) {
            console.error('Error fetching album details:', error);
          }
        };
    
        fetchAlbum();
      }, [id]); 
    
      if (!album) {
        return <div>Loading...</div>; 
      }

  return (
    <div className="album-card-container">
    <h2>{album.name}</h2>
    <img src={album.albumImg} alt={album.name} className="album-card-img" />
    
  </div>
  )
}

export default AlbumCard