import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Footer({ themeConfig: { copyRight } }) {
  const [email, setEmail] = useState(''); // State to manage the email input value

  const handleSubscribe = () => {
    // Add your logic for handling subscription here
    // For now, let's just clear the input field
    setEmail('');
  };

  return (
   <>

        <div className="first-footer-row">
          <div className="container">
            <div className="row">
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h3>Our Information</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <div className='mt-1' style={{display:"flex",gap:"2rem"}}>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/location-pin_3179068.svg" alt="" style={{width:"2rem"}} />
                  <p>Bukkhad - Hungry For Fashion<br/>Next Mahalakshmi Metro Station<br/>Bangalore - 560086</p>
                  </div>
                  <div className='mt-1' style={{display:"flex",gap:"2rem"}}>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/mail_646135.svg" alt="" style={{width:"2rem"}} />
                  <p>bukkhad@gmail.com</p>
                  </div>
                  <div className='mt-1' style={{display:"flex",gap:"2rem"}}>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/support_3249904.svg" alt="" style={{width:"2rem"}} />
                  <p>+91 9876543210</p>
                  </div>
                  <div className='mt-2' style={{display:"flex",gap:"2rem"}}>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/whatsapp_733641+1.svg" alt="" style={{width:"2.5rem"}} />
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/facebook_1384005.svg" alt="" style={{width:"2.5rem"}} />
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/instagram_1384015.svg" alt="" style={{width:"2.5rem"}} />
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/youtube_1384012.svg" alt="" style={{width:"2.5rem"}} />

             
                  </div>
                </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h3>Quick Links</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <p className="my-1">About Us</p>
                  <p className="my-1">Contact</p>
                  <p className="my-1">FAQs</p>
                  <p className="my-1">Size Chart</p>
                  <p className="my-1">Delivery Information</p>
                </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h3>Services</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <p className="my-1">Contact Us</p>
                  <p className="my-1">Track Order</p>
                  <p className="my-1">Chat Support</p>
                  <p className="my-1">Call Support</p>
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h3>Get Your Latest Update !</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <div className="social-icpons">
                  <p className="my-1">Subscribe to our latest newsletter to get news about special discounts</p>
                  <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{border:"1px solid #66FCF1", borderRadius:"0", padding:"10px"}}
                  />
                  <button className="btn btn-primary mt-1" onClick={handleSubscribe} style={{border:"1px solid #45A29E",padding:"0.7rem 5rem", backgroundColor:"#45A29E"}}>
                    Subscribe
                  </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-border" />
            <div className="row">
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Men Cloths</h3>
                 <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <p className="my-1">Round Neck T-shirt</p>
                  <p className="my-1">V-Cut Neck T-shirt</p>
                  <p className="my-1">Full Sleev T-shirt</p>
                  <p className="my-1">Oversized T-shirt</p>
                  <p className="my-1">Vest</p>
                  <p className="my-1">Customized Works</p>
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Women Cloths</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <p className="my-1">Round Neck T-shirt</p>
                  <p className="my-1">V-Cut Neck T-shirt</p>
                  <p className="my-1">Full Sleev T-shirt</p>
                  <p className="my-1">Oversized T-shirt</p>
                  <p className="my-1">Fashion T-shirt</p>
                  <p className="my-1">Customized Works</p>
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Customize Cloths</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <p className="my-1">Men Cloths</p>
                  <p className="my-1">Women Cloths</p>
               
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>100% Secure Payment</h3>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/Group+1000003375.svg" alt="" className='mt-1'/>
                  <img src="https://techrowth.s3.eu-north-1.amazonaws.com/SDV/payment.png" alt className="img-fluid mt-1" />
                </div>
              </div>
            </div>
            <div className="middle-border" />

            <div className="col-12 text-center mt-4 colpywright-line">
              <p>Copyright © 2024 Bhukkhad . All Rights Bhukkhad. Powered By <a href='https://techrowth.com/'>Techrowth Pvt ltd</a></p>
            </div>

          </div>
        </div>
        </>
  );
}

Footer.propTypes = {
  themeConfig: PropTypes.shape({
    copyRight: PropTypes.string
  })
};

Footer.defaultProps = {
  themeConfig: {
    copyRight: '© 2024 Bhukkhad. All Rights Reserved.'
  }
};

export default Footer;

export const layout = {
  areaId: 'footer',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      copyRight
    }
  }
`;
