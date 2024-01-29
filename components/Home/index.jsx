import axios from "axios"
import { useState, useEffect, useRef } from "react";
import { FaHeart} from "react-icons/fa";
import {useLocalStorage} from "@hooks/useLocalStorage";
import { Header } from "@components/Header";
import {Container,MusicList, CardWrapper } from "./styles"

export function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const audioRef = useRef();
  
  const handleFavorite = (result) => {
    const isFavorited = favorites.some((fav) => fav.id === result.id);
    
    if (isFavorited) {
      console.log(`Removendo favorito: ${result.title}`);
      // Remove do array de favoritos
      setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== result.id)
      );
    } else {
      console.log(`Adicionando favorito: ${result.title}`);
      // Adiciona ao array de favoritos
      setFavorites((prevFavorites) => [...prevFavorites, result]);
    }
  };
  
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

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://deezerdevs-deezer.p.rapidapi.com/search",
          params: { q: searchInput },
          headers: {
            "X-RapidAPI-Key":
              "9c3be6439dmsh0da70461454fffap19aed3jsn9397573041ed",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        };

        const response = await axios(options);
        // console.log(response);
        // console.log(response.data.data[0].duration)

        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          const tracksWithData = response.data.data.map((track) => ({
            ...track,
            duration: track.duration || 0,
          }));
          setResults(tracksWithData);
        }
      } catch (error) {
        console.error("Erro ao obter informações:", error);
      }
    };

    fetchResults();
  }, [searchInput]);      

  return(
      <>
      <Header onSearchChange={setSearchInput}/>
      <Container>
        {searchInput === "" ? (
        <>
        <h1>Top 10 Músicas Do Momento</h1>
        <MusicList>
          {topTracks.map((track) => (
            <CardWrapper key={track.id}>
              <button 
                className={`favorite ${
                  favorites.some((fav) => fav.id === track.id) ? "favorited" : ""
                }`}
                onClick={() => handleFavorite(track)}
              >
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
        </>
      ) : (
        <>
        <h1>Resultado da busca</h1>
          <MusicList>
          {results.map((result) => (
            <CardWrapper key={result.id}>
              <button
                className={`favorite ${
                  favorites.some((fav) => fav.id === result.id) ? "favorited" : ""
                }`}
                onClick={() => handleFavorite(result)}
              >
                <FaHeart />
              </button>
              <img
                src={result.album?.cover_medium || result.artist.picture_medium}
                alt={result.title}
              />
              <div className="info">
                <h3>{result.title}</h3>
                <p>Artista: {result.artist.name}</p>
                <p>Duração: {result.duration} segundos</p>
                <audio controls className="audio-player">
                  <source src={result.preview} type="audio/mp3" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
                <div className="deezer-link">
                  <a href={result.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-headphones"></i>
                    Ouça no Deezer
                  </a>
                </div>
              </div>
            </CardWrapper>
          ))}
          </MusicList>
          <audio ref={audioRef} className="audio"></audio>
        </> 
        )}
        </Container>
    </>
  )
}