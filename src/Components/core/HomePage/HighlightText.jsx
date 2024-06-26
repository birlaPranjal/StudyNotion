import React from 'react'

const HighlightText = ({text}) => {
  return (
    // TODO: text color gradient
    <span className=' font-bold text-[#20BDFF]'>
        {text}
    </span>
  )
}

export default HighlightText