"use client"

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

import { Button } from "./components/Button"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="favoritos"/>
    </ThemeProvider>
  )
}

export default Home