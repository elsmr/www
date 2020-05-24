import React from 'react'
import { SVGBox, SVGBoxProps } from './util'

export const Blob1 = React.forwardRef<SVGSVGElement, SVGBoxProps>(
  (props, ref) => (
    <SVGBox
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      ref={ref}
      as="svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M141.6 54.3c14.1 8 28.7 19.4 35.5 35.5 6.9 16.1 6.1 36.9-4.7 48.8-10.7 11.9-31.3 14.8-49.7 19.8-18.5 5.1-34.8 12.3-50.5 10-15.7-2.3-31-14-38.1-29-7.1-15.1-6.1-33.5-2.7-51.3 3.4-17.8 9.1-35 20.9-43.4 11.9-8.4 29.8-8.1 45.6-5.6s29.6 7.1 43.7 15.2z"
      />
    </SVGBox>
  )
)

export const Blob2 = React.forwardRef<SVGSVGElement, SVGBoxProps>(
  (props, ref) => (
    <SVGBox
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      as="svg"
      viewBox="0 0 200 200"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M138.7 43.1C150.1 55 159.1 66.4 167 80.6c7.9 14.2 14.6 31.1 12.6 47.7-2.1 16.5-12.9 32.5-27.6 43.1-14.7 10.6-33.4 15.6-49.2 11.8-15.8-3.9-28.9-16.6-43.9-27.1-15.1-10.4-32.1-18.6-41.1-32.6s-9.9-33.9-3.3-50.4c6.6-16.5 20.7-29.7 36.2-40.2 15.5-10.6 32.4-18.5 47.7-16.3 15.3 2.2 28.9 14.6 40.3 26.5z"
      />
    </SVGBox>
  )
)
