import React from 'react'
import card from './Card.css'

function Card() {
  return (
    <section className='card'>
      <div className='container'>
        <div className='card-content'>
            <div className='single-card'>
                <h1>1</h1>
                <h3 className='card-title'>PLACE AN ORDER</h3>
                <p className='card-des'>Browse our catalog and
                place an order. Can’t find
                what you’re looking for? 
                Get a custom quote <a className='here' href='#'>here</a>.</p>
            </div>
            <div className='single-card'>
                <h1>2</h1>
                <h3 className='card-title'>WE BUY & SHIP</h3>
                <p className='card-des'>We buy your products from a reputable U.S. online 
                store and ship it to your international location</p>
            </div>
            <div className='single-card'>
                <h1>3</h1>
                <h3 className='card-title'>YOU ENJOY</h3>
                <p className='card-des'>Receive your products in
                 as little as 2 business days. It's that easy!</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Card
