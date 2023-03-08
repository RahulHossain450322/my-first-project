import React, { useState } from 'react'

import logo from './hImage/logo-black.png'
import { IoMdSearch ,IoIosCart,IoIosMenu} from "react-icons/io";
import style from './Header.css'

import ResStyle from '../MenuList/Responsive.css';
import Responsive from '../MenuList/Responsive';



function Header() {
  const [toggle,setToggle] = useState(false)
  
  const handleToggle=()=>{
    setToggle(!toggle)
  }

  return (
    <header className='header-section'>
      <div className='container'>

        <div className='header'>

            <div className='header-image'>
                <IoIosMenu className='nav' onClick={handleToggle}/>
                <img className='logo' src={logo}  />
            </div>

            <div className='form-section'>
                <input type='text' className='input' placeholder='search a product' />
                <button type='button' className='searchBtn'>
                    <a href='#' className='search-icon'>
                    <IoMdSearch />
                    </a>
                </button>
            </div>

            <div className='cart-section'>
                <button type='button' className='cartBtn'>
                    <a href='#' className='cart-icon'>
                    <IoIosCart />
                    </a>
                </button>
            </div>
        </div>
      </div>
      
      {toggle && <Responsive />}

    </header>
  )
}

export default Header
