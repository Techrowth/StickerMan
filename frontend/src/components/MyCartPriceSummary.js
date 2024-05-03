import React from 'react'

export default function MyCartPriceSummary() {
  return (
   <div className='container'>
            <div className='cart-Product-box'>
               <h5 style={{color:'#000000', fontWeight:'600'}}>Price Summary</h5>
               <p className='my-3' style={{borderBottom:'1px solid #E6E9ED'}}></p>
               <div className='row'>
                <div className='col-6'>
                    <p style={{fontSize:'13px', color:'#000', fontWeight:'500'}}>Subtotal</p>
                </div>
                <div className='col-6 text-end'>
                    <p style={{fontSize:'13px', color:'#000', fontWeight:'500'}}>$123.00</p>
                </div>

                <div className='continue-btn my-3'>
                    <button className='btn panal-btn-2 w-100 py-2'>Continue</button>
                </div>

                <h4 className='text-center my-4 d-inline' > <i class="fas fa-arrow-left"></i> &nbsp; Continue Shopping</h4>
               </div>
            </div>
   </div>
  )
}
