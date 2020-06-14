export const projects = [
  {
    title: 'elsmr/mp3-mediarecorder',
    icon: 'Github',
    href: 'https://github.com/elsmr/mp3-mediarecorder',
    description:
      'A MediaRecorder polyfill that records audio as mp3. It encodes audio using WebAssembly in a Web Worker.',
  },
  {
    title: 'elsmr/givto',
    icon: 'Github',
    href: 'https://github.com/elsmr/givto',
    description:
      'An email driven Secret Santa app with automatic gift assignments, passwordless authentication and optional match exclusion rules',
  },
  {
    title: 'Kong/insomnia',
    icon: 'Github',
    href: 'https://github.com/Kong/insomnia',
    description:
      'A delightful Open Source REST/GraphQL client that I use. Added support for OpenAPI imports. Contributed some UX improvements.',
  },
]

export type Project = typeof projects[number]
