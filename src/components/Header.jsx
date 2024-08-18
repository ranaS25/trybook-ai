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
    <header className="w-full flex justify-center py-12 bg-primary text-4xl  font-bold text-center text-white">Book Generator API</header>
      <nav className="bg-sectionBackground-light dark:bg-sectionBackground w-full">
        
        
        
        <ul className='flex flex-col lg:flex-row gap-5 mx-auto justify-center py-5  text-text-light dark:text-text uppercase' >

          {
            NAV_ITEMS.map((item, index) => {
              return <li key={ index} className=" text-center"><a href={`#${item.id}`}  className="font-medium hover:text-primary-light transition-colors  hover:dark:text-primary cursor-pointer">{item.heading}</a></li>
            })
          }
          <li className=" text-center font-inter font-medium hover:text-primary-light dark:hover:text-primary"><ToggleButton darkMode={darkMode} handleChange={handleDarkModeChange}/></li>
        </ul>
    </nav>
    </>
  )
}

export default Header