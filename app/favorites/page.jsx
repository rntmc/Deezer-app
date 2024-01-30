"use client"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global'
import theme from '@styles/theme';

import {Favorites} from "@components/Favorites"

const Favorite = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Favorites/>
    </ThemeProvider>
  )
}

export default Favorite