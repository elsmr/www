export const projects = [
  {
    title: 'n8n-io/n8n',
    icon: 'Github',
    href: 'https://github.com/n8n-io/n8n',
    description:
      'Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services.',
  },
  {
    title: 'elsmr/mp3-mediarecorder',
    icon: 'Github',
    href: 'https://github.com/elsmr/mp3-mediarecorder',
    description:
      'A MediaRecorder polyfill that records audio as mp3. It encodes audio using WebAssembly in a Web Worker.',
  },
  {
    title: 'Kong/insomnia',
    icon: 'Github',
    href: 'https://github.com/Kong/insomnia',
    description:
      'A delightful Open Source REST/GraphQL client that I use. Added support for OpenAPI imports. Contributed some UX improvements.',
  },
  {
    title: 'apideck-libraries/reva',
    icon: 'Github',
    href: 'https://github.com/apideck-libraries/reva',
    description:
      'Server-side request validator for Node.js based on OpenAPI. Supports all OpenAPI v3 parameter types and includes high quality TypeScript definitions.',
  },
  {
    title: 'apideck-libraries/better-ajv-errors',
    icon: 'Github',
    href: 'https://github.com/apideck-libraries/better-ajv-errors',
    description:
      'Human-friendly JSON Schema validation for APIs. Features suggestions for spelling mistakes and a minimal footprint.',
  },
  {
    title: 'elsmr/givto',
    icon: 'Github',
    href: 'https://github.com/elsmr/givto',
    description:
      'An email driven Secret Santa app with automatic gift assignments, passwordless authentication and optional match exclusion rules.',
  },
]

export type Project = (typeof projects)[number]
