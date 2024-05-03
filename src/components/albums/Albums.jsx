import React from "react";
import "./css/Albums.css"

function Albums({ albums }) {
  return (
    <div className="albums-container">
        {albums.map((album) => (
          <li key={album.id}>
            <div className="albums-card">
            <img src={album.albumImg} alt={album.name} className="album-img" />
            <h4 className="album-title">{album.name}</h4>
          </div>
          </li>
        ))}
    </div>
  );
}

export default Albums;
