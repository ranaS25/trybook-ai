import React from 'react'

const CustomButton = ({ text}) => {
  return (
    <button className="py-3 px-6 bg-accentColor mt-4 hover:-translate-y-1 transition-transform duration-75" type='button'>{ text }</button>
  )
}

export default CustomButton