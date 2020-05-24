import { graphql, useStaticQuery } from 'gatsby'
import React, { SFC } from 'react'
import { Helmet } from 'react-helmet'

const query = graphql`
  {
    site {
      siteMetadata {
        name
        titleTemplate
        description
        imageUrl
        url
        email
        twitter
        github
        job
      }
    }
  }
`

export interface SiteMetadata {
  name: string
  titleTemplate: string
  description: string
  imageUrl: string
  url: string
  email: string
  twitter: string
  github: string
  job: string
}

export const SEO: SFC<Partial<SiteMetadata>> = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const metadata: SiteMetadata = { ...siteMetadata, ...props }
  const imageUrl = `${metadata.url}/${metadata.imageUrl}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: metadata.email,
    image: imageUrl,
    jobTitle: metadata.job,
    name: metadata.name,
    gender: 'male',
    nationality: 'Belgian',
    url: metadata.url,
    sameAs: [
      `https://www.github.com/${metadata.github}`,
      `https://www.twitter.com/${metadata.twitter}`,
    ],
  }

  return (
    <Helmet
      titleTemplate={metadata.titleTemplate}
      defaultTitle={metadata.name}
      htmlAttributes={{ lang: 'en' }}
    >
      <link rel="canonical" href={metadata.url} />
      <meta name="description" content={metadata.description} />
      <meta name="image" content={imageUrl} />

      <meta property="og:url" content={metadata.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.name} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metadata.twitter} />
      <meta name="twitter:title" content={metadata.name} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
