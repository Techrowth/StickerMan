import React, {useState, useLayoutEffect} from 'react'
import PreductPreviewDetails from '../components/PreductPreviewDetails';
import HomeTestomonials from '../components/HomeTestomonials';


export default function ProductPreview() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>
    <PreductPreviewDetails/>
    <HomeTestomonials/>
    </>

  )
}
