import React from 'react'

import { Link } from 'react-router-dom';

import Icon1 from '../assets/img/icon/icon1.png';
import Icon2 from '../assets/img/icon/icon2.png';
import Icon3 from '../assets/img/icon/icon3.png';
import Icon4 from '../assets/img/icon/icon4.png';

import IdeaBanner2 from '../assets/img/other/ideas-2.png';

import PointIcon from '../assets/img/icon/pointw.png';


export default function IconBox() {
  return (
    <section className=" py-3 my-5">
        <div className=''>
    <div className="container col-lg-11 col-md-12 col-12 product-card-design" style={{overflowX:'hidden'}}>

    <div className='d-flex justify-content-center'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#D2F1FE', marginTop:'10px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px', }} className='btn'>More to discover</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'20px', marginBottom:'30px'}}>You’ve got the ideas, we’ve got the tools</h2>

<div className='container'>
<div className='row my-5'>
      <div className='col-md-6 col-12' >
       <div className='ides-box-1'>
               
    <h2 className='' style={{fontWeight: '600', textAlign:'start', color:'#0B0C10', marginTop:'10px', marginBottom:'10px'}}>For all your printing <br/>
prerequisites.</h2>

<h6 style={{color:'#000', fontWeight:'600'}}>You’ve got the ideas, we’ve got the tools</h6>

<div className='get-more-details pt-4'>
   <Link to="/category" ><button  className='btn' style={{backgroundColor:'#0B0C10', color:'#fff', fontSize:'14px', borderRadius:'22px', fontWeight:'500', padding:'7.5px 20px'}}>Shop Now <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></button></Link> 
</div>
       </div>
      </div>

      <div className='col-md-6 col-12' >
      <div className='ides-box-2' >

        <div className='row'>
          <div className='col-md-6 col-12'>
          <h2 className='' style={{fontWeight: '500', textAlign:'start', color:'#0B0C10', marginTop:'10px', marginBottom:'10px'}}>Thousands of <br/>free templates</h2>
           
          
           
           <p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Free Icons, Graphics</p>
           <p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Font Library</p>
           <p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Free images</p>
           <p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Easy to create & customize</p>
           
           <div className='get-more-details pt-4'>
           <Link to="/category" ><button className='btn' style={{backgroundColor:'#0B0C10', color:'#fff', fontSize:'14px', borderRadius:'22px', fontWeight:'500', padding:'7.5px 20px'}}>Design Now <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></button> </Link>
           </div>
          </div>

          <div className='col-md-6 col-12'>
          <img src={IdeaBanner2} className='img-fluid mt-3' />
          </div>
        </div>
               
            
                  </div>
      </div>
    </div>
</div>



    <div className='row d-flex justify-content-center'>
      <div className="col-md-10 col-12">
      <div className='row d-flex justify-content-center'>
        <div className='col-md-3 col-6'>
          <div className='icon-box'>
          <img src={Icon1} className='img-fluid'/>
            <h5>Low minimums</h5>
            <p>Low minimums & easily 
customizable</p>
          </div>

        </div>

        <div className='col-md-3 col-6'>
          <div className='icon-box'>
          <img src={Icon2} className='img-fluid'/>
            <h5>Free 24/7 support</h5>
            <p>Free 24/7 design & 
logistics support</p>
          </div>

        </div>



        <div className='col-md-3 col-6'>
          <div className='icon-box'>
          <img src={Icon3} className='img-fluid'/>
            <h5>Worldwide Shipping</h5>
            <p>Get free shipping over $65.</p>
          </div>

        </div>


        <div className='col-md-3 col-6'>
          <div className='icon-box'>
          <img src={Icon4} className='img-fluid'/>
            <h5>Flexible Payment</h5>
            <p>Pay with Multiple 
Credit Cards</p>
          </div>

        </div>
      </div>
      </div>

      </div>
</div>
</div>
    </section>


  )
}
