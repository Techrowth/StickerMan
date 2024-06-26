import React from 'react'

export default function FullLineSearchBox() {
    return (
        <div className='full-line-serchbox'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-12'>
                        <form className="product__view--search__form" action="#">
                            <label>
                                <input className="product__view--search__input border-0" placeholder="Search by" type="text" />
                            </label>
                            <button className="product__view--search__btn" aria-label="shop button" type="submit">
                                <svg className="product__view--search__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
