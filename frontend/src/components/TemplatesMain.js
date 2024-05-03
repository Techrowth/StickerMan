import React from 'react';

import Customize1 from '../assets/img/icon/cdesign-1.png';
import Customize2 from '../assets/img/icon/cdesign-2.png';
import Customize3 from '../assets/img/icon/cdesign-3.png';

export default function TemplatesMain() {
  return (
    <div className='container my-5'  style={{overflowX:'hidden'}}>

  <div className='templates-main' style={{borderBottom:'1px solid #E6E9ED'}}>

    <div className='row'>

        <div className='col-lg-8 col-md-7 col-12'>
        <h2 style={{fontWeight:'600', marginTop:'20px'}}>Customizable Stickers <br/>
Design Templates</h2>

<p style={{color:'#8C8C8C', marginTop:'15px'}}>Custom sizes at the right costs with lowest order quantities in the industry for<br/>you to be sure before placing bigger orders.</p>
        </div>

        <div className='col-lg-4 col-md-5 col-12'>
        <div className='customize-design' style={{backgroundColor:'transparent'}}>

<div className='row'>




    <div className='col-6'>
        <div className='cdesign-icon'>
          <img src={Customize2} className='img-fluid' />
          <h6>Design Here Online</h6>
          </div>
    </div>


    <div className='col-6'>
        <div className='cdesign-icon'>
          <img src={Customize3} className='img-fluid' />
          <h6>Upload a Full Design</h6>
          </div>
    </div>

  </div>
           
</div>
        </div>
   
</div>
    </div>   
    </div>



  )
}
