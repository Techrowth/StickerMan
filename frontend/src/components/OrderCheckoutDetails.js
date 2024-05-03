import React from 'react'
import { Link } from 'react-router-dom';

import CheckoutProductImg from '../assets/img/icon/sticker-box.png';

export default function OrderCheckoutDetails() {
  return (

    <div className="checkout__summary ">


      <div>
        <table className="summary__table">
          <tbody className="summary__table--body">
            <tr className=" summary__table--items">
              <td className=" summary__table--list">


                <div className="product__image two  d-flex align-items-center">
                  <div className="product__thumbnail border-radius-5" style={{border:'none'}}>
                  <div className='d-flex justify-content-end'>
  <div className='counter-box' style={{ backgroundColor: 'red', display: 'inline', backgroundColor:'#0A617D', color:'#fff', borderRadius:'50%', padding:'3px', fontSize:'11px', zIndex:'2' }}>25</div>
</div>
                    <Link to="/product-details"><img className="border-radius-5" style={{marginTop:'-7.5px'}} src={CheckoutProductImg} alt="cart-product" /></Link>
                  </div>
                  <div className="product__description">
                    <h3 className="product__description--name h4 "><Link to="/product-details">Luxury Metal Stickers</Link></h3>
                    <div className='product-des-2'>
                
                  <p className='mb-0'>Job Name:519617</p>
                  <p className='mb-0'>Size: 25.4 Width x 25.4 Height (MM)</p>
                  <p className='mb-0'>Width (MM): 25.4</p>
                  <p className='mb-0'>Height (MM): 25.4</p>
                  <p className='mb-0'>Metal Color : Gold</p>
            
                </div>
                  </div>
                </div>
              </td>
              <td className=" summary__table--list">
                <span className="cart__price" style={{ fontWeight: '500', fontSize: '14px' }}>$123.00</span>
              </td>
            </tr>

   </tbody>
        </table>
      </div>

<div className='row my-4'>
    <div className='col-9'>
    <label className="me-3">
    <input className="checkout__discount--code__input--field border-radius-5" placeholder="Discount Code" type="text" fdprocessedid="kdp2ua" />
  </label>
    </div>

    <div className='col-3'>

      <Link className="cart__summary--footer__btn primary__btn checkout" style={{backgroundColor:'#45A29E', borderRadius:'5px'}}>Apply</Link>

  </div>  
</div>





      <div className="cart__summary--total mb-20">
        <table className="cart__summary--total__table mt-3">
          <tbody>

            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>Subtotal</td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500'}}>₹ 1272</td>
            </tr>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>Standard shipping</td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500', color:'#7D7D7D'}}>Enter shipping address</td>
            </tr>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{ fontSize: 15, fontWeight: 600 }}>Total</td>
              <td className="cart__summary--amount text-right" style={{ fontSize: 15, fontWeight: 600 }}>USD <span style={{color:'#FE646F'}}>$123.00</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  )
}
