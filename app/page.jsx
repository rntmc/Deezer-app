"use client"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global'
import theme from '@styles/theme';

import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { HeadersAdapter } from 'next/dist/server/web/spec-extension/adapters/headers';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
    </ThemeProvider>
  )
}

export default Home