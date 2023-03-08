import React from 'react'
import style from './Banner.css'

import image from './bannerImage/download (1).jpg'

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-content'>

            <div className='banner-container-title'>
                <h1 className='banner-title'>Shop u.s stores</h1>
            </div>
            <ul className='banner-list'>
                <li className='banner-list-item'>Google</li>
                <li className='banner-list-item'>Microsoft</li>
                <li className='banner-list-item'>Magic leaf</li>
                <li className='banner-list-item'>Shephoraa</li>
                <li className='banner-list-item'>Coach</li>
                <li className='banner-list-item'>Sales</li>
            </ul>
            <div className='banner-des'>
                <p className='des'>Our service helps you buy anything you want from the U.S. quickly and hassle-free.<br className='br' />
Fast delivery to over 100 countries around the world.</p>
            </div>

            <div className='work'>
                <a className='workBtn' type='button'>
                    HOW IT WORKS
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
