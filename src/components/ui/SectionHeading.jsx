import React from 'react'

const SectionHeading = ({heading}) => {
  return (
    <h2 className="mt-8 text-secondary-light dark:text-secondaryColor" id={heading}>{heading}</h2>
  )
}

export default SectionHeading