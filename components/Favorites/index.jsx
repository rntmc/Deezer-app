import axios from "axios"
import { FaHeart} from "react-icons/fa";
import { useRef, useState, useEffect } from 'react';

import { Container,MusicList,CardWrapper} from './styles';
import { useLocalStorage } from "@hooks/useLocalStorage";  
import { Header } from "@components/Header";

export function Favorites () {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  
  const audioRef = useRef();
  
  const handleFavorite = (favorite) => {
    const isFavorited = favorites.some((fav) => fav.id === favorite.id);

    if (isFavorited) {
      console.log(`Removendo favorito: ${favorite.title}`);
      // Remove do array de favoritos
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== favorite.id)
      );
    } else {
      console.log(`Adicionando favorito: ${favorite.title}`);
      // Adiciona ao array de favoritos
      setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    }
  };

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

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

  return (
    <>
    <Header onSearchChange={setSearchInput}/>
    <Container>
      {searchInput === "" ? (
      <>
      <h1>Suas Musicas Favoritas</h1>
        <MusicList>
          {favorites.map((favorite) => (
            <CardWrapper key={favorite.id}>
              {/* Renderizar cada item favorito aqui */}
              <button
                className={`favorite ${
                  favorites.some((fav) => fav.id === favorite.id)
                    ? 'favorited'
                    : ''
                }`}
                onClick={() => handleFavorite(favorite)}
              >
                <FaHeart />
              </button>
              <img src={favorite.album.cover_medium} alt={favorite.title} />
              <div className="info">
                <h3>{favorite.title}</h3>
                <p>Artista: {favorite.artist.name}</p>
                <p>Duração: {formatDuration(favorite.duration)}</p>
                <audio controls className="audio-player">
                  <source src={favorite.preview} type="audio/mp3" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
                <div className="deezer-link">
                  <a href={favorite.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-headphones"></i>
                    Ouça no Deezer
                  </a>
                </div>
              </div>
            </CardWrapper>
          ))}
        </MusicList>
        <audio ref={audioRef}></audio>
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
                <p>Duração: {formatDuration(result.duration)}</p>
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
  );
}

