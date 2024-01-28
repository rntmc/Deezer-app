"use client"

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global'
import theme from '@styles/theme';

import { Header } from "../components/Header"
import { Top10 } from "../components/Top10"

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>

      <Header/>
      <Top10/>
    </ThemeProvider>
  )
}

export default Home