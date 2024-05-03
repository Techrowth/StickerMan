import React from 'react'

import Icon1 from '../assets/img/icon/duo-1.png';
import Icon2 from '../assets/img/icon/duo-2.png';
import Icon3 from '../assets/img/icon/duo-3.png';

export default function DesignYourOwn() {
  return (
    <div className='container my-5'>
    <div className='d-flex justify-content-center'>
    <p style={{color:'#000', fontSize:'13px', backgroundColor:'#FFE5D6', marginTop:'30px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px', }} className='btn'>Design your own</p>
    </div>
   
<h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'10px', marginBottom:'30px'}}>How does Stickerman work?</h2>

<div className='d-flex justify-content-center'>
  <div className='col-lg-10 col-md-11 justify-content-center'>
    <div className='row'>
      <div className='col-md-4 col-6'>
        <div className='icon-box'>
          <img src={Icon1} className='img-fluid'/>
          <h5>Upload your design</h5>
          <p>Lorem ipsum det, consec 
tetur adipiscing elit duis nec fringi det, 
consec tetur adipiscing eli</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>
        </div>
      </div>

      <div className='col-md-4 col-6'>
        <div className='icon-box'>
          <img src={Icon2} className='img-fluid'/>
          <h5>Make it print ready</h5>
          <p>Lorem ipsum det, consec 
tetur adipiscing elit duis nec fringi det, 
consec tetur adipiscing eli</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>
        </div>
      </div>

      <div className='col-md-4 col-12'>
        <div className='icon-box'>
          <img src={Icon3} className='img-fluid'/>
          <h5>Ship it for you</h5>
          <p>Lorem ipsum det, consec 
tetur adipiscing elit duis nec fringi det, 
consec tetur adipiscing eli</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

        </div>
      </div>
    </div>
  </div>
</div>

      </div>

  )
}
