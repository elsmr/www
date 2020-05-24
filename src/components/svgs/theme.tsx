import React from 'react'
import { SVGBox, SVGBoxProps } from './util'

export const Theme = React.forwardRef<SVGSVGElement, SVGBoxProps>(
  (props, ref) => (
    <SVGBox
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 20"
      focusable="false"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.66 5.66L8 0 2.34 5.66c-3.12 3.12-3.12 8.19 0 11.31A7.978 7.978 0 008 19.31c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM8 17.32c-1.6 0-3.11-.62-4.24-1.76A5.945 5.945 0 012 11.32c0-1.6.62-3.11 1.76-4.24L8 2.83v14.49z"
      />
    </SVGBox>
  )
)
