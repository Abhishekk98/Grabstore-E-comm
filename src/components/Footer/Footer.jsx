import React from "react";
import "./Footer.scss";
import { FalocationArrow, FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Paymet from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officiis
            amet quaerat minus similique perspiciatis reprehenderit odit, velit
            aliquam ipsam, explicabo et consequatur totam reiciendis numquam
            autem dolor neque pariatur.
          </div>
        </div>
        <div className="col">
            <div className="title">contact</div>
            <div className="c-item">
                <FaLocationArrow />
                <div className="text">california street 24/B</div>
            </div>
            <div className="c-item">
                <FaMobileAlt />
                <div className="text">+91-9999999999</div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">Support@grab.com</div>
            </div>
        </div>
        <div className="col">
            <div className="title">categories</div>
            <div className="text">menu item 1</div>
            <div className="text">menu item 2</div>
            <div className="text">menu item 3</div>
            <div className="text">menu item 4</div>
            <div className="text">menu item 5</div>


        </div>
        <div className="col">
            <div className="title">Pages</div>
            <div className="text">menu item 5</div>
            <div className="text">menu item 5</div>
            <div className="text">menu item 5</div>
            <div className="text">menu item 5</div>
            <div className="text">menu item 5</div>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
