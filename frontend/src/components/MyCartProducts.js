import React from 'react'
import { Link } from 'react-router-dom';

import StickerImg from '../assets/img/icon/sticker-box.png';
import EditIcon from '../assets/img/icon/edit.png';
import TrashIcon from '../assets/img/icon/trash-gray.png';




export default function MyCartProducts() {
  return (
    <div className="cart__page">
        <div className='cart-Product-box'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-12'>
                <img src={StickerImg} className='img-fluid' />
                <div className='edit-iocn text-center mt-2'>
                <img src={EditIcon} style={{width:'15px', height:'15px'}} className='img-fluid' />
                </div>
              
            </div>

            <div className='col-lg-10 col-md-9 col-12'>
              <div className='row'>
                <div className='col-md-8 col-12'>
                <p className='mb-0' style={{color:'#323232', fontWeight:'700'}}>Luxury Metal Stickers <span style={{fontWeight:'500'}}>(Stickers by Material)</span></p>

                
                </div>

                <div className='col-md-2 col-6 text-start'>
                <p className='mb-0' style={{color:'#323232', fontWeight:'600'}}>25 Qty</p>
                  </div>

                  <div className='col-md-2 col-6 text-end'>
                <p className='mb-0' style={{color:'#ED5565', fontWeight:'600'}}>$123.00</p>
                  
                  </div>
               
              </div>

              <div className='product-des'>
                  <p className='mb-0'>Job Name:519617   <span style={{color:'#FE646F', cursor:'pointer'}}><i style={{fontSize:'11px'}} class="fas fa-pencil-alt mx-1"></i> Edit </span></p>
                  <p className='mb-0'>Size: 25.4 Width x 25.4 Height (MM)</p>
                  <p className='mb-0'>Width (MM): 25.4</p>
                  <p className='mb-0'>Height (MM): 25.4</p>
                  <p className='mb-0'>Metal Color : Gold</p>
                  <p className='mb-0'>Surface Application: Any Surface(Indoor/Outdoor)</p>
                  <p className='mb-0'>Printing Time: 7 Business Days</p>
                </div>

                <p className='my-3' style={{borderBottom:'1px solid #E6E9ED'}}></p>

                <div className='row'>
                  <div className='col-6'>
                  <p className='mb-0' style={{color:'#0A617D', fontWeight:'500', fontSize:'13px'}}>Edit Order</p>
                  </div>
                  <div className='col-6 text-end'>
                  <img src={TrashIcon} style={{width:'15px', height:'15px', cursor:'pointer'}} className='img-fluid' />

                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

  )
}
