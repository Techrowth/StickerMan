import React, { useRef, useEffect } from 'react';
import PointIcon from '../assets/img/icon/point.png';
import Icon1 from '../assets/img/icon/features-1.png';
import Icon2 from '../assets/img/icon/features-2.png';
import Icon3 from '../assets/img/icon/features-3.png';
import Icon4 from '../assets/img/icon/features-4.png';
import Icon5 from '../assets/img/icon/features-5.png';
import Icon6 from '../assets/img/icon/features-6.png';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import CustomPrevIcon from '../assets/img/icon/prev.png'; // Your custom previous button
import CustomNextIcon from '../assets/img/icon/next.png'; // Your custom next button

export default function HomeOurFetures() {


        // Custom previous arrow component
        const CustomPrevArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="custom-prev-arrow" onClick={onClick}>
                    <img src={CustomPrevIcon} alt="Previous" />
                </div>
            );
        }
    
        // Custom next arrow component
        const CustomNextArrow = (props) => {
            const { onClick } = props;
            return (
                <div className="custom-next-arrow" onClick={onClick}>
                    <img src={CustomNextIcon} alt="Next" />
                </div>
            );
        }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };



  return (
    <div className='container my-5 py-3' style={{overflowX:'hidden'}} >
        <div className='row'>


            <div className='col-lg-6 colo-12 py-2'>
            <div className='content-sec'>
            <div className='d-flex justify-content-start'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#D3F2FF', marginTop:'10px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px'}} className='btn'>Our features</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'start', color:'#0B0C10', marginTop:'10px', marginBottom:'10px'}}>Creating the perfect 
custom product</h2>

<p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Top quality prints using the latest technology</p>
<p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Mix and match colors, sizes, and designs</p>
<p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Fast and free standard shipping</p>
<p className='mb-2' style={{color:'#313131', fontWeight:'500'}}><img style={{height:'21px', width:'21px'}} src={PointIcon} className='img-fluid mx-2'/>Customer happiness guarantee</p>

<div className='get-more-details pt-4'>
   <button className='btn' style={{backgroundColor:'#0B0C10', color:'#fff', fontSize:'14px', borderRadius:'22px', fontWeight:'500', padding:'7.5px 20px'}}>Get Started Now <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></button> 
</div>




</div>
</div>


<div className='col-lg-3 col-12 desktop-section'>
<div className='fetures-box'>
    <h3>High quality offset 
printing</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon1} className='img-fluid' />
</div>
</div>
</div>

<div className='col-lg-3 col-12 desktop-section'>
<div className='fetures-box'>
    <h3>Low minimums & 
easily customizable</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon2} className='img-fluid' />
</div>
</div>
</div>


<div className='col-lg-3 col-12 desktop-section'>
<div className='fetures-box'>
    <h3>Faster delivery - 
Standard or Express</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon3} className='img-fluid' />
</div>
</div>
</div>


<div className='col-lg-3 col-12 desktop-section'>
<div className='fetures-box'>
    <h3>Access on any device</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon4} className='img-fluid' />
</div>
</div>
</div>

<div className='col-lg-3 col-12 desktop-section'>
<div className='fetures-box'>
    <h3>100% Secure 
payment</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon5} className='img-fluid' />
</div>
</div>
</div>

<div className='col-lg-3 col-12 desktop-section'>
 
<div className='fetures-box'>
    <h3>Free 24/7 design & 
logistics support</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon6} className='img-fluid' />
</div>
</div>
   
</div>



<div className='mobile-section'>

<style>
                {`
                    .custom-prev-arrow,
                    .custom-next-arrow {
                        position: absolute;
                       
                        top: 50%;
                        transform: translateY(-50%);
                        cursor: pointer;
                    }

                    .custom-prev-arrow img,
                    .custom-next-arrow img {
                        display: block;
                        width: 40px; /* Adjust width as needed */
                        height: auto; /* Maintain aspect ratio */
                    }

                    .custom-prev-arrow {
                        left: -33px; /* Adjust left position */
                    }

                    .custom-next-arrow {
                        right: -33px; /* Adjust right position */
                    }

                    .slide-category img{
                      padding: 15px;
                    }

                `}
            </style>

           
                <Slider {...settings}>

<div className='fetures-box'>
    <h3>High quality offset 
printing</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon1} className='img-fluid' />
</div>
</div>


<div className='fetures-box'>
    <h3>Low minimums & 
easily customizable</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon2} className='img-fluid' />
</div>
</div>



<div className='fetures-box'>
    <h3>Faster delivery - 
Standard or Express</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon3} className='img-fluid' />
</div>
</div>



<div className='fetures-box'>
    <h3>Access on any device</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon4} className='img-fluid' />
</div>
</div>


<div className='fetures-box'>
    <h3>100% Secure 
payment</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon5} className='img-fluid' />
</div>
</div>


<div className='fetures-box'>
    <h3>Free 24/7 design & 
logistics support</h3>
<p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
<h6 >Explore More <i style={{fontSize:'13px'}} class="fas fa-chevron-right mx-2"></i></h6>

<div className='d-flex justify-content-end'>
<img src={Icon6} className='img-fluid' />
</div>
</div>


    </Slider>

</div>





</div>
</div>
  )
}
