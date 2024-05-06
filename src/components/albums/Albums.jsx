import React from "react";
import "./css/Albums.css"
import { Link } from "react-router-dom";

function Albums({ albums }) {
  return (
    <div className="albums-container">
        {albums.map((album) => (
      <Link to={`/albums/${album.id}`} className="album-link" key={album.id}>
            <div className="albums-card">
            <img src={album.albumImg} alt={album.name} className="album-img" />
            <h4 className="album-title">{album.name}</h4>
          </div>
        </Link>
        ))}
    </div>
  );
}

export default Albums;
