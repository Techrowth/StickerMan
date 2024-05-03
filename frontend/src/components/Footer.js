import React from 'react'
import PaymentIcon from '../assets/img/icon/payment.png';
import SunriseImg from '../assets/img/banner/sunrise.png';
import BottomLine from '../assets/img/icon/bottom-line.png';
import TwitterIcon from '../assets/img/icon/twitter.png';
import InstaIcon from '../assets/img/icon/instagram.png';
import FacebookIcon from '../assets/img/icon/facebook.png';
import YoutubeIcon from '../assets/img/icon/youtube.png';

export default function
  () {
  return (
    <div>
      <div className="footer">
        <div className="first-footer-row">
          <div className="container">

            <div className="row">
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Our Information</h3>
                  <img src={BottomLine} className="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <div className="row g-2">
    <div className="col-2"> {/* Adjusted to col-1 */}
        <div className="banner-text">
            <i className="fas fa-map-marker-alt" style={{ color: '#66fcf1', fontSize:'18px' }} />
        </div>
    </div>

    <div className="col-10" style={{marginLeft:'-15px'}}> {/* Adjusted to col-11 */}
        <div className="location-details">
            <p style={{lineHeight:'22px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
</div>

<div className="row g-2 mt-3">
    <div className="col-2">
        <div className="banner-text">
            <i className="fas fa-envelope" style={{ color: '#66fcf1', fontSize:'18px' }} />
        </div>
    </div>

    <div className="col-10" style={{ marginLeft: '-15px' }}>
        <div className="location-details">
            <p>example@example.com</p>
        </div>
    </div>
</div>


<div className="row g-2 mt-3">
    <div className="col-2"> {/* Adjusted to col-1 */}
        <div className="banner-text">
            <i className="fas fa-phone-alt" style={{ color: '#66fcf1', fontSize:'18px' }} />
        </div>
    </div>

    <div className="col-10" style={{marginLeft:'-15px'}}> {/* Adjusted to col-11 */}
        <div className="location-details">
            <p>+91 123456789</p>
        </div>
    </div>
</div>

<div class="social-icons-row">
<div class="social-icon">
        <img src={TwitterIcon} alt="Social Icon 4" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={InstaIcon} alt="Social Icon 3" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={YoutubeIcon} alt="Social Icon 1" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={FacebookIcon} alt="Social Icon 2" class="social-icon-img" />
    </div>



   
</div>


            </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Quick Links</h3>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">About Us</p>
                  <p className="mb-0">Contact</p>
                  <p className="mb-0">FAQs</p>
                  <p className="mb-0">Size Chart</p>
                  <p className="mb-0">Delivery Information</p>
                </div>
              </div>

              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Services</h3>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">Contact Us</p>
                  <p className="mb-0">Track Order</p>
                  <p className="mb-0">Chat Support</p>
                  <p className="mb-0">Call Support</p>
                 
                </div>
              </div>

              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum" style={{marginTop:'60px'}}>
                  

                  <p className="mb-0">Privacy Policy</p>
                  <p className="mb-0">Terms & Conditions</p>
                  <p className="mb-0">Shipping Policy</p>
                  <p className="mb-0">Refund Policy</p>
                </div>
              </div>

            </div>
            <div className="middle-border" />


            {/* <div className="col-12 text-center mt-5 colpywright-line">
              <p>Copyright © 2024 Sunrise Sliver Smiths | Powered by Techrowth</p>
            </div> */}

          </div>
        </div>
      </div>

    </div>
  )
}
