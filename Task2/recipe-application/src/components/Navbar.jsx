import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
         <nav className="absolute top-6 left-6 flex space-x-8 text-gray-800 font-medium">
          <a href="#menu" className="hover:text-green-600">
            Menu
          </a>
          <a href="#lunch-boxes" className="hover:text-green-600">
            Lunch Boxes
          </a>
          <a href="#platters" className="hover:text-green-600">
            Platters
          </a>
          <a href="#specials" className="hover:text-green-600">
            Specials
          </a>
        </nav>
    </div>
  )
}

export default Navbar