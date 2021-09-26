import React from 'react';
import './Footer.css'
import apple from '../../Images/App Store Badge.png'
import google from '../../Images/Google Play Badge.png'
const Footer = () => {
  return (
    <footer className="">
      <div className="container footer-area">
        <div className="row d-flex justify-content-between align-items-start py-5">
          <div className="col-md-7 footer-menu align-items-end">
            <div>
              <a href="/download">Download Now</a>
              <a href="/License">License</a>
            </div>
            <div className="footer-menu py-2">
              <a href="/about">About</a>
              <a href="/service">Service</a>
              <a href="/Blog">Blog</a>
              <a href="/career">Careers</a>
              <a href="/help">Help</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="footer-social d-md-block d-none">
              <a href="/facebook"><i className="fab fa-facebook"></i></a>
              <a href="/twitter"><i className="fab fa-twitter"></i></a>
              <a href="/linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="/insta"><i className="fab fa-instagram"></i></a>
              <a href="/youtube"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="pt-4 d-md-block d-none">&copy; 2021 Atlantic Business Technologies, Inc. All rights reserved</p>
          </div>
          <div className="col-md-4 d-lg-grid justify-content-end footer-right mt-4 mt-sm-0">
            <p className="text-white">Get the App</p>
            <a href="/apple"><img src={apple} className="d-block pb-3" alt="" /></a>
            <a href="/google"><img src={google} alt="" /></a>
          </div>
          <div className="footer-social d-md-none pt-4">
            <a href="/facebook"><i className="fab fa-facebook"></i></a>
            <a href="/twitter"><i className="fab fa-twitter"></i></a>
            <a href="/linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href="/instagram"><i className="fab fa-instagram"></i></a>
            <a href="/youtube"><i className="fab fa-youtube"></i></a>
          </div>
          <p className="d-md-none pt-4 text-white">&copy; 2021 Atlantic Business Technologies, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;