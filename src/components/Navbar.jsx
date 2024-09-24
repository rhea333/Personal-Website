import React from 'react'
import {appleImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5">
        <nav className="flex justify-between items-center mx-auto screen-max-width">
         {/* <img src = {appleImg} alt="Apple" width={14} height={18} />   */}
        </nav>

        
      <div className="flex justify-center max-sm:hidden">
        {navLists.map((nav, i) => (
          <a 
            key={nav} 
            href={`#${nav.toLowerCase().replace(/\s+/g, '-')}`} 
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            {nav}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar