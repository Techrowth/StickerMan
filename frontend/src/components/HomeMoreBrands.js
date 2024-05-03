import React from 'react'
import Image1 from '../assets/img/other/1.png';
import Image2 from '../assets/img/other/2.png';
import Image3 from '../assets/img/other/3.png';
import Image4 from '../assets/img/other/4.png';
import Image5 from '../assets/img/other/5.png';
import Image6 from '../assets/img/other/6.png';

export default function HomeMoreBrands() {
  return (
    <div className='container my-5'>
          <h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'60px', marginBottom:'30px'}}>Loved by over More brands</h2>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image1} className='img-fluid' alt />
        </div>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image2} className='img-fluid' alt />
        </div>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image3} className='img-fluid' alt />
        </div>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image4} className='img-fluid' alt />
        </div>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image5} className='img-fluid' alt />
        </div>
        <div className='col-lg-2 col-md-3 col-4'>
        <img src={Image6} className='img-fluid' alt />
        </div>
      </div>
    </div>
  )
}
