import { FaHeart, FaPlay, FaPause } from "react-icons/fa";
import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global'
import theme from '@styles/theme';

import { Container,AlbumList,AlbumCard} from './styles';
import { useLocalStorage } from "@hooks/useLocalStorage";  

export function Favorites () {
  const audioRef = useRef();
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
      <h1>Suas Musicas Favoritas</h1>
        <AlbumList>
          {favorites.map((favorite) => (
            <AlbumCard key={favorite.id}>
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
                {/* Adapte o código conforme necessário */}
                <p>Duração: {favorite.duration} segundos</p>
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
            </AlbumCard>
          ))}
        </AlbumList>
        <audio ref={audioRef}></audio>
      </Container>
    </ThemeProvider>
  );
}

