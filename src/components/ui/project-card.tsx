import React, { FunctionComponent } from 'react'
import { GitHub } from 'react-feather'
import { animated, useSpring } from '@react-spring/web'
import { Box, Card, Heading, Link, Text } from 'theme-ui'
import { Blob1, Blob2 } from '../svgs/blobs'

export interface Project {
  icon: string
  title: string
  description: string
  href: string
}

const ALink = animated(Link)
const ABlob1 = animated(Blob1)
const ABlob2 = animated(Blob2)

export const ProjectCard: FunctionComponent<Project> = ({
  description,
  href,
  title,
  icon,
}) => {
  const [{ t }, setT] = useSpring(() => ({
    t: 0,
  }))

  return (
    <ALink
      variant="invisible"
      href={href}
      aria-label={title}
      onMouseEnter={() => setT.start({ t: 1 })}
      onMouseLeave={() => setT.start({ t: 0 })}
      style={{
        borderRadius: '8px',
        left: t.to((t) => t),
        transform: t.to((t) => `scale(${1 + t * 0.04})`),
      }}
    >
      <Card
        as="article"
        sx={{
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          bg: 'muted',
        }}
      >
        <Heading
          sx={{
            fontSize: [3, 4],
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          as="h1"
        >
          {icon === 'Github' && (
            <Box p={1}>
              <GitHub width="20px" height="20px" />
            </Box>
          )}
          {title}
        </Heading>
        <Text as="p" color="textMuted" sx={{ position: 'relative', zIndex: 1 }}>
          {description}
        </Text>
        <ABlob1
          sx={{
            position: 'absolute',
            color: 'primary',
            top: '100%',
            left: '-100%',
            width: '100%',
          }}
          style={{
            transform: t.to(
              (t) =>
                `translate3d(${t * 60}%, ${t * -28}%, 0) rotate(${t * -20}deg)`
            ),
          }}
        />
        <ABlob2
          sx={{
            position: 'absolute',
            color: 'secondary',
            bottom: '100%',
            right: '-100%',
            width: '100%',
          }}
          style={{
            transform: t.to(
              (t) =>
                `translate3d(${t * -60}%, ${t * 30}%, 0) rotate(${t * -20}deg)`
            ),
          }}
        />
      </Card>
    </ALink>
  )
}
