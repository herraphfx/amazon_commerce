import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import Sidelink from './Sidelink'

function Header() {
  return (
    <nav className='header'>
        <Link to='/'>
        <img 
        className='header__logo' 
        src='/images.png'
         />
        </Link>
        <div className='header__search' >
        <input type='text' className="header_searchInput" />
        <SearchIcon className='header_searchIcon' />
        </div>
     
     <div className='header__nav'>
      <Sidelink />
     </div>
       
    </nav>
  )
}

export default Header