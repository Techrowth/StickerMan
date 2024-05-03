import React, {useLayoutEffect } from 'react';
import DesignYourOwn from '../components/DesignYourOwn'
import CategorySection from '../components/CategorySection';

export default function CategoryPage() {
    
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <CategorySection/>
    <DesignYourOwn/>

    </>
  )
}
