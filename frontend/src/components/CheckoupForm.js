import React, { useState } from 'react';
import PaymentImg1 from '../assets/img/other/shop-pay.png'
import PaymentImg2 from '../assets/img/other/g-pay.png'
import PaymentImg3 from '../assets/img/other/pay-pal.png'
import Paypal from '../assets/img/icon/paypal-pay.png'
import CardIcon from '../assets/img/icon/pay-row.png'


export default function CheckoupForm() {

    const [paymentOption, setPaymentOption] = useState('creditCard');

    const handleOptionChange = (e) => {
        setPaymentOption(e.target.value);
    };

  return (
    <div className='checkoyut-form' style={{border:'1.4px solid #E6E9ED', padding:'25px', borderRadius:'10px'}}>
        <p style={{color:'#7D7D7D', fontSize:'12px', textAlign:'center'}}>Express checkout</p>

        <div className='pqayment-btns'>
            <div className='row'>
                <div className='col-4'>
                    <img style={{cursor:'pointer'}} src={PaymentImg1} className='img-fluid mx-2' />
                </div>
                <div className='col-4'>
                    <img style={{cursor:'pointer'}} src={PaymentImg2} className='img-fluid mx-2' />
                </div>
                <div className='col-4'>
                    <img style={{cursor:'pointer'}} src={PaymentImg3} className='img-fluid mx-2' />
                </div>
            </div>
        </div>


        <div className='or-line mt-3'>
            <div className='row text-center'>
                <div className='col-5'>
                    <p style={{borderTop:'1.4px solid #E6E9ED', marginTop:'13px'}}></p>
                </div>
                <div className='col-2'>
                    OR
                </div>
                <div className='col-5'>
                <p style={{borderTop:'1.4px solid #E6E9ED', marginTop:'13px'}}></p>

                </div>
            </div>
        </div>

   
        <div className="col-12 mb-12">
        <label for="exampleInputEmail1 mb-3" class="form-label">Contact</label>

                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Email or Mobile Phone Number" type="text" />
                                </label>
                            </div>
                        </div>

                        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" style={{color:'#323232', fontSize:'13px'}}>Email me with news and offers</label>
  </div>


  <div class="col-lg-12 mb-12 mt-4">
  <label for="exampleInputEmail1 mb-3" class="form-label">Delivery</label>

                                <div class="checkout__input--list checkout__input--select select">

                                    <select class="checkout__input--select__field border-radius-5" id="expirayyyear" >
                                        <option value="1">United States</option>
                                        <option value="2">India</option>
                                        <option value="3">USA</option>
                                        <option value="5">Test</option>
                                    </select>
                                </div>
                            </div>


            <div className='row'>
            <div className="col-6 mb-12">

                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="First Name (Optional)" type="text" />
                                </label>
                            </div>
                        </div>


                        <div className="col-6 mb-12">



                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Last Name" type="text" />
                                </label>
                            </div>
                        </div>
            </div>

            <div className="col-12 mb-12">
                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Address" type="text" />
                                </label>
                            </div>
                        </div>

                        <p for="exampleCheck1" style={{color: '#0A617D', fontSize: '13px', cursor:'pointer', display:'inline'}}> <i class="fas fa-plus mx-2"></i>Add apartment, suite, etc...</p>


                    <div className='row my-3'>
                    <div className='col-md-4 col-12'>
                    <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="City" type="text" />
                                </label>
                            </div>
                </div>
                <div className='col-md-4 col-12'>
                <div class="checkout__input--list checkout__input--select select my-2">

<select class="checkout__input--select__field border-radius-5" id="expirayyyear" >
    <option value="1">State</option>
    <option value="2">KA</option>
    <option value="3">MH</option>
    <option value="5">Test</option>
</select>
</div>
                </div>
                <div className='col-md-4 col-12'>
                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="ZIP Code" type="text" />
                                </label>
                            </div>
                </div>
                    </div>



                    <div className='row my-3 '>
                    <div className='col-md-2 col-6'>
                    <div className="checkout__input--list my-2">
                    <p className='mt-3'>Phone</p>
                            </div>
                </div>
                <div className=' col-md-2 col-6'>
                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Country 
Code" type="text" />
                                </label>
                            </div>
                </div>
                <div className='col-md-8 col-12'>
                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Whatsapp Number" type="text" />
                                </label>
                            </div>
                </div>
                    </div>

                    <div className="col-12 mb-12">
        <label for="exampleInputEmail1 mb-4" class="form-label">Shipping method</label>
<p style={{padding:'10px 15px', backgroundColor:'#E6E9ED', borderRadius:'6px'}}>Enter your shipping address to view available shipping methods</p>
                        </div>           



                        <div className="col-12 mb-12 mt-5 mb-3">
        <label for="exampleInputEmail1 mb-2" class="form-label">Payment</label>
<p style={{color:'#7D7D7D', fontSize:'12px', marginTop:'-10px'}}>All transactions are secure and encrypted.</p>
                        </div> 


                        <div className="row">
                <div className="col-12 radio-selction">
                    <div className='row'>
                        <div className='col-8 my-auto'>                    <div className="form-check form-check-inline payment-option">
                        <input className="form-check-input" type="radio" id="creditCard" name="paymentOption" value="creditCard" checked={paymentOption === 'creditCard'} onChange={handleOptionChange} />
                        <label className="form-check-label" htmlFor="creditCard">Credit Card</label>
                    </div></div>
                        <div className='col-4 my-auto text-end'>
                            <img src={CardIcon} className='img-fluid' />
                        </div>
                    </div>

                </div>


                    {paymentOption === 'creditCard' && (
                <div className='pay-form'>
                                   <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Card Number" type="text" />
                                </label>
                            </div>

                            <div className='row'>

                                <div className='col-md-6 col-12'>
                                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Expiration Date (MM/YY)" type="text" />
                                </label>
                            </div>
                                </div>


                                <div className='col-md-6 col-12'>
                                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Security Code" type="text" />
                                </label>
                            </div>
                                </div>
                                </div>

                                <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Name on Card" type="text" />
                                </label>
                            </div>

                            <div class="mt-4 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" style={{color:'#323232', fontSize:'13px'}}>Use shipping address as billing address</label>
  </div>
                </div>
            )}
      



      <div className="col-12 radio-selction-2">
                    <div className='row'>
                    <div className='col-8 my-auto'>
                    <div className="form-check form-check-inline">
                   
                            <input className="form-check-input" type="radio" id="paypal" name="paymentOption" value="paypal" checked={paymentOption === 'paypal'} onChange={handleOptionChange} />
                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                            </div>

                        </div>
                        <div className='col-4 my-auto text-end'>
                            <img src={Paypal} className='img-fluid' />
                        </div>
                        
                    </div>

                </div>
                {paymentOption === 'paypal' && (
                <div className='pay-form'>
                                                    <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Phone No" type="text" />
                                </label>
                            </div>
                </div>
            )}


            </div>

            <div class="my-5 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1" style={{color:'#323232', fontSize:'15px'}}>Save Details </label>
  </div>

  <div className='payment-btn'>
  <a class="cart__summary--footer__btn primary__btn checkout w-100" href="/checkout" style={{borderColor: 'rgb(69, 162, 158)',  borderRadius: '5px', backgroundColor:'#45A29E', textAlign:'center'}}>Pay Now</a>
  </div>





        </div>

  )
}
