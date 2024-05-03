import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StartImg from '../assets/img/icon/Star.png';
import CustomPrevButton from '../assets/img/icon/left-arrow.png'; // Your custom previous button
import CustomNextButton from '../assets/img/icon/right-arrow.png'; // Your custom next button

export default function HomeTestomonials() {
  const sliderRef = useRef(null); // Define a ref for the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for mobile view
        settings: {
          slidesToShow: 1,
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

    <div className='testomonials-main'>
    <div className="container col-lg-11 col-md-12 col-12 product-card-design" style={{overflowX:'hidden'}}>

    <div className='d-flex justify-content-center'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#D2F1FE', marginTop:'10px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px', }} className='btn'>Our features</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'20px', marginBottom:'30px'}}>See what our customers say</h2>

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

      <div className='testo-main'>


      <div className="testimonial-slider-wrapper">
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

          <div className='slide-box mx-1'>
          <div className='slide-main'>
          <h6>Jane Cooper</h6>
          <img src={StartImg} style={{height:'22px'}} className='img-fluid'/>
          <h3>T-shirt printing made easy</h3>
            <p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
          </div>
          </div>

          <div className='slide-box mx-1'>
          <div className='slide-main'>
          <h6>Jane Cooper</h6>
          <img src={StartImg} style={{height:'22px'}} className='img-fluid'/>
          <h3>T-shirt printing made easy</h3>
            <p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
          </div>
          </div>


          <div className='slide-box mx-1'>
          <div className='slide-main'>
          <h6>Jane Cooper</h6>
          <img src={StartImg} style={{height:'22px'}} className='img-fluid'/>
          <h3>T-shirt printing made easy</h3>
            <p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
          </div>
          </div>


          <div className='slide-box mx-1'>
          <div className='slide-main'>
          <h6>Jane Cooper</h6>
          <img src={StartImg} style={{height:'22px'}} className='img-fluid'/>
          <h3>T-shirt printing made easy</h3>
            <p>Choose from 412 custom products, customize your design with graphics, text or your own uploaded images.</p>
          </div>
          </div>

        </Slider>
      </div>

      {/* Navigation buttons */}
     
      </div>
    </div>



</div>



  )
}
