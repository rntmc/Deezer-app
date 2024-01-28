import { useState, useEffect } from "react";
import { FaHeart} from "react-icons/fa";

import {Container,MusicList, CardWrapper, Title } from "./styles"

export function Top10() {
  const [topTracks, setTopTracks] = useState([]);
  
  useEffect(() => {
    const fetchTopTracks  = async () => {
      try {
        const response = await fetch("/api/chart");
        if (response.ok) {
          const data = await response.json();
          setTopTracks(data.tracks.data);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopTracks ();
  }, []);

  

  return(
    <Container>
      <h1>Top 10 Músicas Do Momento</h1>
      <MusicList>
        {topTracks.map((track) => (
          <CardWrapper key={track.id}>
            <button className="favorite-button">
              <FaHeart />
            </button>
            <img src={track.album.cover_medium} alt={track.title} />
            <div className="info">
              <h3>{track.title}</h3>
              <p>Artista: {track.artist.name}</p>
              <p>Duração: {track.duration} segundos</p>
              <audio controls className="audio-player">
                <source src={track.preview} type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
              <div className="deezer-link">
                <a href={track.link} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-headphones"></i>
                  Ouça no Deezer
                </a>
              </div>
            </div>
          </CardWrapper>
        ))}
      </MusicList>
    </Container>
  )
}