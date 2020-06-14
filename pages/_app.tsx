import React from 'react'
import { Styled, ThemeProvider } from 'theme-ui'
import { theme } from '../src/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
    </ThemeProvider>
  )
}

export default MyApp
