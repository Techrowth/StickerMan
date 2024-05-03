import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Slider from 'react-slick';  // Import the Slider component
import 'slick-carousel/slick/slick.css';  // Import the styles for the slider
import 'slick-carousel/slick/slick-theme.css';  // Import the styles for the slider
import './MainBanner.scss';

export default function MainBanner() {


  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000, 
  };

  return (

      <div className="">
        <div />
        <div className="text-center md:text-left ">
          <Slider {...sliderSettings}> {/* Use the Slider component */}
            <div>
            <a  href="/products">
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/1.png" alt="" /></a>
            </div>
            <div>
            <a  href="/products">
             <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/2.png" alt="" /></a>
            </div>
            <div>
            <a  href="/products">
             <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/3.png" alt="" /></a>
            </div>
            {/* Add additional slides as needed */}
          </Slider>
          <p />
        </div>
      </div>
  
  );
}

export const layout = {
  areaId: 'mainbanner',
  sortOrder: 1,
};
