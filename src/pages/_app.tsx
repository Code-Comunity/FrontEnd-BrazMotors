import React from 'react'
import { AppProps } from 'next/app'
import GlboalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp <AppProps> ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  <GlboalStyle />
  </ThemeProvider>
  )
}

export default MyApp