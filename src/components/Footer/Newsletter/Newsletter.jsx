import React from "react";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedIn,
}from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newslatter-section">
    <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accordance with Privacy policy</div>
        <div className="social-icons">
          
        </div>
    </div>
    
    </div>;
};

export default Newsletter;
