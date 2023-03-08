import React from 'react'

import style from './SFooter.css'

import cnet from './SFImage/cnet.png'
import lifehacker from './SFImage/lifehacker.png'
import gizmodo from './SFImage/gizmodo.png'
import smh from './SFImage/smh.png'
import harpers from './SFImage/harpers.png'
import daily_mail from './SFImage/daily_mail.png'

import { BsTwitter,BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SFooter() {
  return (
    <section className='SFooter'>

      <div className='SFooter_content'>
      {/* Allimg_part_starts_here */}
        <div className='SFooter_content_photos'>
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={cnet} />
            </div>
            {/* images part-1 ends here */}
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={lifehacker} />
            </div>
            {/* images part-1 ends here */}
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={gizmodo} />
            </div>
            {/* images part-1 ends here */}
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={smh} />
            </div>
            {/* images part-1 ends here */}
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={harpers} />
            </div>
            {/* images part-1 ends here */}
            {/* images part-1 starts here */}
            <div className='images_1_part'>
                <img className='photos' src={daily_mail} />
            </div>
            {/* images part-1 ends here */}
        </div>
        {/* Allimg_part_ends_here */}
        {/* Others_parts_starts_here */}
        <div className='container'>
            <div className='others_content'>
            {/* single-Content_1_starts_here */}
                <div className='single_content_others'>
                    <h4 className='others_title'>SHOP</h4>
                    <a href='#' className='SFLink'>BAB Store</a><br />
                    <a href='#' className='SFLink'>Get A Custom Quote</a>
                </div>
                {/* single-Content_1_ends_here */}
                {/* single-Content_2_starts_here */}
                <div className='single_content_others'>
                    <h4 className='others_title'>HELP</h4>
                    <a href='#' className='SFLink'>Shipping</a><br />
                    <a href='#' className='SFLink'>Payment Methods</a><br />
                    <a href='#' className='SFLink'>Customs Duties</a><br />
                    <a href='#' className='SFLink'>Returns, Exchanges & Refunds</a><br />
                    <a href='#' className='SFLink'>FAQ</a>
                </div>
                {/* single-Content_2_ends_here */}
                {/* single-Content_3_starts_here */}
                <div className='single_content_others'>
                    <h4 className='others_title'>COMPANY</h4>
                    <a href='#' className='SFLink'>How It Works</a><br />
                    <a href='#' className='SFLink'>Pricing</a><br />
                    <a href='#' className='SFLink'>Testimonials</a><br />
                    <a href='#' className='SFLink'>About Us</a><br />
                    <a href='#' className='SFLink'>Blog</a>
                </div>
                {/* single-Content_3_ends_here */}
                {/* single-Content_3_starts_here */}
                <div className='single_content_others'>
                    <div className='doubble_content'>
                        <h4 className='others_title'>CONTACT</h4>
                        <a href='#' className='SFLink'>support@bigapplebuddy.com</a><br />
                        <p className='SFLink'>7013 13th Avenue</p><br />
                        <p className='SFLink'>Brooklyn NY 11228 USA</p>
                    </div>
                    <div className='doubble_content'>
                        <h4 className='others_title'>REPORT AN ISSUE</h4>
                        <p className='SFLink'><span className='unLine'>Tell us</span> if anything is incorrect or not working.</p>
                    </div>
                </div>
                {/* single-Content_3_ends_here */}
                {/* single-Content_4_starts_here */}
                <div className='single_content_others right'>
                    <div className='logo_others'>
                        <a href='#' className='logo_all'><BsTwitter /></a>
                        <a href='#' className='logo_all'><FaFacebookF /></a>
                        <a href='#' className='logo_all'><BsInstagram /></a>
                    </div>
                    <p className='para_others'>
                       Your personal shopping concierge. Helping 
                       you buy the latest products from the
                        U.S. Fast, easy, and reliable delivery
                         to over 100 countries.
                    </p>
                    <h5 className='others_title'>
                       NEWSLETTER SIGN UP
                    </h5>
                    <form className='form'>
                        <input type='email' className='emailInput' placeholder='Your Email' />
                        <button type='submit' className='emailBtn'>SUBMIT</button>
                    </form>
                </div>
                {/* single-Content_4_ends_here */}
            </div>
        </div>
        {/* Others_parts_ends_here */}

      </div>
      
    </section>
  )
}

export default SFooter
