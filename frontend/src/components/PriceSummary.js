import React from 'react'
import { Link } from 'react-router-dom';

import CheckoutProductImg from '../assets/img/icon/sticker-box.png';

export default function PriceSummary() {
  return (

    <div className="checkout__summary ">

<h5 style={{fontWeight:'500', marginBottom:'10px', borderBottom:'1px solid #E6E9ED'}}>Price Summary</h5>

      <div>
        <table className="summary__table">
          <tbody className="summary__table--body">
            <tr className=" summary__table--items">
              <td className=" summary__table--list">


                <div className="product__image two  d-flex align-items-center">
                  <div className="product__thumbnail border-radius-5" style={{border:'none'}}>

                    <Link to="/product-details"><img className="border-radius-5" style={{marginTop:'-7.5px'}} src={CheckoutProductImg} alt="cart-product" /></Link>
                  </div>
                  <div className="product__description">
                    <h3 className="product__description--name h4 "><Link to="/product-details">Luxury Metal Stickers</Link></h3>
                    <div className='product-des-2'>
                
                  <p className='mb-0'>Qty:25</p>
                  <p className='mb-0'>Job Name:519617</p>
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



<div className='cupon-box mt-3'>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn" style={{backgroundColor:'#0A617D', color:'#fff', padding:'0px 25px'}} type="button" id="button-addon2">Apply</button>
</div>
</div>







      <div className="cart__summary--total mb-20">
        <table className="cart__summary--total__table mt-3">
          <tbody>

            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>Subtotal</td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500'}}>$123.00</td>
            </tr>

            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>Shipping Price</td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500'}}>$0.00</td>
            </tr>


            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>Discount</td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500'}}>$0.00</td>
            </tr>


            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{fontSize:'13px', fontWeight:'500'}}>IGST <small>(Included in Subtotal)</small></td>
              <td className="cart__summary--amount text-right" style={{fontSize:'13px', fontWeight:'500'}}>$123.00</td>
            </tr>

            <p style={{margin:'10px 0px', borderBottom:'1px solid #E6E9ED'}}></p>
            
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{ fontSize: 15, fontWeight: 600 }}>Total</td>
              <td className="cart__summary--amount text-right" style={{ fontSize: 15, fontWeight: 600 }}>USD <span style={{color:'#FE646F'}}>$123.00</span></td>
            </tr>

            <div className='pay-now-btn'>
              <button className='btn w-100' style={{backgroundColor:'#0A617D', fontSize:'14px', color:'#fff', fontWeight:'500', marginTop:'10px', padding:'8px 0px', borderRadius:'5px'}}>Pay Now</button>
            </div>
          </tbody>

        </table>
      </div>

    </div>

  )
}
