import React from 'react'

const NavLinks = () => {
  return (
    <>
      <ul className='items-center font-bold'>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavLinks