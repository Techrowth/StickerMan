import React from 'react';
import Button from '@components/frontStore/cms/Button';
import './FeaturedCategories.scss';

export default function FeaturedCategories() {
  return (
    <div className="mx-3 my-3" style={{marginTop:"5rem",marginBottom:"5rem"}}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 container">
        <div className='d-flex' style={{display:"flex",gap:"1rem", margin:"0 auto"}}>
          <div className="text-center" style={{margin:"auto 0"}}>
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/shipping1+1.png" alt="" />
          </div>
          
          <div className="text-left">
         <h4>Shipping</h4>
         <h6>From handpicked sellers</h6>
          </div>
        
        </div>
        <div className='d-flex' style={{display:"flex",gap:"1rem", margin:"0 auto"}}>
          <div className="text-center" style={{margin:"auto 0"}}>
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/shipping2+1.png" alt="" />
          </div>
          
          <div className="text-left">
         <h4>Payment</h4>
         <h6>From handpicked sellers</h6>
          </div>
        
        </div>
        <div className='d-flex' style={{display:"flex",gap:"1rem", margin:"0 auto"}}>
          <div className="text-center" style={{margin:"auto 0"}}>
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/shipping3+1.png" alt="" />
          </div>
          
          <div className="text-left">
         <h4>Return</h4>
         <h6>From handpicked sellers</h6>
          </div>
        
        </div>
        <div className='d-flex' style={{display:"flex",gap:"1rem", margin:"0 auto"}}>
          <div className="text-center" style={{margin:"auto 0"}}>
            <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/shipping4+1.png" alt="" />
          </div>
          
          <div className="text-left">
         <h4>Support</h4>
         <h6>From handpicked sellers</h6>
          </div>
        
        </div>
  
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'Categories',
  sortOrder: 10
};
