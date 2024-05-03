import React, { useEffect, useState } from "react";
import ArtistData from "../components/ArtistData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/Header";

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
          <Route path="/artists" element={<ArtistData artists={artists} />} />
        </Routes>
    </Router>
  );
}

export default MainContainer;
