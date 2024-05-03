import React from "react";
import Albums from "./Albums";

function AlbumList({ artists }) {
  let allAlbums = [];
  artists.forEach((artist) => {
    allAlbums = allAlbums.concat(artist.albums);
  });
  allAlbums.sort((albumA, albumB) => {
    const nameA = albumA.name.toLowerCase();
    const nameB = albumB.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <div>
      <Albums albums={allAlbums} />
    </div>
  );
}

export default AlbumList;
