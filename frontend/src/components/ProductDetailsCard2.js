import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainProduct from '../assets/img/product/single-product.png';
import ProductImg1 from '../assets/img/product/single-1.png';
import ProductImg2 from '../assets/img/product/single-2.png';
import ProductImg3 from '../assets/img/product/single-3.png';
import ProductImg4 from '../assets/img/product/single-4.png';

import BoyIcon from '../assets/img/icon/boy.png';
import GirlIcon from '../assets/img/icon/girl.png';
import GoldFarmIcon from '../assets/img/icon/goldfram.png';

import Customize1 from '../assets/img/icon/cdesign-1.png';
import Customize2 from '../assets/img/icon/cdesign-2.png';
import Customize3 from '../assets/img/icon/cdesign-3.png';

import Product from '../assets/img/other/product.png';







export default function ProductDetailsCard2() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle open/closed state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const ProductImages = [
    MainProduct,
    ProductImg1,
    ProductImg2,
    ProductImg3,
    ProductImg4,
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImage(ProductImages[index]);
  };


  const mainImageSettings = {
    customPaging: function (i) {
      return (
        <Link>
          <img
            src={ProductImages[i]}
            alt={`Thumbnail ${i}`}
            onClick={() => handleThumbnailClick(i)}
          />
        </Link>
      );
    },
    dots: true,
    dotsClass: 'slick-dots product__media--nav',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: ProductImages.length > 5,
    afterChange: (current) => setSelectedImage(ProductImages[current]),
  };



  return (
    <section className="product__details--section section--padding">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-md-2">
          <div className="col-md-6 col-12">
            <div className="product__details--media">
            <img className="product__media--preview__items--img" src={Product}  />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="product__details--info">
  
      <h3 className="product__details--info__title mb-15">Stick On’s</h3>
      <hr style={{color:'#E6E9ED'}} />


      <div className='product-details'>

        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Quantity</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 details-selector" aria-label=".form-select-lg example">
  <option selected>10</option>
  <option value="1">15</option>
  <option value="2">20</option>
</select>
            </div>
                 
        </div>


        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Choose Sticker Type?</h6>   
        </div>

        <div className='col-6'>
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">English</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Arabic</label>
</div>
        </div>

        </div>



        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Line 1</h6>
            </div>

            <div className='col-6'>
            <input type='text'  className="w-100 form-control mb-3 details-selector" />

            </div>
                 
        </div>


        <div className='row  my-4'>
          <div className='col-12'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Color</h6>
          <div className=''>

          <div className='row g-0 mt-3' style={{ margin: 0, marginLeft: -5, marginRight: -5, paddingRight:'4px', paddingLeft:'4px' }}>
            <div className='col-lg-2 col-m-3 col-4  text-center my-2'>
              <img src={BoyIcon} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>
Boy</p>
          </div>

          <div className='col-lg-2 col-m-3 col-4  text-center my-2'>
              <img src={GirlIcon} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>
              Girl</p>
          </div>

          <div className='col-lg-2 col-m-3 col-4  text-center my-2'>
              <img src={GoldFarmIcon} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>
              Gold Film</p>
          </div>
            </div>
            </div>
      
        </div>

        </div>

        <div className='row  my-4'>
        <h6 className='mt-2' style={{fontWeight:'500'}}>Select Format</h6>
         
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Animal</button>
         </div>

                  
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Fruits</button>
         </div>


                  
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Space</button>
         </div>



                  
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Dinosaurs</button>
         </div>



                  
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Construction</button>
         </div>


                  
         <div className='col-md-4 col-6'>
            <button className='btn selct-format w-100'>Flowers</button>
         </div>
                 
        </div>


        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Printing Time</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 details-selector" aria-label=".form-select-lg example">
    <option selected>4 Business Days</option>
  <option value="1">4 Business Days</option>
  <option value="2">4 Business Days</option>
</select>
            </div>
                 
        </div>

        <hr style={{color:'#E6E9ED', height:'1.5px'}} />

        
        <div className='row  my-4'>
          <div className='col-md-9 col-7'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Total <small style={{fontSize:'11px'}}>(VAT Included)</small></h6>
            </div>

            <div className='col-md-3 col-5 text-center'>
           <h3 style={{color:'#ED5565',}}>$123.00</h3>
           <h6 className='mt-2' style={{fontWeight:'500'}}> <small style={{fontSize:'11px', lineHeight:'12px'}}>Unit Price: $8.12.00</small></h6>
            </div>
                 
        </div>


        <hr style={{color:'#E6E9ED', height:'1.5px'}} />


          <button className='btn w-100' style={{backgroundColor:'#62D69E', marginTop:'15px', fontWeight:'600', borderRadius:'8px', fontSize:'16px', padding:'8px 0px'}}><span></span>Continue</button>


</div>
    </div>
  </div>
</div>

<div className='product-images' style={{marginTop:'150px', marginBottom:'-50px'}}>
    <div className='row d-flex justify-content-center'>
        <div className='col-lg-3 col-md-4 col-6 my-2'>
        <img className="product__media--preview__items--img" src={Product}  />
        </div>

        <div className='col-lg-3 col-md-4 col-6 my-2'>
        <img className="product__media--preview__items--img" src={Product}  />
        </div>

        <div className='col-lg-3 col-md-4 col-6 my-2'>
        <img className="product__media--preview__items--img" src={Product}  />
        </div>

        <div className='col-lg-3 col-md-4 col-6 my-2'>
        <img className="product__media--preview__items--img" src={Product}  />
        </div>
    </div>
</div>
</div>


    </section>

  )
}
