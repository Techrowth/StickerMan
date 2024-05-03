import React from 'react'

import StickerLogo from '../assets/img/icon/sticker-logo.png';
import EditIcon from '../assets/img/icon/edit.png';

export default function PreductPreviewDetails() {
  return (
   <div className='container my-5'>
    <h2>Product Options <span style={{color:'#8C8C8C', fontSize:'20px', fontWeight:'500'}}>(Luxury Metal Stickers)</span></h2>

    <div className='detiled-section' style={{marginTop:'50px'}}>
        <div className='row'>
        <div className='col-lg-6 col-12 my-3 my-auto'>

            <div className='product-edit d-flex justify-content-center'>
                    <div className='col-lg-5 col-md-6 col-8 text-center' style={{backgroundColor:'#F3F3F3', borderRadius:'10px', padding:'50px 20px'}}>
                       <img src={StickerLogo} className='img-fluid' />
                    </div>
            </div>

            <div className='text-center'>
            <button className='mt-4' style={{fontWeight:'500', backgroundColor:'transparent', border:'1px solid', borderRadius:'5px'}}><img src={EditIcon} className='mx-2 img-fluid' style={{width:'15px', height:'15px'}} />Edit your Design</button>
            </div>
        </div>

        <div className='col-lg-6 col-12 my-3'>

            <div className='row'>

                <div className='col-md-8 col-12'>
                <h3>Product Additional Information </h3>
                </div>
                
                <div className='col-md-4 col-12'>
                <h6 style={{color:'#FE646F', cursor:'pointer', textAlign:'end'}}><i style={{fontSize:'13px'}} class="fas fa-pencil-alt mx-2"></i> Edit </h6>
                </div>
            </div>

<p style={{borderBottom:'1px solid #E6E9ED', marginTop:'10px'}}></p>

<div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Sticker Name</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
    <h6 className='mt-2' style={{fontWeight:'500'}}>519617</h6>
        </div>
    </div>



    <div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Size</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
    <h6 className='mt-2' style={{fontWeight:'500', fontSize:'13px'}}>25.4 Width x 25.4 Height (MM)</h6>
        </div> 
    </div>


    <div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Quantity</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
        <input type="text" placeholder='25'  className="form-control mb-3 details-selector" />
        </div>          
    </div>


    <div className='row my-4'>
    <div className='col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Metal Color</h6>
    </div>
    <div className='col-7 product-details my-auto'>
<div className='color-name'>
    <p className='mb-0' style={{border:'1px solid', color:'#000', fontSize:'13px', display:'inline', padding:'4px 12px'}} >Gold</p>
</div>
        </div>         
    </div>


    
    <div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Surface Application</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
        <input type="text" placeholder='Any Surface(Indoor/Outdoor)' className="form-control mb-3 details-selector" />
        </div>          
    </div>




    <div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Printing Time</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
        <input type="text" placeholder='& Business Days' className="form-control mb-3 details-selector" />
        </div>          
    </div>




    <div className='row my-4'>
    <div className='col-md-5 col-5 product-details my-auto'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Where will you use this?</h6>
    </div>
    <div className='col-md-7 col-7 product-details my-auto'>
        <input type="text" className="form-control mb-3 details-selector" />
        </div>          
    </div>


    <p style={{borderBottom:'1px solid #E6E9ED', marginTop:'10px'}}></p>

    <div className='row  my-4'>
          <div className='col-md-9 col-7'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Total <small style={{fontSize:'11px'}}>(VAT Included)</small></h6>
            </div>
            <div className='col-md-3 col-5 text-center'>
           <h3 style={{color:'#ED5565',}}>$123.00</h3>
           <h6 className='mt-2' style={{fontWeight:'500'}}> <small style={{fontSize:'11px', lineHeight:'12px'}}>Unit Price: $8.12.00</small></h6>
            </div>   
        </div>


        <p style={{borderBottom:'1px solid #E6E9ED', marginTop:'10px'}}></p>


</div>
</div>


<p style={{borderBottom:'1px solid #E6E9ED', marginTop:'10px'}}></p>

<p style={{fontWeight:'500', color:'#000'}}><strong>IMPORTANT:</strong> We will whatsapp/email you a digital proof within 1-2 working days. Don't worry, we won't print your file until you check the proof and approve it online. Quick approvals & correct files will ensure that the committed timelines are met.</p>

<div className="form-check">
      {/* Bootstrap checkbox input */}
      <input className="form-check-input" type="checkbox" value="" id="checkboxId" />
      {/* Text next to the checkbox */}
      <label style={{color:'#0A617D', fontWeight:'500'}} className="form-check-label" htmlFor="checkboxId">I Understand & Agree</label>
    </div>


    <div className='text-center' style={{marginTop:'40px'}}>
    <button className='btn panal-btn '> <i class="fas fa-arrow-left"></i> &nbsp; &nbsp;  Save and Continue</button>
              <button className='btn panal-btn '>Save and Add to Cart &nbsp; &nbsp;   <i class="fas fa-arrow-right"></i></button>
    </div>

    </div>
        </div>

  )
}
