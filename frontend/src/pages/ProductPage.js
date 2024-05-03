import React, {  useLayoutEffect } from 'react';
import ProductDetailsTab from '../components/ProductDetailsTab';
import SimilarProductsSlide from '../components/SimilarProductsSlide';
import IconBox from '../components/IconBox';
import ProductDetailsCard2 from '../components/ProductDetailsCard2';
import DesignYourOwn from '../components/DesignYourOwn';

export default function ProductPage() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<>
<div style={{marginBottom:'60px'}}>
 <ProductDetailsCard2/> 
 <ProductDetailsTab/>
 <SimilarProductsSlide />
 <DesignYourOwn/>


</div>
</>
  )
}
