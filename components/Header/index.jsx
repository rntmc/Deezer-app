"use client"

import { useState, useEffect } from "react";
import Link from 'next/link'
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Button } from '../Button';
import { Input } from '../Input';
import {Container, Profile} from './styles'

export function Header({onSearchChange, ...rest}) {
  const [searchInput, setSearchInput] = useState('');
  const [currentPath, setCurrentPath] = useState('');

  const handleSearchChange = (value) => {
    setSearchInput(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const navigateToPage = () => {
    // Verifica se a rota atual é "/favorites" e redireciona para a página principal ("/")
    if (currentPath === '/') {
      window.location.href = '/favorites';
    } else {
      // Se não estiver na página de favoritos, direciona para "/"
      window.location.href = '/';
    }
  };

  useEffect(() => {
    // Atualiza o estado currentPath sempre que a rota muda
    setCurrentPath(window.location.pathname);
  }, []);
  

  return(
    <Container {...rest}>
        <Profile>
          <GiMusicalNotes/>
          <div>
            <span>My-Deezer</span>
            <strong>User</strong>
          </div>
        </Profile>
    
      <Input
        onChange={handleSearchChange }
        icon={IoIosSearch}
        placeholder="Busque por artista, album ou musica"
      />

      <Button title={currentPath === '/' ? 'Favoritos' : 'Home'} onClick={navigateToPage}/>


    </Container>
  )
}