import React, { useRef } from 'react';

import Icon1 from '../assets/img/icon/etl-1.png';
import Icon2 from '../assets/img/icon/etl-2.png';
import Product1 from '../assets/img/other/best-seller.png';
import Product2 from '../assets/img/other/sale.png';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function HomeEasyToLaunch() {

// Custom slide component
const CustomSlide = ({ image }) => {
    return (
        <div className='product-unlimeted-slide px-2'>
            <img src={image} className='img-fluid' alt="Product" />
        </div>
    );
}



const leftSliderRef = useRef(null);
const rightSliderRef = useRef(null);
let leftAutoplayInterval = null;
let rightAutoplayInterval = null;

// Function to start the slider autoplay for left slider
const startLeftAutoplay = () => {
    leftAutoplayInterval = setInterval(() => {
        // leftSliderRef.current.slickNext();
    }, 5000);
}

// Function to stop the slider autoplay for left slider
const stopLeftAutoplay = () => {
    clearInterval(leftAutoplayInterval);
}

// Function to start the slider autoplay for right slider
const startRightAutoplay = () => {
    rightAutoplayInterval = setInterval(() => {
        // rightSliderRef.current.slickPrev(); // Use slickPrev for right slider to move towards right
    }, 5000);
}

// Function to stop the slider autoplay for right slider
const stopRightAutoplay = () => {
    clearInterval(rightAutoplayInterval);
}

const leftSettings = {
    dots: false,
    infinite: true,
    speed: 4000, // Adjust speed as needed
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear', // Set to linear for smooth scrolling
    slidesToShow: 1.66,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
    arrows: false, // Hide arrow buttons
    onMouseEnter: stopLeftAutoplay, // Stop autoplay on mouse enter
    onMouseLeave: startLeftAutoplay, // Restart autoplay on mouse leave
};

const rightSettings = {
    ...leftSettings, // Copy settings from left slider
    rtl: true, // Set Right-to-Left to true for right slider
    onMouseEnter: stopRightAutoplay, // Stop autoplay on mouse enter
    onMouseLeave: startRightAutoplay, // Restart autoplay on mouse leave
};

  return (
    <div className='container my-5 py-3' style={{overflowX:'hidden'}}>
        <div className='row'>
            <div className='col-lg-6 colo-12 py-2' style={{backgroundColor:'#F2E6D6'}}>
                    <div className='slide-search-sec d-flex text-center justify-content-center' >
                    <div className='col-md-8 col-10 justify-content-center text-center'> {/* Added text-center class */}
                   
                    <form>
                        <div className="py-3">
                            <input type="search" placeholder='What are you looking for?' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                    </form>


                </div>
                    </div>
                    <div className='slide-section'>
            <div className='left-slide mt-3' onMouseEnter={stopLeftAutoplay} onMouseLeave={startLeftAutoplay}>
                <Slider ref={leftSliderRef} {...leftSettings}>
                    <CustomSlide image={Product1} />
                    <CustomSlide image={Product2} />
                    <CustomSlide image={Product2} />
                    {/* Add more slides as needed */}
                </Slider>
            </div>
            <div className='right-slide mt-3' onMouseEnter={stopRightAutoplay} onMouseLeave={startRightAutoplay}>
                <Slider ref={rightSliderRef} {...rightSettings}>
                    <CustomSlide image={Product1} />
                    <CustomSlide image={Product2} />
                    <CustomSlide image={Product1} />
                    {/* Add more slides as needed */}
                </Slider>
            </div>
        </div>
               

            </div>

            <div className='col-lg-6 colo-12 py-2'>
            <div className='content-sec'>
            <div className='d-flex justify-content-start'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#E3EFCE', marginTop:'20px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px'}} className='btn'>Easy to launch</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'start', color:'#0B0C10', marginTop:'20px', marginBottom:'15px'}}>Create and sell custom 
on-demand products</h2>

<p className='mb-5'>A full administration printing background. Print shirts for yourself 
or your online business</p>

<div className='row'>
    <div className='col-md-6 col-6'>
       <div className='easy-lounch-icon-box'>
        <img src={Icon1} className='img-fluid' />
        <h3>Sell globally,<br/>produce locally</h3>
        <p>Duis aute irure dolor in 
reprehenderit in voluptate 
velit esse cillum dolore.</p>
       </div>
    </div>

    <div className='col-md-6 col-6'>
    <div className='easy-lounch-icon-box'>
        <img src={Icon2} className='img-fluid' />
        <h3>World <br/>wideshipping</h3>
        <p>Duis aute irure dolor in 
reprehenderit in voluptate 
velit esse cillum dolore.</p>
       </div>
        </div>
</div>
</div>
            </div>
        </div>
    </div>
  )
}
