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

import Sticker1 from '../assets/img/product/sticker-1.png';
import Sticker2 from '../assets/img/product/sticker-2.png';

import Customize1 from '../assets/img/icon/cdesign-1.png';
import Customize2 from '../assets/img/icon/cdesign-2.png';
import Customize3 from '../assets/img/icon/cdesign-3.png';





export default function ProductDetailsCard() {

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
          <div className="col">
            <div className="product__details--media">
              <Slider className="product-slider"  {...mainImageSettings}>
                {ProductImages.map((image, index) => (
                  <div key={index} className="product__media--preview__items">
                    <Link className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" to={selectedImage || ProductImages[0]}>
                      <img className="product__media--preview__items--img" src={selectedImage || ProductImages[0]} alt={`product-media-img-${index}`} />
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col">
            <div className="product__details--info">
  
      <h3 className="product__details--info__title mb-15">Address Labels</h3>
      <hr style={{color:'#E6E9ED'}} />


      <div className='product-details'>

        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Select Shape</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 shape-selector" aria-label=".form-select-lg example">
  <option selected>Round</option>
  <option value="1">Suare</option>
  <option value="2">Other</option>
</select>
            </div>
                 
        </div>


        <div className='row  my-4'>
          <div className='col-11'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Choose Sticker Type?</h6>
          <div className='row mt-4'>
            <div className='col-lg-3 col-md-4 col-5 text-center'>
              <img src={Sticker1} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Multipurpose Use</p>
          </div>

          <div className='col-lg-3 col-md-4 col-5 text-center'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Multipurpose Use</p>
          </div>
            </div>

                 
        </div>

        </div>


        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Size</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 details-selector" aria-label=".form-select-lg example">
  <option selected>2in X 2in</option>
  <option value="1">2in X 2in</option>
  <option value="2">2in X 2in</option>
</select>
            </div>
                 
        </div>

        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Quantity</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 details-selector" aria-label=".form-select-lg example">
  <option selected>12</option>
  <option value="1">10</option>
  <option value="2">50</option>
</select>
            </div>
                 
        </div>


        <div className='row  my-4'>
          <div className='col-12'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Choose Material Type?</h6>
          <div className='desktop-section'>

          <div className='row g-0 mt-3' style={{ margin: 0, marginLeft: -5, marginRight: -5, paddingRight:'4px', paddingLeft:'4px' }}>
            <div className='col  text-center my-2'>
              <img src={Sticker1} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Standard - 
Economical</p>
          </div>

          <div className='col text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Kraft Paper</p>
          </div>

          <div className='col  text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Gold Film</p>
          </div>

          <div className='col  text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Silver Film</p>
          </div>
          
          <div className='col text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Thin Film (Indoor Use)</p>
          </div>
            </div>
            </div>

            <div className='mobile-section'>
            <div className='row g-0 mt-3 ' style={{ margin: 0, marginLeft: -5, marginRight: -5, paddingRight:'4px', paddingLeft:'4px' }}>
            <div className='col  text-center my-2'>
              <img src={Sticker1} className='img-fluid' />
              <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Standard - 
Economical</p>
          </div>

          <div className='col-4 text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Kraft Paper</p>
          </div>

          <div className='col-4  text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Gold Film</p>
          </div>

          <div className='col-4  text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Silver Film</p>
          </div>
          
          <div className='col-4 text-center my-2'>
          <img src={Sticker2} className='img-fluid' />
          <p className='mt-2 text-center' style={{fontSize:'10px', fontWeight:'500', lineHeight:'13px'}}>Thin Film (Indoor Use)</p>
          </div>
            </div>
</div>
                 
        </div>

        </div>

        <div className='row  my-4'>
          <div className='col-6'>
          <h6 className='mt-2' style={{fontWeight:'500'}}>Select Format</h6>
            </div>

            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 details-selector" aria-label=".form-select-lg example">
  <option selected>Supplied in Sheets</option>
  <option value="1">Supplied in Sheets</option>
  <option value="2">Supplied in Sheets</option>
</select>
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

        <div className='customize-design'>

          <div className='row'>

            <div className='col-4'>
                  <div className='cdesign-icon'>
                    <img src={Customize1} className='img-fluid' />
                    <h6>Use our templates</h6>
                    </div>
              </div>


              <div className='col-4'>
                  <div className='cdesign-icon'>
                    <img src={Customize2} className='img-fluid' />
                    <h6>Design Here Online</h6>
                    </div>
              </div>


              <div className='col-4'>
                  <div className='cdesign-icon'>
                    <img src={Customize3} className='img-fluid' />
                    <h6>Upload a Full Design</h6>
                    </div>
              </div>

            </div>
                     
          </div>

          <button className='btn w-100' style={{backgroundColor:'#62D69E', marginTop:'15px', fontWeight:'600', borderRadius:'8px', fontSize:'14px', padding:'6px 0px'}}><span></span>Start Designing</button>


</div>
    </div>
  </div>
</div>
</div>
    </section>

  )
}
