import React, { useState } from 'react'
import { NAV_ITEMS } from '../data/constants'
import ToggleButton from './ui/ToggleButton'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkModeChange = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode);

  }

  return (
    <>
    <header className="w-full flex justify-center py-12 bg-primaryColor text-4xl  font-bold text-center text-white">Book Generator API</header>
      <nav className="bg-sectionBackground-light dark:bg-sectionBackground w-full">
        <ul className='flex flex-col md:flex-row gap-5 mx-auto justify-center py-5 font-semibold text-text-light dark:text-textColor'>

          {
            NAV_ITEMS.map((item, index) => {
              return <li key={ index} className=" text-center"><a href={`#${item}` } className="hover:text-blue-500 cursor-pointer">{item.toUpperCase()}</a></li>
            })
          }
          <li className=" text-center"><ToggleButton darkMode={darkMode} handleChange={handleDarkModeChange}/></li>
        </ul>
    </nav>
    </>
  )
}

export default Header