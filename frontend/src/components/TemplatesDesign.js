import React from 'react'
import { Link } from 'react-router-dom';

import Imgae1 from '../assets/img/other/category-short-1.png';
import Imgae2 from '../assets/img/other/category-short-2.png';
import Imgae3 from '../assets/img/other/category-short-3.png';
import Imgae4 from '../assets/img/other/category-short-4.png';

export default function TemplatesDesign() {
    const categories = [
        { name: 'Food & Beverage', count: 7 },
        { name: 'Fashion', count: 4 },
        { name: 'Arts & Crafts', count: 5 },
        { name: 'Marketing & PR', count: 4 },
        { name: 'Real Estate', count: 8 },
        { name: 'Retail', count: 12 },
        { name: 'Education & Training', count: 8 },
        { name: 'Wedding, Events & Parties', count: 9 },
        { name: 'Beauty, Health & Spas', count: 5 },
        { name: 'Music & Dj', count: 7 },
        // Add more categories as needed
      ];
    
  return (
    <div className='container my-5'>
        <div className='row'>

        <div className='col-lg-3 col-12'>
        <div className='product-details'>

            <div className='product-fliter'>
                <p>Sizes</p>

                <select className="form-select form-select-lg shape-selector" style={{marginTop:'-10px'}} aria-label=".form-select-lg example">
  <option selected>Round</option>
  <option value="1">Suare</option>
  <option value="2">Other</option>
</select>
<p style={{fontSize:'11px'}}>Measures 0.87" x 0.87"</p>
            </div>


            <div className='product-fliter mt-4'>
                <p className='mb-2'>Industry</p>
<p style={{borderBottom:'1px solid #E6E9ED'}} />

<div className="filter-container">
      {categories.map((category, index) => (
        <div key={index} className="filter-category">
          <input type="checkbox" className='mx-2 filter-check' id={`category${index + 1}`} />
          <label htmlFor={`category${index + 1}`}>{category.name}</label>
          <span className="category-count">{category.count}</span>
        </div>
      ))}
    </div>

            </div>

            
            <div className='product-fliter mt-4'>
                <p className='mb-2'>Color</p>
<p style={{borderBottom:'1px solid #E6E9ED'}} />

<p>After you choose a template, you can customize the color of the text or background to create something that’s uniquely yours.</p>

            </div>


        </div>
        </div>


        <div className='col-lg-9 col-12'>
           <p className='text-end' style={{color:'#4461A9'}}> 22 Design Templates</p>

           <div className='templates-main'>
            <div className='row'>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae1} />
                          <img className="product__items--img product__secondary--img" src={Imgae1}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae2} />
                          <img className="product__items--img product__secondary--img" src={Imgae2}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae3} />
                          <img className="product__items--img product__secondary--img" src={Imgae3}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae4} />
                          <img className="product__items--img product__secondary--img" src={Imgae4}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae1} />
                          <img className="product__items--img product__secondary--img" src={Imgae1}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae2} />
                          <img className="product__items--img product__secondary--img" src={Imgae2}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae3} />
                          <img className="product__items--img product__secondary--img" src={Imgae3}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae4} />
                          <img className="product__items--img product__secondary--img" src={Imgae4}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae1} />
                          <img className="product__items--img product__secondary--img" src={Imgae1}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae2} />
                          <img className="product__items--img product__secondary--img" src={Imgae2}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae3} />
                          <img className="product__items--img product__secondary--img" src={Imgae3}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae4} />
                          <img className="product__items--img product__secondary--img" src={Imgae4}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae1} />
                          <img className="product__items--img product__secondary--img" src={Imgae1}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae2} />
                          <img className="product__items--img product__secondary--img" src={Imgae2}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae3} />
                          <img className="product__items--img product__secondary--img" src={Imgae3}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae4} />
                          <img className="product__items--img product__secondary--img" src={Imgae4}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>


                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae1} />
                          <img className="product__items--img product__secondary--img" src={Imgae1}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae2} />
                          <img className="product__items--img product__secondary--img" src={Imgae2}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae3} />
                          <img className="product__items--img product__secondary--img" src={Imgae3}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>

                <div className='col-lg-3 col-md-4 col-6'>
                <div  className="product-card">
                <div className="image-container">

                  <div className="col mb-30 ">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link to='/product-details' className="product__items--link" >
                          <img className="product__items--img product__primary--img" src={Imgae4} />
                          <img className="product__items--img product__secondary--img" src={Imgae4}  />
                        </Link>
                        
                      </div>

                      <div className='product-title d-flex justify-content-center'>
                            <div className='product-title-btn-small'>
                            Sticker by Use 
                            </div>
                      </div>
  
                    </div>
                  </div>

                </div>
                {/* <h5 className="product-title text-center mt-3">{product.title}</h5> */}
              </div>
                </div>
            </div>
           </div>
        </div>
    </div>


    <div className='realted-deratals text-center mb-5' style={{marginTop:'80px'}}>
    <p style={{fontWeight:'500', color:'#000'}}>Showing 23 / 51 designs</p>

    <button className='btn ' style={{backgroundColor:'#62D69E', marginTop:'5px', fontWeight:'600', borderRadius:'4px', fontSize:'14px', padding:'6px 22px'}}><span></span>Load More Images</button>
    </div>
                
    </div>
  )
}
