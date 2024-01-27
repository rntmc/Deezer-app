"use client"

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

import { Button } from "./components/Button"
import { Input } from "./components/Input"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="favoritos"/>
      <Input/>
    </ThemeProvider>
  )
}

export default Home