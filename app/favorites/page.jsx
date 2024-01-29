"use client"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global'
import theme from '@styles/theme';

import {Header} from '@components/Header';
import {Favorites} from "@components/Favorites"

const Favorite = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Favorites/>
    </ThemeProvider>
  )
}

export default Favorite