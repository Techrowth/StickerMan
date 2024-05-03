import React from 'react'

import UploadIcon from '../assets/img/icon/upload.png'
import UploadIcon2 from '../assets/img/icon/upload-gray.png'
import DeleteIcon from '../assets/img/icon/delete-icon.png'
import StickerLogo from '../assets/img/icon/sticker-logo.png'

import { Link } from 'react-router-dom';

export default function UploadDesign1() {
  return (
    <div className='container my-5'>
        <div className='heading-section'>
            <div className='row'>
                <div className='col-md-7 col-12 my-auto mt-2'>
                  <h2> <img src={UploadIcon} className='img-fluid mx-2' style={{width:'60px', height:'60px'}} /> Upload Design <span style={{color:'#7D7D7D', fontWeight:'500', fontSize:'18px'}}><small>(Round Sticker)</small></span></h2>
                </div>

                <div className='col-md-5 col-12 my-auto text-md-end text-center mt-2'>
                <button className='btn panal-btn '>Upload art Work Later</button>
                <Link to="/product-preview"><button className='btn panal-btn '>Continue</button></Link>
                </div>
            </div>


            <div className='element-box product-details mt-5'>
                <div className='row'>
                    <div className='col-md-6 col-12 my-auto'>
                            <div className='row'>
                                <div className='col-3'>
                                <h6 className='mt-2' style={{fontWeight:'500'}}>Select Shape</h6>
                                </div>
                                <div className='col-9'>

                                <select className="form-select form-select-lg mt-1  details-selector" aria-label=".form-select-lg example">
  <option selected>2in X 2in</option>
  <option value="1">2in X 2in</option>
  <option value="2">2in X 2in</option>
</select>
                                    
                                    </div>
                            </div>
                    </div>

                    <div className='col-md-6 col-12 my-auto text-end'>
                    <h6 className='' style={{fontWeight:'500'}}>Supported Formats</h6>
                    </div>
                </div>
            </div>


            <div className='element-box product-details mt-5' style={{padding:'10px 0px'}}>

            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                <h6 className='' style={{fontWeight:'500'}}>Sticker Name</h6>
                             

                                <input type='name' value="Sticker_1" style={{width:'250px', margin:'10px 20px'}}  className="form-control  details-selector" />
   
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className='row'>
        <div className='col-md-9 col-12'>
          <div className='row'>
          <div className='col-md-2'>
           <div className='uploaded-logo'>
            <img src={StickerLogo}  className='img-fluid' />
           </div>
        </div>

        <div className='col-md-6 my-auto'>
      

      <p className="uplload-text mb-0" style={{ color: '#000', fontWeight: 400, fontSize:'13px', lineHeight:'17px', marginTop:'15px' }}>work-progress_7186997</p>
      <p className="uplload-text mb-0" style={{ color: '#000', fontWeight: 400, fontSize:'13px', lineHeight:'17px' }}>( 4.5 mb )</p>
     

        </div>

          </div>
        </div>
       
      </div>
      <div className='trash-img text-end'>
      <img src={DeleteIcon} style={{backgroundColor:'transparent', cursor:'pointer', width:'18px'}} alt="Upload Icon" />
      </div>
      </div>
    </div>
  </div>


</div>
                {/* <div className='row'>
                    <div className='col-md-6 col-12 my-auto'>
                            <div className='row'>
                                <div className='col-3'>
                                <h6 className='mt-2' style={{fontWeight:'500'}}>Sticker Name</h6>
                                </div>
                                <div className='col-9'>

                                <input type='name'  className="form-control  details-selector" />
                        
                                    </div>
                            </div>
                    </div>

                    <div className='col-md-6 col-12 my-auto text-end'>
                    <h6 className='' style={{fontWeight:'500'}}>Supported Formats</h6>
                    </div>
                </div> */}
            </div>



            <div className='element-box product-details mt-5' style={{padding:'10px 0px'}}>

<div class="accordion" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">

                    <h6 className='' style={{fontWeight:'500'}}>Sticker Name</h6>
                 

                    <input type='name' value="Sticker_2" style={{width:'250px', margin:'10px 20px'}}  className="form-control  details-selector" />

</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
<div className='row'>
<div className='col-md-9 col-12'>
<div className='row'>
<div className='col-md-2'>
<div className='uploaded-logo'>

</div>
</div>

<div className='col-md-6'>
<div className="upload-banner" style={{ backgroundColor: 'transparent', padding: '10px 0px' }}>
<div className="custom-upload">
<button style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }} className="create-product">
<div className="upload-icon">
<img src={UploadIcon2} style={{backgroundColor:'transparent'}} alt="Upload Icon" />
</div>
</button>
</div>
<p className="uplload-text mt-3 mb-0" style={{ color: '#000', fontWeight: 600 }}>Upload Design Here</p>
<p className="uplload-text" style={{ color: '#000', fontWeight: 500, fontSize: '12px', lineHeight:'16px' }}>Click to upload or drag and drop<br/>150 MB Max File Size</p>
</div>
</div>

</div>
</div>

</div>
<div className='trash-img text-end'>
<img src={DeleteIcon} style={{backgroundColor:'transparent', cursor:'pointer', width:'18px'}} alt="Upload Icon" />
</div>
</div>
</div>
</div>


</div>
    {/* <div className='row'>
        <div className='col-md-6 col-12 my-auto'>
                <div className='row'>
                    <div className='col-3'>
                    <h6 className='mt-2' style={{fontWeight:'500'}}>Sticker Name</h6>
                    </div>
                    <div className='col-9'>

                    <input type='name'  className="form-control  details-selector" />
            
                        </div>
                </div>
        </div>

        <div className='col-md-6 col-12 my-auto text-end'>
        <h6 className='' style={{fontWeight:'500'}}>Supported Formats</h6>
        </div>
    </div> */}
</div>


<div className='my-5'>
  <div className="add-new-sticker text-center">
  <button className='btn panal-btn '>Add More Sticker &nbsp; <i class="fas fa-plus"></i></button>
  </div>
</div>
        </div>
    </div>
  )
}
