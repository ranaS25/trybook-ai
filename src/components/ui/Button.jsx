import React from 'react'

const CustomButton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}
      className=" py-3 px-6 bg-accent rounded text-background text-base font-semibold mt-4 hover:-translate-y-1 transition-transform duration-75" type='button'>{text}</button>
  )
}

export default CustomButton