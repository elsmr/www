const focusRing = {
  '&:focus': {
    color: 'inherit',
    bg: 'inherit',
    outline: 'none',
    boxShadow: (theme) =>
      `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.control}`,
  },
  '&::-moz-focus-inner': {
    border: 0,
  },
}

const iconButtonStyle = {
  p: 0,
  borderWidth: '2px',
  borderColor: 'border',
  bg: 'muted',
  borderStyle: 'solid',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  '&:hover': {
    bg: 'primary',
  },
  ...focusRing,
}

export default {
  useColorSchemeMediaQuery: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'overpass, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#3a413e',
    textPrimary: '#0f141a',
    textMuted: '#787878',
    background: '#fff',
    primary: '#E5F9F1',
    secondary: '#E5DEFC',
    muted: '#fff',
    accentBackground: '#0f141a',
    border: '#0f141a',
    illustration: '#3a413e',
    illustrationBackground: '#fff',
    control: '#7F5AF0',
    controlBorder: '#0f141a',
    modes: {
      dark: {
        border: '#171f28',
        text: '#f3f5f7',
        textPrimary: '#f3f5f7',
        textMuted: '#bfc5cc',
        background: '#0f141a',
        muted: '#171f28',
        primary: '#7F5AF0',
        secondary: '#80E4BB',
        illustration: '#0f141a',
        illustrationBackground: '#f3f5f7',
        accentBackground: '#171f28',
      },
      materialDark: {
        border: '#98e4ff',
        text: '#f0ffff',
        textPrimary: '#324148',
        textMuted: '#bfd5de',
        background: '#324148',
        muted: '#324148',
        primary: '#93bbff',
        secondary: '#ffd47e',
        illustration: '#93bbff',
        illustrationBackground: '#324148',
        accentBackground: '#3d4d54',
        controlBorder: '#f0ffff',
        control: '#98e4ff',
      },
      nightOwl: {
        border: '#21c7a8',
        text: '#d6deeb',
        textPrimary: '#011627',
        textMuted: '#c5e4fd',
        background: '#011627',
        muted: '#011627',
        primary: '#82aaff',
        secondary: '#c792ea',
        illustration: '#82aaff',
        illustrationBackground: '#011627',
        accentBackground: '#011627',
        controlBorder: '#d6deeb',
        control: '#82aaff',
      },
      github: {
        border: '#6f42c1',
        text: '#24292e',
        textPrimary: '#24292e',
        textMuted: '#6a737d',
        background: '#fff',
        muted: '#fafbfc',
        primary: '#f1f8ff',
        secondary: '#0366d6',
        illustration: '#0366d6',
        illustrationBackground: '#fff',
        accentBackground: '#24292e',
        controlBorder: '#6f42c1',
        control: '#0366d6',
      },
    },
  },
  buttons: {
    icon: iconButtonStyle,
    iconSmall: {
      ...iconButtonStyle,
      width: '32px',
      height: '32px',
    },
  },
  links: {
    invisible: {
      color: 'text',
      textDecoration: 'none',
      ...focusRing,
    },
    nav: {
      px: 2,
      py: 1,
      fontWeight: 'heading',
      fontFamily: 'heading',
      fontSize: 3,
      letterSpacing: 1.4,
      '&:hover': {
        color: 'inherit',
        backgroundImage: (theme) =>
          `linear-gradient(120deg, ${theme.colors.primary},${theme.colors.primary})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '90% .6em',
        backgroundPosition: 'center 80%',
      },
      ...focusRing,
    },
  },
  cards: {
    primary: {
      px: 3,
      py: 4,
      borderRadius: 8,
      border: '2px solid black',
      borderColor: 'border',
      bg: 'background',
    },
  },
  badges: {
    primary: {
      px: 2,
      py: 0,
      color: 'textPrimary',
      bg: 'primary',
      borderRadius: '20px',
      fontWeight: 'body',
    },
  },
  forms: {
    radio: {
      color: 'control',
      'input:checked ~ &': {
        color: 'control',
      },
      'input:focus ~ &': {
        outline: 'none',
        bg: 'inherit',
        boxShadow: (theme) => `0 0 3px 0 ${theme.colors.control}`,
      },
    },
    select: {
      borderWidth: '2px',
      borderColor: 'controlBorder',
      bg: 'muted',
      ...focusRing,
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
      minWidth: '360px',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
