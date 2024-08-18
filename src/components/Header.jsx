import React from 'react'
import { NAV_ITEMS } from '../data/constants'

const Header = () => {
  

  return (
    <>
    <header className="w-full flex justify-center py-12 bg-indigo-500 text-4xl  font-bold text-center">Book Generator API</header>
      <nav>
        <ul className='flex flex-col md:flex-row gap-5 mx-auto justify-center py-5 font-semibold bg-gray-700'>

          {
            NAV_ITEMS.map((item, index) => {
              return <li tabIndex={0} key={ index} className="hover:text-blue-500 cursor-pointer text-center"><a href={`#${item}`}>{item.toUpperCase()}</a></li>
            })
          }

        </ul>
    </nav>
    </>
  )
}

export default Header