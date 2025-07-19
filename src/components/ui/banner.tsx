import { useState, type ReactNode } from 'react'
import { X, type Icon } from 'react-feather'
import { Box, Flex, Grid, IconButton } from 'theme-ui'

type BannerProps = {
  title: ReactNode
  icon?: Icon
}

export function Banner({ title, icon: Icon }: BannerProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Grid
      p={2}
      gap={2}
      columns="1fr auto 1fr"
      sx={{
        width: '100%',
        flexGrow: 1,
        alignItems: 'center',
        bg: 'accentBackground',
      }}
    >
      <Flex sx={{ gridColumn: 2, gap: 1, alignItems: 'center' }}>
        {Icon && <Icon width="20px" height="20px" />}
        <Box as="p">{title}</Box>
      </Flex>

      <IconButton
        variant="iconSmall"
        onClick={() => setVisible(false)}
        sx={{ gridColumn: 3, justifySelf: 'end' }}
      >
        <X width="20px" height="20px" />
      </IconButton>
    </Grid>
  )
}
