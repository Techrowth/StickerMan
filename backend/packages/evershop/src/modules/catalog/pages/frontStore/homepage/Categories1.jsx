import React from 'react';
import Button from '@components/frontStore/cms/Button';
import './FeaturedCategories.scss';

export default function FeaturedCategories() {
  return (
    <div className="mx-3 my-3" style={{marginTop:"5rem",marginBottom:"5rem"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container" >
        <div className='d-flex' style={{ margin:"0 auto", border:"1px solid #F2F2F2", backgroundColor:"#F2F2F2"}}>
      
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/c1.png" alt="" className='shirt' />
            <Button url="/products" title="T-Shirt" variant="new1" className="banner11" style={{fontSize:"0.8rem"}}/>
          
   
        
        </div>
        <div className='d-flex' style={{ margin:"0 auto", border:"1px solid #F2F2F2", backgroundColor:"#F2F2F2"}}>
      
      <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/c2.png" alt="" className='shirt' />
      <Button url="/products" title="Hoodie" variant="new1" className="banner11" style={{fontSize:"0.8rem"}}/>
    

  
  </div>
  <div className='d-flex' style={{ margin:"0 auto", border:"1px solid #F2F2F2", backgroundColor:"#F2F2F2"}}>
      
      <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/c3.png" alt="" className='shirt' />
      <Button url="/products" title="Shirt" variant="new1" className="banner11" style={{fontSize:"0.8rem"}}/>
    

  
  </div>
   
  
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'Categories1',
  sortOrder: 10
};
