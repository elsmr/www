import React, { useEffect, useRef, useState } from 'react'
import { SVGBox, SVGBoxProps } from './util'

export const Profile = React.forwardRef<SVGSVGElement, SVGBoxProps>(
  (props, ref) => {
    const [wink, setWink] = useState(false)
    const timeoutId = useRef(null)
    const doWink = () => {
      clearTimeout(timeoutId.current)
      setWink(true)
      timeoutId.current = setTimeout(
        () => requestAnimationFrame(() => setWink(false)),
        400
      )
    }

    useEffect(() => {
      const timeoutId = setTimeout(doWink, 20000)
      return () => clearTimeout(timeoutId)
    }, [])

    return (
      <SVGBox
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79 112"
        fill="none"
        focusable="false"
        role="img"
        aria-labelledby="profile-title"
        ref={ref}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        cursor="pointer"
        onClick={doWink}
        {...props}
      >
        <title id="profile-title">
          Handdrawn profile picture of Elias Meire
        </title>
        <g id="profile-eyes">
          <path
            fill="currentColor"
            d="M18.5,45.21a1,1 0 1,0 2,0a1,1 0 1,0 -2,0"
          />
          {!wink ? (
            <path
              fill="currentColor"
              d="M40.5,46.21a1,1 0 1,0 2,0a1,1 0 1,0 -2,0"
            />
          ) : (
            <path d="M39 47s1.01-.99 2.5-1a2.88 2.88 0 012.5 1.5" />
          )}
        </g>
        <path d="M30.04 43.71a22.5 22.5 0 01-.5 3.5c-.3 1.4-.33 2.25-1 3.5-.59 1.1-1.16 1.58-2 2.5-.74.82-1.5 1.02-2 2-.37.72-.64 1.21-.5 2 .25 1.39 1.18 1.51 2.5 2 .93.35 2 .42 3 .5" />
        <path d="M38.53 39.3c3.45.7 8.82.64 10.62 4.25M13.5 41.71c2.82-2.97 6.73-2.5 10.5-2.5M55.5 86.21c8.5.5 12.5 3 21.5 2.5" />
        <path d="M16 88.21s-2.1.96-3.5 2c-1.66 1.25-2.76 2.06-3.5 4-.9 2.38-.15 4.04.5 6.5.6 2.29.95 3.73 2.5 5.5 1.9 2.18 3.7 2.83 6.5 3.5 3.23.79 5.19-.17 8.5-.5 5.91-.57 9.52-.2 15-2.5 2.9-1.21 4.9-1.65 7-4 .94-1.04 1.23-1.81 2-3 1-1.54 1.66-2.36 2.5-4 .96-1.87 1.57-2.94 2-5 .77-3.65-.96-5.77-1-9.5-.04-4.11.18-6.46 1-10.5" />
        <path d="M15 80.21a34.7 34.7 0 011.5 10c.07 2.74-.04 4.3-.5 7" />
        <path d="M16 88.21a44.93 44.93 0 00-10.5 6 20.02 20.02 0 00-4.5 5" />
        <path d="M56.5 68.21a45.59 45.59 0 01-2 4 38.67 38.67 0 01-3.5 5.5 30.2 30.2 0 01-4 4.5 28.37 28.37 0 01-4.5 3.5c-1.99 1.3-4.12 2.59-6.5 3-2.12.37-3.34-.06-5.5 0-2.37.08-3.67.96-6 .5-2.87-.56-3.96-2.4-6-4.5-1.85-1.9-2.6-3.24-4-5.5-1.85-2.96-3-4.65-4-8-.62-2.09-.6-3.35-1-5.5" />
        <path d="M56.5 66.71c.3.83 1.1 3.2 2 3.5 1.1.37 1.9-.27 2.5-1.21 1-1.59-.06-3.11.5-4.79.34-1.02 1-2.41 1-3.5 0-.71-.07-1.53-.5-2.21-.48-.76-1.68-1.28-2.5-.79-.69.42-.3 1.22-.5 2" />
        <path d="M59 59.71c-.28-1.97-.5-3.07-1-5-.62-2.39-1.5-3.58-2-6-.6-2.87.11-4.62-.5-7.5-.3-1.39-.67-2.11-1-3.5-.23-.97.2-1.8-.5-2.5s-1.52-.3-2.5-.5c-3.72-.75-6.03-.46-9.5-2a21.84 21.84 0 01-5-3c-2.43-1.82-5.5-5.5-5.5-5.5-.98-.97-1.17-2.14-2.5-2.5-1.37-.36-2.13.63-3.5 1-2.33.64-3.88.35-6 1.5-1.82 1-2.63 1.95-4 3.5-1.4 1.59-1.93 2.68-3 4.5-1.33 2.26-2.3 3.48-3 6-.74 2.64-.37 4.27-.5 7-.38 8-2 3.5.5 20.5" />
        <path d="M21.5 71.21c3.28-.56 5.18-.67 8.5-.5 2.59.14 5.1.47 7.5 1.5M18 67s16-4.79 24-.29c0 0-1.2 2.7-2.5 4-1.72 1.75-3.14 2.35-5.5 3a12.6 12.6 0 01-7.5 0c-1.86-.48-2.92-.9-4.5-2-2.28-1.58-4-4.71-4-4.71z" />
        <path
          id="profile-mouth"
          fill="currentColor"
          d="M26.5 70.5c-1.49 0-5 .5-5 .5s3.85 2.78 6.5 3c2.15.18 5 .31 7-.5 1.05-.43 2.5-1.5 2.5-1.5s-6.5-1.5-11-1.5z"
        />
        <g id="profile-hair">
          <path
            strokeWidth="2"
            d="M29 19.5S22.22 26.75 17.5 31c-4.85 4.37-13 10.5-13 10.5"
          />
          <path
            strokeWidth="3"
            d="M31 11.7C38 14 51.5 24 54 28.5c3.57 6.42 8 27.5 8 27.5"
          />
          <path
            strokeWidth="2"
            d="M5 30s6.8-14.06 14.34-19.5C28.48 3.9 47 4 47 4M15.5 24s-6.53 11.08-8 19C5.83 52.04 9 66.5 9 66.5"
          />
          <path
            strokeWidth="3"
            d="M30 19.5s5.78 8.13 11 11.5m0 0c6.49 4.2 18 2.5 18 2.5-.4 1.2-11.83-.17-18-2.5zM13 21.5s9.88-11.08 18.5-13C41.07 6.37 56 14 56 14"
          />
          <path
            strokeWidth="2"
            d="M61.5 19.5s3.59 14.04 3.5 23c-.07 6.93-2 17-2 17M5 34.5s-2.9-8.87.5-15.5C7.79 14.53 13 9.5 13 9.5s3.25-2.95 6.5-4.5C22.64 3.5 30 3.5 30 3.5"
          />
          <path d="M4 55s1.46-26.57 13.5-32c2.6-1.17 7-2 7-2M35 17s5.5 2.17 10 6 13.5 14.5 13.5 14.5.67 13.33 1 18.5" />
          <path d="M3 50.5s1.77-16.88 6.5-26c2.27-4.37 3.43-7.1 7-10.5 3.18-3.03 5.5-4.22 9.5-6 9.3-4.14 26-2 26-2" />
          <path d="M27 24c.4.4 10.83 3.5 16 5s15 2 15 2" />
          <path
            strokeWidth="3"
            d="M8.5 31s4.79-8.83 10-12c4.17-2.54 12-3.5 12-3.5"
          />
          <path
            strokeWidth="2"
            d="M33.5 10.5s14.1 2.65 22 7C59.44 19.67 65 24 65 24M30 16.36s11.7 8.32 20.3 11c4.3 1.33 11.27 2.33 11.27 2.33"
          />
          <path d="M61.6 15.92S46.9 11.16 38 10.04c-4.43-.57-11-.68-11-.68" />
          <path
            strokeWidth="2"
            d="M38.5 19.5c-6.9-1.69-11.83-1-18 2.5-3.97 2.25-5.93 4.23-8.5 8-4.19 6.14-2.71 11.28-4.5 18.5L5 58.5"
          />
          <path d="M4.5 38S4.76 25.78 7 18.5c1.16-3.76 1.5-7 1.5-7" />
          <path
            strokeWidth="2"
            d="M5.5 22.5S9.87 14.92 14 11c7.08-6.73 23-8 23-8m1 10s8.03 6.16 14 9c5.19 2.46 13 5.5 13 5.5"
          />
          <path d="M49.5 6s3.55 1.53 5.5 3c2.88 2.17 4.15 3.9 6 7 1.2 2.03 2.9 1.4 2.5 5.5l-1 10.5c-.4 4.1-5 14.5-5 14.5" />
          <path
            strokeWidth="2"
            d="M63 33.5s-5.2 4.85-6 9c-.64 3.28.4 5.21 1 8.5.46 2.56 1.5 6.5 1.5 6.5"
          />
          <path
            strokeWidth="2"
            d="M33.62 20.7c.8.41 5.92 4.6 8.38 6.65 2.46 2.05 11.85-3.8 18 0 2.7 1.68 5.5 7.65 5.5 7.65"
          />
          <path
            strokeWidth="3"
            d="M19 12s8.28 3.43 13.82 4.77c6.47 1.56 10.26 1.77 16.9 2.12 4.79.25 12.28 0 12.28 0"
          />
          <path
            strokeWidth="2"
            d="M4 46.5s3.23-7.13 3.5-12c.15-2.74-.55-4.26-.5-7 .11-6.2 3.5-15.5 3.5-15.5M23.5 22.5s-4.6 3.97-7 7c-2.29 2.89-5 8-5 8M27 14s12.56 3.25 20.68 2.98C53.31 16.8 62 14.75 62 14.75"
          />
          <path
            strokeWidth="2"
            d="M23 10s3.93 1.92 6.65 2.78C40.39 16.18 59 11.4 59 11.4M61.5 42c-.7-4.31-2-11-2-11l2 11zm0 0c.66 4.09 1.5 10.5 1.5 10.5L61.5 42z"
          />
          <path
            strokeWidth="2"
            d="M62.71 41.26C63.51 36.85 65 30 65 30l-2.29 11.26zm0 0A413.2 413.2 0 0061 52l1.71-10.74zM25 21.5s2.75 2.06 3.5 3.5c1.43 2.75 3.08 2.73 5.5 3.76 6 2.57 9.9-.46 16.15.71C54.85 30.35 62 33 62 33"
          />
          <path d="M36.5 29.5s5.07 4.19 8.5 6c4.23 2.24 13.5 2.5 13.5 2.5" />
          <path
            strokeWidth="3"
            d="M10 18.9s3.68-4.01 6.5-6c9.08-6.4 17.03-6.74 28-5 4.64.73 11.5 3.5 11.5 3.5"
          />
          <path
            strokeWidth="3"
            d="M42.5 11.5s1.94 2.91 3.5 4.5c3.08 3.13 5.37 4.52 9.5 6 3 1.07 8 1.5 8 1.5"
          />
          <path d="M5.5 52s1.5-1.48 1-2.5c-3.2-6.55-2.95-11.83 0-18.5 1.5-3.37 3.17-4.8 5-8 3.12-5.46 7-14.5 7-14.5" />
          <path d="M5.94 52a3.77 3.77 0 000-3.5c-.3-.65-.74-.88-1.1-1.5-2.14-3.66.41-19.4 1.1-23.5.9-5.34 2.82-9.51 4.06-12 1.36-2.71 3-4 3-4" />
          <path
            strokeWidth="2"
            d="M29 22c0 .8 1.5 3.5 1.5 3.5s5.13 1.68 8.5 1.5c3.46-.18 5.06-2.1 8.5-2.5 5.7-.66 9.1 4.47 14.5 2.5 1.23-.45 3-1.5 3-1.5M14 30.5c2.25-3.85 3.46-6.04 5.5-10 1-1.94 2.1-2.85 2.5-5 .55-2.94-1.5-7.5-1.5-7.5M44.5 34a31.5 31.5 0 009.5 2.5c3.49.43 5.69-1.17 9 0 1.24.44 3 1.5 3 1.5M40 21s12.87 4.53 18.5 0c1.95-1.57 4-5 4-5"
          />
          <path d="M39 20.5c.99 0 8.87 14.09 15.24 13.74C60.62 33.9 66 49 66 49" />
          <path
            strokeWidth="2"
            d="M60 57s2.9-6.22 3.5-10.5c.88-6.23-5.6-10.33-2-15.5.95-1.36 3-3.5 3-3.5"
          />
          <path d="M7 62s-1.55-6.09-1.5-9.5c.04-3.22.59-4.8 1-8 .7-5.44-1-14-1-14" />
          <path
            strokeWidth="2"
            d="M59.5 13s-3.01 1.06-5.5 2c-6.3 2.37-8.32 7.65-15 8.5-6.39.81-16-4-16-4"
          />
          <path
            strokeWidth="2"
            d="M5 54.5s-.7-3.03-1-5c-1.46-9.47.08-20.2 1.5-24.5 2.07-6.27 5.2 3 9.5-1s12.5-6.5 12.5-6.5"
          />
          <path d="M54.5 43.5s.92-3.06 1.5-4c2.17-3.48-1.92-4.8-4.5-8-3.37-4.17-6.86-4.82-11.5-7.5-3.25-1.88-8.5-4.5-8.5-4.5M64.5 21.5c-2.23-1.86-4.43-2.96-6.5-5-3.35-3.3-2.85-6.8-7-9-2.68-1.42-8.5-1-8.5-1" />
          <path d="M60.5 17A53.56 53.56 0 0045 12.5c-7.33-1.13-12.76-4.02-19 0-5.15 3.32-4.63 8.38-8 13.5-2.24 3.4-4.48 4.73-6 8.5-.9 2.24-1.5 6-1.5 6" />
          <path d="M26.73 21.78s-3.97 1.83-6.33 1.01c-3.13-1.08-2.56-3.96-3.17-7.1-.34-1.75-2.8-1.9-2.1-3.55 1.22-2.87 5.64-3 8.43-4.56C27.02 5.65 32 2 32 2" />
          <path d="M55 44s.66-1.81 1-3c1.2-4.17 2.41-6.76 1.5-11-.59-2.73-2.8-3.71-3-6.5-.33-4.54 6-10 6-10" />
        </g>
      </SVGBox>
    )
  }
)