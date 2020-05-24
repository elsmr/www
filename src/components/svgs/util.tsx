import styled, { StyledComponent } from '@emotion/styled'
import React from 'react'
import { Box, BoxOwnProps } from 'theme-ui'

export const SVGBox = styled(Box)({ as: 'svg' }) as StyledComponent<
  React.ComponentProps<'svg'>,
  BoxOwnProps,
  {}
>

export type SVGBoxProps = React.ComponentProps<typeof SVGBox>
