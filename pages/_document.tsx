import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { InitializeColorMode } from 'theme-ui'
import { SEO } from '../src/components/util/SEO'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <SEO />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
