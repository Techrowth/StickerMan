import React from 'react'

import Email from '../assets/img/other/mail.png';
import Refer from '../assets/img/other/refer.png';

export default function BeforeFooter() {
  return (
<div className='container'>
    <div className='before-footer d-flex justify-content-center' style={{marginTop:'70px', marginBottom:'60px'}}>
        <div className='col-lg-10 col-md-12 '>
            <div className='row justify-content-center justify-content-md-between'>
                <div className='col-md-5 col-10 justify-content-center text-center'> {/* Added text-center class */}
                    <h2><span><img src={Email} style={{height:'50px', width:'50px'}} className='img-fluid mx-2'/></span>Stay in the loop.</h2>
                    <p className='my-3' style={{fontWeight:'500', lineHeight:'23px'}}>Subscribe to our newsletter for the latest information 
on new releases and sales.</p>
                    <form>
                        <div className="mb-3 extra-top-space">
                            <input type="email" placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                    </form>
                </div>
                <div className='col-md-5 col-10 justify-content-center text-center'> {/* Added text-center class */}
                  
                    <img src={Refer}  style={{height:'115px', width:'150px'}}  className='img-fluid refre-img'/>
                    <p className='my-3' style={{fontWeight:'500', lineHeight:'23px'}}>Lorem ipsum det, consec 
tetur adipiscing elit duis nec fringi det</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" placeholder='Share Code'  className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}
