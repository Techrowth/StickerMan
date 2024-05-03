import React from 'react';
import Button from '@components/frontStore/cms/Button';
import './FeaturedCategories1.scss';

export default function FeaturedCategories() {
  return (
    <div className="mx-3 my-3" style={{marginTop:"5rem",marginBottom:"5rem"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container">
        <div className='banner1'>
          <div className="text-center">
            <img src="/assets/homepage/banner/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase " style={{fontSize:"1.5rem", fontFamily:"600"}}>Men’s Casual Style <br/>T-Shirt</h3>
          <div className="mb-1">
            <p>
            Starting at <span style={{color:"#FF0000"}}>₹ 300.00</span>
            </p>
          </div>
          <Button url="/products" title="Shop Now" variant="new" className="banner11" style={{fontSize:"0.8rem"}}/>
        </div>
        <div className='banner2'>
          <div>
            <img src="/assets/homepage/banner/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase " style={{fontSize:"1.5rem", fontFamily:"600"}}>Buy trendy pink<br/>hoodie for women</h3>

          <div className="mb-1">
            <p>
            Starting at <span style={{color:"#FF0000"}}>₹ 300.00</span>
            </p>
          </div>
          <Button url="/products" title="Shop Now" variant="new" className="banner11" style={{fontSize:"0.8rem"}}/>
        </div>
        <div className='banner3'>
          <div>
            <img src="/assets/homepage/banner/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase" style={{fontSize:"1.5rem", fontFamily:"600"}}>Check out latest<br/>blue T-shirt</h3>

          <div className="mb-1">
            <p>
            Starting at <span style={{color:"#FF0000"}}>₹ 300.00</span>
            </p>
          </div>
          <Button url="/products" title="Shop Now" variant="new" className="banner11" style={{fontSize:"0.8rem"}}/>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content1',
  sortOrder: 10
};
