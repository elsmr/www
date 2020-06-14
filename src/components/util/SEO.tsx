import Head from 'next/head'
import React, { SFC } from 'react'
import { siteMetadata, SiteMetadata } from '../../../data/metadata'

export const SEO: SFC<Partial<SiteMetadata>> = () => {
  const imageUrl = `${siteMetadata.url}/${siteMetadata.imageUrl}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: siteMetadata.email,
    image: imageUrl,
    jobTitle: siteMetadata.job,
    name: siteMetadata.name,
    gender: 'male',
    nationality: 'Belgian',
    url: siteMetadata.url,
    sameAs: [
      `https://www.github.com/${siteMetadata.github}`,
      `https://www.twitter.com/${siteMetadata.twitter}`,
    ],
  }

  return (
    <Head>
      <link rel="canonical" href={siteMetadata.url} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="image" content={imageUrl} />

      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteMetadata.name} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:width"
        content={siteMetadata.imageWidth.toString()}
      />
      <meta
        property="og:image:height"
        content={siteMetadata.imageHeight.toString()}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={siteMetadata.name} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  )
}
