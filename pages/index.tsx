import { StyledComponent } from '@emotion/styled'
import React, { useState } from 'react'
import { GitHub, Mail, AlertCircle } from 'react-feather'
import {
  Box,
  BoxOwnProps,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
} from 'theme-ui'
import { siteMetadata } from '../data/metadata'
import { projects } from '../data/projects'
import { Wrapper } from '../src/components/layout/wrapper'
import { Blob1, Blob2 } from '../src/components/svgs/blobs'
import { Logo } from '../src/components/svgs/logo'
import { Profile } from '../src/components/svgs/profile'
import { Theme } from '../src/components/svgs/theme'
import { ProjectCard } from '../src/components/ui/project-card'
import { Sidebar } from '../src/components/ui/sidebar'
import { SEO } from '../src/components/util/SEO'

const IconButtonLink = IconButton as unknown as StyledComponent<
  React.ComponentProps<'a'>,
  BoxOwnProps,
  {}
>

const HomePage = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <header>
        <SEO />
        <Wrapper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <Logo width="36px" sx={{ flexShrink: 0 }} />
            <Box as="nav" px={[0, 2, 5]}>
              <Box as="ul" sx={{ listStyle: 'none' }}></Box>
            </Box>
          </Flex>
          <Box>
            <IconButton aria-label="Color Theme" onClick={() => setOpen(true)}>
              <Theme width="20px" height="20px" />
            </IconButton>
          </Box>
        </Wrapper>
      </header>
      <Box as="main" pb={6} sx={{ overflow: 'hidden' }}>
        <Wrapper>
          <Grid
            gap={4}
            columns={[1, 2]}
            sx={{ alignItems: 'center', mb: [3, 5], position: 'relative' }}
            as="section"
          >
            <Flex sx={{ width: '100%', justifyContent: 'center' }}>
              <Profile
                sx={{
                  width: ['66%', '90%', '66%'],
                  height: '100%',
                  minWidth: '200px',
                  color: 'illustration',
                  maskSize: '100% 100%',
                  p: 4,
                  maskRepeat: 'no-repeat',
                  bg: 'illustrationBackground',
                  maskImage:
                    'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzkgMzQyIj4KICA8cGF0aCBkPSJNMTEuNSAzMTEuNWMtMTYuNzQtMjguMTYtMS44MS00OS44IDAtODIuNSA0LjMtNzcuNjYtMzUuODUtMTQ3LjcyIDE2LTE5Ny41QzY5LjktOS4yIDEzNS44NC05LjgzIDE4Ni41IDI4YzQyIDMxLjM2IDI0LjM4IDExMy4yMyAyNi41IDE1Ni41IDIuMTQgNDMuNzQgMzkuMjEgNzIuNCAxOS41IDExMS41LTIzLjg5IDQ3LjQtNzguNzcgNDcuMDItMTMxLjc4IDQ0LjM3LTM2LjU4LTEuODItNzAuNSAyLjYtODkuMjItMjguODd6Ii8+Cjwvc3ZnPg==")',
                }}
              />
            </Flex>
            <Box>
              <Heading as="h1" sx={{ fontSize: 7 }} mb={2}>
                {siteMetadata.name}
              </Heading>
              <Text as="p" color="textMuted" mb={2}>
                Freelance software engineer based in Ghent, Belgium 🇧🇪.
              </Text>

              <Text as="p" color="textMuted" mb={4}>
                Currently building the best workflow automation tool at n8n. I
                focus on TypeScript development, APIs and integrations.
              </Text>
              <div>
                <IconButtonLink
                  as="a"
                  href={`https://github.com/${siteMetadata.github}`}
                  aria-label="GitHub"
                  mr={2}
                >
                  <GitHub width="20px" height="20px" />
                </IconButtonLink>

                <IconButtonLink
                  as="a"
                  href={`mailto:${siteMetadata.email}`}
                  aria-label="Email"
                >
                  <Mail width="20px" height="20px" />
                </IconButtonLink>
              </div>
            </Box>
            <Blob1
              sx={{
                width: '600px',
                position: 'absolute',
                right: ['-100%', '-40%'],
                top: '70%',
                zIndex: -1,
                color: 'primary',
              }}
            />
          </Grid>
        </Wrapper>
        <Wrapper>
          <Box as="section" sx={{ mb: 5, position: 'relative' }}>
            <Heading sx={{ fontSize: 5, mb: 4 }}>
              Projects & Contributions
            </Heading>
            <Box
              sx={{
                display: 'grid',
                rowGap: 4,
                columnGap: 5,
                gridTemplateColumns: [
                  'repeat(auto-fit, minmax(260px, 1fr))',
                  'repeat(auto-fit, minmax(400px, 1fr))',
                ],
                alignItems: 'stretch',
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </Box>
            <Blob2
              sx={{
                width: '600px',
                position: 'absolute',
                left: ['-100%', '-70%', '-30%'],
                top: '60%',
                zIndex: -1,
                color: 'secondary',
              }}
            />
          </Box>
        </Wrapper>
      </Box>
      <Box as="footer" bg="accentBackground">
        <Wrapper>
          <Text as="p" sx={{ textAlign: 'center', fontSize: 6 }}>
            ✌️
          </Text>
        </Wrapper>
      </Box>
      <Sidebar isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  )
}

export default HomePage
