import React from 'react'

const SvgRun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <path
      fill="#3B88C3"
      d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"
    />
    <path fill="#FFF" d="M8 7l22 11L8 29z" />
  </svg>
)

export default SvgRun