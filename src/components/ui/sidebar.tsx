import { css, Global } from '@emotion/core'
import { alpha } from '@theme-ui/color'
import React, { ChangeEvent, SFC } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'react-feather'
import FocusLock from 'react-focus-lock'
import { useHotkeys } from 'react-hotkeys-hook'
import { animated, useSpring } from 'react-spring'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Label,
  Radio,
  Select,
  useColorMode,
} from 'theme-ui'

const ABox = animated(Box)

export const Sidebar: SFC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [colorMode, setColorMode] = useColorMode()
  useHotkeys('esc', onClose)
  const isOther = colorMode !== 'default' && colorMode !== 'dark'
  const { t } = useSpring({
    t: isOpen ? 1 : 0,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const value = e.target.value
    setColorMode(value === 'other' ? 'nightOwl' : value)
  }

  if (typeof window === 'undefined') {
    return null
  }

  return createPortal(
    <FocusLock disabled={!isOpen} returnFocus>
      {isOpen && (
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
      )}
      <ABox
        sx={{
          position: 'fixed',
          minWidth: '300px',
          width: '20vw',
          top: 0,
          bottom: 0,
          right: 0,
          bg: 'muted',
          p: 4,
          borderLeft: '2px solid black',
          borderColor: 'border',
          boxShadow:
            '0 1px 4px rgba(0,0,0,0.09),0 3px 8px rgba(0,0,0,0.09),0 4px 13px rgba(0,0,0,0.13)',
          zIndex: 4,
        }}
        style={{
          transform: t.interpolate(
            (t) => `translate3d(${(1 - t) * 120}%, 0, 0)`
          ),
        }}
      >
        <Flex
          sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 4 }}
        >
          <Heading>Theme</Heading>

          <IconButton variant="iconSmall" onClick={onClose}>
            <X width="20px" />
          </IconButton>
        </Flex>
        <Box as="form">
          <Label>
            <Radio
              name="colorMode"
              value="default"
              checked={colorMode === 'default'}
              onChange={handleChange}
            />
            Light
          </Label>
          <Label>
            <Radio
              name="colorMode"
              value="dark"
              checked={colorMode === 'dark'}
              onChange={handleChange}
            />
            Dark
          </Label>
          <Label>
            <Radio
              name="colorMode"
              value="other"
              checked={isOther}
              onChange={handleChange}
            />
            Other ✨
          </Label>
          {isOther && (
            <Select
              name="colorModeSelect"
              sx={{ my: 4 }}
              onChange={handleChange}
              value={colorMode}
            >
              <optgroup label="Dark">
                <option value="nightOwl">Night Owl</option>
                <option value="materialDark">Material Dark</option>
              </optgroup>

              <optgroup label="Light">
                <option value="materialLight">Material</option>
                <option value="github">GitHub</option>
              </optgroup>
            </Select>
          )}
        </Box>
      </ABox>
      <ABox
        onClick={onClose}
        sx={{
          position: 'fixed',
          zIndex: isOpen ? 3 : -100,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: alpha('background', 0.05),
          backdropFilter: 'blur(5px)',
        }}
        style={{ opacity: t }}
      ></ABox>
    </FocusLock>,
    document.body
  )
}
