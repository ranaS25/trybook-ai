import React from 'react'
import SectionHeading from '../ui/SectionHeading'
import SectionText from '../ui/SectionText'

const Overview = (props) => {
  const {heading, description} = props
  return (
    <>
      <SectionHeading heading={heading} />
      <SectionText content={description} />
    </>
  )
}

export default Overview