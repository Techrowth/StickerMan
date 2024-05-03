import React from 'react'

import Image1 from '../assets/img/categories/1.png';
import Image2 from '../assets/img/categories/2.png';
import Image3 from '../assets/img/categories/3.png';
import Image4 from '../assets/img/categories/4.png';
import Image5 from '../assets/img/categories/5.png';
import Image6 from '../assets/img/categories/6.png';
import Image7 from '../assets/img/categories/7.png';
import Image8 from '../assets/img/categories/8.png';
import Image9 from '../assets/img/categories/9.png';
import Image10 from '../assets/img/categories/10.png';
import Image11 from '../assets/img/categories/11.png';
import Image12 from '../assets/img/categories/12.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CustomPrevIcon from '../assets/img/icon/left-arrow.png';
import CustomNextIcon from '../assets/img/icon/right-arrow.png';




export default function HomeCustomPrint() {

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
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
};


  return (
    <div className='container my-5'  style={{overflowX:'hidden'}}>
        <div className='d-flex justify-content-center'>
        <p style={{color:'#000', fontSize:'13px', backgroundColor:'#D2F1FE', marginTop:'30px', marginBottom:'10px', fontWeight:'500', borderRadius:'20px', padding:'8px 20px', }} className='btn'>Shop product range</p>
        </div>
       
    <h2 className='' style={{fontWeight: '600', textAlign:'center', color:'#0B0C10', marginTop:'30px', marginBottom:'30px'}}>Custom print on demand products</h2>


    <div className='exclusive-looks mobile-section'>
           
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
   
               <Slider {...settings} >
                    
               <div className=' home-categories'>
  <img src={Image1} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image2} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className=' home-categories'>
  <img src={Image3} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image4} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image5} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image6} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image7} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image8} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image9} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image10} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image11} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className=' home-categories'>
  <img src={Image12} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>
         
   
                       </Slider>

                       </div>
    <div className='desktop-section'>  
<div className='row d-flex justify-content-center '>
  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image1} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image2} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image3} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>

  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image4} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image5} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>



  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image6} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>



  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image7} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image8} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>



  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image9} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image10} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image11} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>


  <div className='col-lg-3 col-md-4 col-12 home-categories'>
  <img src={Image12} className='img-fluid' alt />
  <h5>Round Sticker</h5>
  <p>Starts at ₹162</p>
  </div>



  </div>  
 
</div>
</div>
  )
}
