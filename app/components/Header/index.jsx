"use client"

import { useState } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Button } from '../Button';
import { Input } from '../Input';
import {Container, Profile} from './styles'

export function Header({onSearchChange, ...rest}) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (value) => {
    setSearchInput(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

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

        <Button title="Favoritos"/>

    </Container>
  )
}