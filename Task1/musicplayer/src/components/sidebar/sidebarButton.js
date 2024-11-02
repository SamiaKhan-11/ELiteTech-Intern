import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'

const SidebarButton = (props) => {
    const location = useLocation();

    const isActive = location.pathname === props.to;

    const btnClass = isActive ? "bg-orange-200 text-white scale-110" :"bg-transparent text-gray-200 hover:text-white";
  return (
    <Link to={props.to} >
     <div   
     className={`h-24 p-3 rounded-lg flex flex-col items-center justify-center m-1 transition-all duration-300 ease-in-out  ${btnClass}`}>
        <IconContext.Provider value={{ size: '35px', className: "btn-icon" }}>
        {props.icon}
        <p className='m-2 font-semibold text-sm'> {props.title} </p>
        </IconContext.Provider>
    </div>
    </Link>
   
  )
}

export default SidebarButton