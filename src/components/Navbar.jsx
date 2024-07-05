import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/'>
            <h1 className='logo'>LOGO</h1>
            </Link>
            <button className='uploadImage'>Upload</button>
        </nav>
    </div>
  )
}
