"use client"

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/global'
import theme from '@styles/theme';

import { Home } from "../components/Home"

const FrontPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  )
}

export default FrontPage
