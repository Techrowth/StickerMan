import React, { useLayoutEffect } from 'react';
import AboutSection from '../components/AboutSection';
import AboutHowWorks from '../components/AboutHowWorks';
import AboutBottomSearch from '../components/AboutBottomSearch';


export default function AboutUs() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container order-checkout-page my-5'>
         {/* <AboutSection/>
         <AboutHowWorks/>
         <AboutBottomSearch/> */}
      </div>
    </>
  );
}
