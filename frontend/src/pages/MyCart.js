import React, { useLayoutEffect } from 'react';

import MyCartProducts from '../components/MyCartProducts';
import MyCartCheckout from '../components/MyCartCheckout';
import IconBox2 from '../components/IconBox2';
import SimilarProductsSlide from '../components/SimilarProductsSlide';
import MyCartPriceSummary from '../components/MyCartPriceSummary';
import HomeTestomonials from '../components/HomeTestomonials';


export default function MyCart() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <section className="cart__section section--padding">
                <div className="container">
                    <div className="cart__section--inner">
                        <form action="#">
                            <h2 className="cart__title" style={{fontWeight:'500'}}>Shopping Cart</h2>
                            <div className="row">
                                <div className="col-lg-8">
                                    <MyCartProducts />
                                </div>
                                <div className="col-lg-4">
                                    <MyCartPriceSummary/>
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
