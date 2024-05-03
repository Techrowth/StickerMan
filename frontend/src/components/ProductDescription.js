import React from 'react'

export default function ProductDescription() {
  return (
    <div className="container py-3">
      <div className="product__tab--content">
        <div className="product__tab--content__step mb-30">
          {/* <h2 className="product__tab--content__title h4 mb-10">Oversize Cotton T-shirt</h2> */}
          <h6 style={{fontWeight:'600', marginBottom:'20px'}}>Your address may be fixed, but not your options. </h6>
          <p className="product__tab--content__desc" style={{fontWeight:'500', color:'#000'}}>Address labels can make you feel comfortable sharing your details on. They make for good branding opportunities too. Whether you are a brand or selling your products on small scale, little personalization will only be beneficial.</p>
        </div>
        <div className="product-details product__tab--content__step mb-4">
  {/* <h4 className="product__tab--content__title mb-10">More Details</h4> */}
  <ul style={{ listStyle: 'disc' }}>
  <li className="product__tab--content__list">
  Print labels and stickers with a minimum order of 25 pcs. 
  </li>
  <li className="product__tab--content__list">
  We offer custom sizes in addition to industry specific needs. Sizes starting from 0.5inch diameter.
  </li>
  <li className="product__tab--content__list">
  Diverse catalogue of materials ranging from standard paper to writable & transparent.  
  </li>

  <li className="product__tab--content__list">
  Our esteemed delivery partners are Blue Dart, DHL, DTDC, & Indian post.
  </li>
  <li className="product__tab--content__list">
  The friendly team of experts at Kraftix Digital, ensure all your queries are answered at the earliest.
  </li>
  <li className="product__tab--content__list">
  Need further assistance? Click here to whatsapp, or start a live chat, or call us on +91 123456789, or Email us at stickerman.in
  </li>
  
</ul>

</div>

    



      </div>
    </div>
  )
}
