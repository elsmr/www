import React from 'react'
import { Box, BoxProps } from 'theme-ui'

export const Wrapper = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ sx, ...props }, ref) => (
    <Box
      ref={ref}
      {...props}
      sx={{
        py: 5,
        px: [4, 5],
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        ...sx,
      }}
    />
  )
)
