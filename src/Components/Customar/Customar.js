import React from 'react'
import style from './Customar.css'
import customar_img from './CustomarImage/IMG20221020115622.jpg'

import { AiFillStar } from "react-icons/ai";

function Customar() {
  return (
    <section className='customar'>
      <div className='container'>
      <div className='brands_title'>
                <h1 claassName='text-danger'>Shop Popular Brands</h1>
                <hr className='hr' />
            </div>
        <div className='customar-content'>
            {/* single card starts here */}
            <div className='single_customar_card'>
                <div className='customar_details'>
                    <div className='customar-image'>
                        <img src={customar_img} />
                    </div>
                    <div className='customar_name_address'>
                        <p>Sonya</p>
                        <p>Hong</p>
                        <p>Kong</p>
                    </div>
                </div>
                <div className='customar_rating'>
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                </div>
                <div className='customar_comment'>
                    <h5>Some of the best customar service I,ve had! </h5>
                    <p className='customar_card_title'>Philips and her team were so prompt (email replies within hours) professional 
                    and most importantly.I receved exactly what I ordered,exactly when they sai...</p>
                    <a href='#' className='customaer_more'>view</a>
                </div>
            </div>
            <div className='single_customar_card'>
                <div className='customar_details'>
                    <div className='customar-image'>
                        <img src={customar_img} />
                    </div>
                    <div className='customar_name_address'>
                        <p>Sonya</p>
                        <p>Hong</p>
                        <p>Kong</p>
                    </div>
                </div>
                <div className='customar_rating'>
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                </div>
                <div className='customar_comment'>
                    <h5>Some of the best customar service I,ve had! </h5>
                    <p className='customar_card_title'>Philips and her team were so prompt (email replies within hours) professional 
                    and most importantly.I receved exactly what I ordered,exactly when they sai...</p>
                    <a href='#' className='customaer_more'>view</a>
                </div>
            </div>
            <div className='single_customar_card'>
                <div className='customar_details'>
                    <div className='customar-image'>
                        <img src={customar_img} />
                    </div>
                    <div className='customar_name_address'>
                        <p>Sonya</p>
                        <p>Hong</p>
                        <p>Kong</p>
                    </div>
                </div>
                <div className='customar_rating'>
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                </div>
                <div className='customar_comment'>
                    <h5>Some of the best customar service I,ve had! </h5>
                    <p className='customar_card_title'>Philips and her team were so prompt (email replies within hours) professional 
                    and most importantly.I receved exactly what I ordered,exactly when they sai...</p>
                    <a href='#' className='customaer_more'>view</a>
                </div>
            </div>
            <div className='single_customar_card'>
                <div className='customar_details'>
                    <div className='customar-image'>
                        <img src={customar_img} />
                    </div>
                    <div className='customar_name_address'>
                        <p>Sonya</p>
                        <p>Hong</p>
                        <p>Kong</p>
                    </div>
                </div>
                <div className='customar_rating'>
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                </div>
                <div className='customar_comment'>
                    <h5>Some of the best customar service I,ve had! </h5>
                    <p className='customar_card_title'>Philips and her team were so prompt (email replies within hours) professional 
                    and most importantly.I receved exactly what I ordered,exactly when they sai...</p>
                    <a href='#' className='customaer_more'>view</a>
                </div>
            </div>
            {/* single card starts here */}

        </div>
      </div>
    </section>
  )
}

export default Customar
