import React from 'react'
import { Link } from 'react-router-dom';

export default function ShippingAddress() {
  return (
    <div className="cart__page">
        <div className='cart-Product-box'>
          <div className='row'>

            <div className='col-lg-7 col-md-8 col-12'>
            <h4 style={{fontWeight:'500'}}>Shipping Method</h4>
              <div className='product-des'>
               
                  <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                  <p className='mb-0'>Company Name:   Stickerman</p>
                  <p className='mb-0'>Whatsapp Number:   +91 123456789</p>
                  <div className="row my-4 edit-btns">
                <div className="col">
        < button className="btn  me-2" style={{color:'#FE646F'}}>
        <i class="fas fa-pencil-alt mx-1"></i>
 Edit
        </button>
        <button className="btn me-2" style={{color:'#0A617D'}}>
            <i className="fa fa-plus" aria-hidden="true"></i> Add New
        </button>
        <button className="btn " style={{color:'#0A617D'}}>
            <i className="fa fa-sync "></i> Change Address
        </button>
    </div>
</div>
                </div>

                <p className='my-3' style={{borderBottom:'1px solid #E6E9ED'}}></p>

                <h4 style={{fontWeight:'500'}}>Billing Address</h4>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked" style={{fontSize:'11px', color:'#323232', fontWeight:'500'}}>
  Email me with news and offers
  </label>
</div>
              </div>

              <div className='col-lg-5 ccol-md-4 col-12'>
                <h4 style={{fontWeight:'400'}}>Shipping Method</h4>
                <input type='text' style={{border:'1.2px solid #D9D9D9', height:'35px', fontSize:'14px', borderRadius:'22px', padding:'0px 15px'}} placeholder='Free Shipping' className='form-control mt-3' />

                <p style={{color:'#0A617D', fontSize:'10px', fontWeight:'500', textAlign:'center'}}>(Estimated Deliver Date:25 March 2024)</p>
              </div>
          </div>
        </div>
    </div>

  )
}
