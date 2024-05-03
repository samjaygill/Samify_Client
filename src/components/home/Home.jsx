import React from "react";
import RandomAlbum from "./RandomAlbum";
import "./css/Home.css"

function Home({artists}) {
  return (
    <div className="home-container">
      <RandomAlbum artists={artists}/>
    </div>
  );
}

export default Home;
