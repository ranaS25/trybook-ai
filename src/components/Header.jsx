import React from 'react'
import { NAV_ITEMS } from '../data/constants'

const Header = () => {
  

  return (
    <>
    <header className="w-full flex justify-center py-12 bg-primaryColor text-4xl  font-bold text-center text-white">Book Generator API</header>
      <nav className="bg-sectionBackground">
        <ul className='flex flex-col md:flex-row gap-5 mx-auto justify-center py-5 font-semibold '>

          {
            NAV_ITEMS.map((item, index) => {
              return <li key={ index} className="hover:text-blue-500 cursor-pointer text-center"><a href={`#${item}`}>{item.toUpperCase()}</a></li>
            })
          }

        </ul>
    </nav>
    </>
  )
}

export default Header