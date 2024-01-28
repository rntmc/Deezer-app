import axios from "axios"
import { useState, useEffect, useRef  } from "react";
import { FaHeart, FaPlay, FaPause } from "react-icons/fa";

import { Header } from "../../components/Header"
import { Container, AlbumList, AlbumCard} from "./styles"

export function FrontPage({ favorites, setFavorites }) {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [duration, setDuration] = useState()

  const audioRef = useRef();

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
          setResults(response.data.data);
        }
      } catch (error) {
        console.error("Erro ao obter informações:", error);
      }
    };

    fetchResults();
  }, [searchInput]);  

  // const handleFavorite = (result) => {
  //   const isFavorited = favorites.some((fav) => fav.id === result.id);

  //   if (isFavorited) {
  //     // Remove do array de favoritos
  //     setFavorites((prevFavorites) =>
  //       prevFavorites.filter((fav) => fav.id !== result.id)
  //     );
  //   } else {
  //     // Adiciona ao array de favoritos
  //     setFavorites((prevFavorites) => [...prevFavorites, result]);
  //   }
  // };

  const handlePlayPause = (preview) => {
    if (isPlaying && currentPreview === preview) {
      // Se já estiver tocando e clicou novamente na mesma música, pausa
      setIsPlaying(false);
      setCurrentPreview(null);
    } else {
      // Se não estiver tocando ou clicou em uma música diferente, inicia a reprodução
      setIsPlaying(true);
      setCurrentPreview(preview);
    }
  };

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  

  useEffect(() => {
    if (isPlaying && currentPreview) {
      // Se está tocando e há uma prévia selecionada, reproduz a música
      audioRef.current.src = currentPreview;
      audioRef.current.play();
    } else {
      // Se não está tocando, pausa a música
      audioRef.current.pause();
    }
  }, [isPlaying, currentPreview]);

  useEffect(() => {
    // Atualiza a duração quando a música é carregada
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });
  }, [currentPreview]);
  
  return (
    <Container>
      <Header onSearchChange={setSearchInput} />
      <AlbumList>
        {results.map((result) => (
          <AlbumCard key={result.id}>
            {/* <button
              className={`favorite ${
                favorites.some((fav) => fav.id === result.id) ? "favorited" : ""
              }`}
              onClick={() => handleFavorite(result)}
            >
              <FaHeart />
            </button> */}
            <img
              src={result.album?.cover_medium || result.artist.picture_medium}
              alt={result.title}
            />
            <p>{result.title}</p>
            <p>{result.artist.name}</p>
            <p>{`Duração: ${formatDuration(result.duration)}`}</p>
            
            <div className="buttons">
              <div className="playPauseButton" onClick={() => handlePlayPause(result.preview)}>
                {isPlaying && currentPreview === result.preview ? (
                  <FaPause />
                ) : (
                  <FaPlay />
                )}
              </div>

              <button>
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deezer link
                </a>
              </button>
            </div>
          </AlbumCard>
        ))}
      </AlbumList>
      <audio ref={audioRef} className="audio"></audio>
    </Container>
  );
}