import React, { useState } from 'react'

import style from './Responsive.css'
import logo from './hImage/logo-black.png'
import { IoMdSearch ,IoIosCart,IoIosMenu} from "react-icons/io";

function Responsive() {
  
  return (
    <div className='mobile-list'>
        <div className='mobile-menu-header'>
            <IoIosMenu className='mobile-menu-icon' />
            <img className='mobile-logo-icon' src={logo} />
        </div>
        <div className='mobile-menu-list'>
            <ul className='mobile-menu-list'>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Brands
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Tech
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Fashion
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Beauty
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Health
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Fitness
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  Outdoors
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link'>
                  New Releses
                </a>
              </li>
              <hr />
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  How It Works
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  Princing
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  Testimonials
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  About Big Apple Buddy
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  FAQ
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  Blog
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  Get A Quote
                </a>
              </li>
              <li className='mobile-menu-list-item'>
                <a href='#' className='mobile-menu-list-link-small'>
                  Contact Us
                </a>
              </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Responsive
