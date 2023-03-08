import React from 'react'
import style from './Ship.css'
import shipImage from './ShipImage/map.png'


function Ship() {
  return (
    <section className='shiping'>
      <div className='container'>
        <div className='shiping-content'>
            <div className='free-ship'>
                <h1 className='ship-title'>Fast Shipping Worldwide</h1>
                <p className='ship-des'>
                Big Apple Buddy is a shopping service based in 
                New York. We're here to help you buy products from
                 the USA that you can't get in your own country. Our
                  service will help you source items from the USA and
                   ship them to your international address. We've 
                   partnered with FedEx and DHL to offer fast and 
                   reliable shipping to over 100 
                countries worldwide. Some of the countries we ship
                 to can be found below.
                </p>
            </div>
            <div className='shipping-control'>
                <div className='ship-map'>
                    <img src={shipImage} />
                </div>
                <ul className='country-list'>
                    <li className='list-name'>Australia</li>
                    <li className='list-name'>Austria</li>
                    <li className='list-name'>Bahrain</li>
                    <li className='list-name'>Belgium</li>
                    <li className='list-name'>Brunei</li>
                    <li className='list-name'>Bulgaria</li>
                    <li className='list-name'>Canada</li>
                    <li className='list-name'>Croatia</li>
                    <li className='list-name'>Czech</li>
                    <li className='list-name'>Republic</li>
                    <li className='list-name'>Denmark</li>
                    <li className='list-name'>Estonia</li>
                    <li className='list-name'>Finland</li>
                    <li className='list-name'>France</li>
                    <li className='list-name'>Germany</li>
                    <li className='list-name'>Greece</li>
                    <li className='list-name'>Hong Kong</li>
                    <li className='list-name'>Hungary</li>
                    <li className='list-name'>Iceland</li>
                    <li className='list-name'>Ireland</li>
                    <li className='list-name'>Israel</li>
                    <li className='list-name'>Italy</li>
                    <li className='list-name'>Kuwait</li>
                    <li className='list-name'>Latvia</li>
                    <li className='list-name'>Liechtenstein</li>
                    <li className='list-name'>Lithuania</li>
                    <li className='list-name'>Luxembourg</li>
                    <li className='list-name'>Malaysia</li>
                    <li className='list-name'>Montenegro</li>
                    <li className='list-name'>Netherlands</li>
                    <li className='list-name'>New Zealand</li>
                    <li className='list-name'>Norway</li>
                    <li className='list-name'>Oman</li>
                    <li className='list-name'>Poland</li>
                    <li className='list-name'>Portugal</li>
                    <li className='list-name'>Qatar</li>
                    <li className='list-name'>Romania</li>
                    <li className='list-name'>Saudi Arabia</li>
                    <li className='list-name'>Serbia</li>
                    <li className='list-name'>Singapore</li>
                    <li className='list-name'>Slovak Republic</li>
                    <li className='list-name'>Slovenia</li>
                    <li className='list-name'>South Africa</li>
                    <li className='list-name'>Spain</li>
                    <li className='list-name'>Sweden</li>
                    <li className='list-name'>Switzerland</li>
                    <li className='list-name'>Taiwan</li>
                    <li className='list-name'>Thailand</li>
                    <li className='list-name'>United Aaba Emirates</li>
                    <li className='list-name'>United Kingdom</li>
                    
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Ship
