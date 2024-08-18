import React from 'react'

const SectionHeading = ({heading}) => {
  return (
    <h2 className="mt-8 text-indigo-400/80" id={heading}>{heading}</h2>
  )
}

export default SectionHeading