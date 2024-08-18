import React, { useState } from 'react'

const ToggleButton = ({ darkMode, handleChange}) => {

  return (
    <>
      <label className="cursor-pointer select-none">Dark Mode{darkMode?" On":" Off"}
      <input type='checkbox' className='ml-2 w-4 aspect-square bg-transparent  ' checked={darkMode} onChange={() => { handleChange()}} />
      </label>
      </>
  )
}

export default ToggleButton