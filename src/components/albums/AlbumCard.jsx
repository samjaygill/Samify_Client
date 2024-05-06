import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/AlbumCard.css";
import Rating from "../home/Rating";

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
        console.error("Error fetching album details:", error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="album-card-container">
      <div className="alc-info">
        <h2>{album.name}</h2>
        <Link to={`/artists/${album.artist.id}`} className="album-artist-link">
              <h4 className="ac-name">{album.artist.stageName}</h4>
            </Link>
        <p>Released: {album.releaseDate}</p>
        <p>{album.genre}</p>
        <p>
          <Rating rating={album.rating} />
        </p>
      </div>
      <div className="alc-img">
        <img src={album.albumImg} alt={album.name} className="album-card-img" />
      </div>
      <div className="alc-songs">
        <ul className="song-ul">
          {album.songs.map((song) => (
            <li key={song.id} className="song-list">
              <p className="song-title">{song.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AlbumCard;
