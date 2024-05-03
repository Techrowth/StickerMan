import React, { useRef } from 'react';

import Icon1 from '../assets/img/icon/etu-1.png';
import Icon2 from '../assets/img/icon/etu-2.png';
import Icon3 from '../assets/img/icon/etu-3.png';
import Icon4 from '../assets/img/icon/etu-4.png';
import Image from '../assets/img/other/easy-to-use.png';




export default function HomeEasyToUse() {

  return (
    <div className='container my-5 py-3' >
        <div className='row'>


            <div className='col-lg-6 colo-12 py-2'>
            <div className='content-sec'>
            <div className='d-flex justify-content-start'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#FFEFC8', marginTop:'20px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px'}} className='btn'>Easy to use</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'start', color:'#0B0C10', marginTop:'20px', marginBottom:'30px'}}>You have ideas—we 
makes them a reality</h2>


<div className='row g-0'>
    <div className='col-md-6 col-12'>
       <div className='easy-use-icon-box'>
       <div className='content-sec2'>
            <div className='d-flex justify-content-start'>
              <img src={Icon1} alt="Icon 1" className="mr-2" />
              <h3>Font Library</h3>
            </div>
            <p>Lorem ipsum det, consec tetur 
duis nec fringi det, consec</p>
          </div>
       </div>
    </div>

    <div className='col-md-6 col-12'>
    <div className='easy-use-icon-box'>
       <div className='content-sec2'>
            <div className='d-flex justify-content-start'>
              <img src={Icon2} alt="Icon 1" className="mr-2" />
              <h3>Quick Designs</h3>
            </div>
            <p>Lorem ipsum det, consec tetur 
duis nec fringi det, consec</p>
          </div>
       </div>
        </div>

        <div className='col-md-6 col-12'>
    <div className='easy-use-icon-box'>
       <div className='content-sec2'>
            <div className='d-flex justify-content-start'>
              <img src={Icon3} alt="Icon 1" className="mr-2" />
              <h3>Free Icons, Graphics</h3>
            </div>
            <p>Lorem ipsum det, consec tetur 
duis nec fringi det, consec</p>
          </div>
       </div>
        </div>


        <div className='col-md-6 col-12'>
    <div className='easy-use-icon-box'>
       <div className='content-sec2'>
            <div className='d-flex justify-content-start'>
              <img src={Icon4} alt="Icon 1" className="mr-2" />
              <h3>Free Images</h3>
            </div>
            <p>Lorem ipsum det, consec tetur 
duis nec fringi det, consec</p>
          </div>
       </div>
        </div>
</div>
</div>
            </div>

            <div className='col-lg-6 colo-12 py-2'>
                 <img src={Image} className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}
