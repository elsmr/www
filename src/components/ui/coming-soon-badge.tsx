import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { Badge } from 'theme-ui'

function usePager<T>(values: T[], interval = 1000): T {
  let [index, setIndex] = useState(0)
  useEffect(() => {
    let id = setInterval(
      () => setIndex((index) => (index >= values.length - 1 ? 0 : index + 1)),
      interval
    )
    return () => clearInterval(id)
  }, [interval])

  return values[index]
}

const copy = ['coming soon', 'coming soonish', 'maybe someday']

export const ComingSoonBadge = () => {
  const value = usePager(copy, 5000)
  const transitions = useTransition(value, (item) => item, {
    from: { opacity: 0, transform: 'translate3d(-40%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-40%,0,0)' },
  })

  return (
    <Badge
      variant="primary"
      sx={{
        position: 'absolute',
        left: '24px',
        width: '110px',
        height: '24px',
        alignItems: 'center',
        display: 'flex',
        overflow: 'hidden',
        transform: 'rotate(8deg)',
        transformOrigin: 'left left',
        backfaceVisibility: 'hidden',
        top: -1,
      }}
    >
      {transitions.map(({ item, key, props: animatedProps }) => (
        <animated.div
          key={key}
          style={{
            ...animatedProps,
            position: 'absolute',
            left: '50%',
            backfaceVisibility: 'hidden',
          }}
        >
          {item}
        </animated.div>
      ))}
    </Badge>
  )
}
