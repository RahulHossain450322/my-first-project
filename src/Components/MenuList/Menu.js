import React from 'react'
import menu from './Menu.css'

function Menu() {
  return (
    <main className='main'>
      <div className='container'>
        <div className='menu-list'>
            <ul className='list'>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        Our service
                    </a>
                </li>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        Categories
                    </a>
                </li>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        Brands
                    </a>
                </li>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        Top sales
                    </a>
                </li>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        New releases
                    </a>
                </li>
                <li className='menu-item'>
                    <a href='#' className='menu-link'>
                        get a quote
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Menu
