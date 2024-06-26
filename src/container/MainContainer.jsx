import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/Header";
import ArtistList from "../components/artists/ArtistList";
import AlbumList from "../components/albums/AlbumList";
import ArtistCard from "../components/artists/ArtistCard";
import AlbumCard from "../components/albums/AlbumCard";

function MainContainer() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/artists");
        const artistData = await response.json();
        setArtists(artistData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home artists={artists} />} />
          <Route path="/artists" element={<ArtistList artists={artists} />} />
          <Route path="/artists/:id" element={<ArtistCard />} />
          <Route path="/albums" element={<AlbumList artists={artists} />} />
          <Route path="/albums/:id" element={<AlbumCard />} />

        </Routes>
    </Router>
  );
}

export default MainContainer;
