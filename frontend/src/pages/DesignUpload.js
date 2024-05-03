import React, {useState, useLayoutEffect} from 'react'
import UploadDesign1 from '../components/UploadDesign1';

export default function DesignUpload() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <UploadDesign1/>
  )
}
