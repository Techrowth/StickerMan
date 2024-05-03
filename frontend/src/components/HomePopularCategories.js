import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Deal1 from '../assets/img/categories/deal-1.png';
import Deal2 from '../assets/img/categories/deal-2.png';
import Deal3 from '../assets/img/categories/deal-3.png';
import Deal4 from '../assets/img/categories/deal-4.png';


import CustomPrevButton from '../assets/img/icon/prev.png'; // Your custom previous button
import CustomNextButton from '../assets/img/icon/next.png'; // Your custom next button

export default function HomePopularCategories() {

    
  const sliderRef = useRef(null);

  const products = [
    { title: 'Sticker by Use ', imageUrl: Deal1 },
    { title: '⁠Sticker by Shape ', imageUrl: Deal2 },
    { title: 'Premium Metal Stickers', imageUrl:  Deal3 },
    { title: 'Transfer / UV Stickers ', imageUrl: Deal4},
    { title: 'Sticker by Shape', imageUrl: Deal2},
    // Add more product objects
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for mobile view
        settings: {
          slidesToShow: 2,
        },
      },

    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(0); // Ensure the slider starts at the first slide
  }, []);



  return (
    <div className="container col-lg-11 col-md-12 col-12 product-card-design" style={{overflowX:'hidden'}}>

<div className='d-flex justify-content-center'>
    <p style={{color:'#000', fontSize:'13px', backgroundColor:'#D2F1FE', marginTop:'10px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px', }} className='btn'>Popular categories</p>
    </div>
   
<h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'20px', marginBottom:'30px'}}>Popular Categories</h2>
    <style>
      {`
      .slick-arrow {
        height: 40px !important;
        width: 40px !important; /* Adjust the width as needed */
        border-radius: 50%; /* Make it a circle */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999 !important;
      }

      .slick-prev {
        left: -10px;
    }

    .slick-next {
        right: -10px;
    }



    `}
    </style>

        <div className="product__section--inner">

          <Slider
            ref={sliderRef}
            {...settings}
            prevArrow={
              <img
                src={CustomPrevButton}
                className="slide-icon"
                alt="Previous"
              />
            } // Custom previous button
            nextArrow={
              <img
                src={CustomNextButton}
                className="slide-icon"
                alt="Next"
              />
            } // Custom next button
          >
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="image-container">

                  <div className="col mb-30 main-slide-product">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={product.imageUrl} alt={product.title} />
                          <img className="product__items--img product__secondary--img" src={product.imageUrl} alt={product.title} />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn'>
                            {product.title}
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
            ))}
          </Slider>
          </div>
          </div>

  )
}
