import React from 'react'
import style from './Shop.css'

import Tech from './ShopImage/Department_Tech.png'
import Beauty from './ShopImage/Department_Beauty.png'
import Outdoor from './ShopImage/Department_Outdoors.png'
import Health from './ShopImage/Department_Health.png'
import Fitness from './ShopImage/Department_Fitness.png'
import Fashion from './ShopImage/Department_Fashion.png'

function Shop() {
  return (
    <section className='shop'>
      <div className='container'>
        <div className=''>
          <h2 className='shop-title'>Shop Departments</h2>
        </div>
        <hr className='shop-margin'/>
        <div className='shop-items'>

          <div className='single-shop'>
            <img src={Tech} />
          </div>
          <div className='single-shop'>
            <img src={Beauty} />
          </div>
          <div className='single-shop'>
            <img src={Outdoor} />
          </div>
          <div className='single-shop'>
            <img src={Health} />
          </div>
          <div className='single-shop'>
            <img src={Fitness} />
          </div>
          <div className='single-shop'>
            <img src={Fashion} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Shop
