import React, { useState, useLayoutEffect } from 'react';
import OrderAddress from '../components/OrderAddress';
import OrderDelivery from '../components/OrderDelivery';
import OrderPayment from '../components/OrderPayment';
import OrderPlaceOrder from '../components/OrderPlaceOrder';
import OrderCheckout from '../components/OrderCheckout';
import OrderSuccessfully from '../components/OrderSuccessfully';
import OrderCheckoutDetails from '../components/OrderCheckoutDetails';
import CheckoupForm from '../components/CheckoupForm';
import HomeTestomonials from '../components/HomeTestomonials';

export default function Checkout() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const [selectedComponent, setSelectedComponent] = useState('OrderAddress');

  const handleMenuClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <>
      <div className='container order-checkout-page my-5'>
        <div className='row' style={{ marginBottom: '20px' }}>
          <div className="col-xl-7 col-lg-7">

        <CheckoupForm/>

          </div>
          <div className="col-xl-5 col-lg-5">
            <OrderCheckoutDetails />
          </div>
        </div>
      </div>
      <HomeTestomonials/>
    </>
  );
}
