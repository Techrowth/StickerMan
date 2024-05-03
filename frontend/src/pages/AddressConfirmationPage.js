import React, { useLayoutEffect } from 'react';

import MyCartProducts from '../components/MyCartProducts';
import MyCartCheckout from '../components/MyCartCheckout';
import IconBox2 from '../components/IconBox2';
import SimilarProductsSlide from '../components/SimilarProductsSlide';
import MyCartPriceSummary from '../components/MyCartPriceSummary';
import HomeTestomonials from '../components/HomeTestomonials';
import OrderCheckoutDetails from '../components/OrderCheckoutDetails';
import PriceSummary from '../components/PriceSummary';
import ShippingAddress from '../components/ShippingAddress';


export default function AddressConfirmationPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <section className="cart__section section--padding">
                <div className="container">
                    <div className="cart__section--inner">
                        <form action="#">
                            <h2 className="cart__title" style={{fontWeight:'500'}}>Shopping</h2>
                            <div className="row">
                                <div className="col-lg-8">
                                    <ShippingAddress />
                                </div>
                                <div className="col-lg-4">
                                <PriceSummary />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        <HomeTestomonials/>


        </>
    )
}
