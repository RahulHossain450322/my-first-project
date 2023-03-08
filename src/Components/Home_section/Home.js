import React from 'react'
import style from './Home.css'
import home from './HomeImage/NVIDIA+Graphics+Card.png'

import tech_1 from './New In Tech/6519938_sd.jpg'
import tech_2 from './New In Tech/6519336_sd.jpg'
import tech_3 from './New In Tech/6521698_sd.jpg'
import tech_4 from './New In Tech/6519936_sd.jpg'

import popular_1 from './Popular/6521705_sd.jpg'
import popular_2 from './Popular/6339707_sa.jpg'
import popular_3 from './Popular/6520136_rd.jpg'
import popular_4 from './Popular/6521705_sd.jpg'


function Home() {
  return (
    <section className='home'>
      <div className='container'>
        <div className='home-content'>
            <div className='home-image'>
                <img src={home} />
            </div>

            <div className='all-products'>
            {/* homeTech starts here */}
                <div className='home-tech'>
                    <div className='newTech'>
                        <h1 className='newTech_title'>New In Tech</h1>
                        <hr className='techLineThrouh' />
                    </div>
                    <div className='homeTech_details'>

                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={tech_1} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL 7 PRO 512 GB</p>
                            <p className='tech-info'>(UNLOCKED)-SNOW</p>
                            <div className='price-section'>
                                <button type='button' className='price-btn'>SALE</button>
                                <span className='price'>$749.00</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={tech_2} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>APPLE</a>
                            <p className='tech-info'>HOMEPOD (2ND</p>
                            <p className='tech-info'>GENERATION) SMART...</p>
                            <div className='price-section'>
                                <span className='price'>$299.99</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={tech_3} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL WATCH BLACK </p>
                            <p className='tech-info'>STAILNESS STEEL...</p>
                            <div className='price-section'>
                                <span className='price'>$399.99</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={tech_4} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL 7 PRO 256 GB (UNLOCKED)-</p>
                            <p className='tech-info'>LEMONGRASS</p>
                            <div className='price-section'>
                                <button type='button' className='price-btn'>SALE</button>
                                <span className='price'>$499.00</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* homeTech ends here */}

                {/* popularTech starts here */}
                <div className='home-tech'>
                    <div className='newTech'>
                        <h1 className='newTech_title'>Popular Tech Products</h1>
                        <hr className='techLineThrouh' />
                    </div>
                    <div className='homeTech_details'>

                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={popular_1} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL 7 PRO 512 GB</p>
                            <p className='tech-info'>(UNLOCKED)-SNOW</p>
                            <div className='price-section'>
                                <button type='button' className='price-btn'>SALE</button>
                                <span className='price'>$749.00</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={popular_2} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>APPLE</a>
                            <p className='tech-info'>HOMEPOD (2ND</p>
                            <p className='tech-info'>GENERATION) SMART...</p>
                            <div className='price-section'>
                                <span className='price'>$299.99</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={popular_3} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL WATCH BLACK </p>
                            <p className='tech-info'>STAILNESS STEEL...</p>
                            <div className='price-section'>
                                <span className='price'>$399.99</span>
                            </div>
                        </div>
                        <div className='single-tech-card'>
                            <div className='home-product-image'>
                                <img src={popular_4} />
                                <p className='viewDetails'>VIEW DETAILS</p>
                            </div>
                            <a className='tech-link' href='#'>GOOGLE</a>
                            <p className='tech-info'>PIXEL 7 PRO 256 GB (UNLOCKED)-</p>
                            <p className='tech-info'>LEMONGRASS</p>
                            <div className='price-section'>
                                <button type='button' className='price-btn'>SALE</button>
                                <span className='price'>$499.00</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* popularTech ends here */}
            </div>


        </div>
      </div>
    </section>
  )
}

export default Home
