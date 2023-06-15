import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                This is my project of Ecommerce for College
             </div>
            </div>
            
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Shankharapur-7, Sankhu , Kathmandu , Nepal</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +977 9808059762</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: sthasabin17@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Catagories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbud</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Condition</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Nath 2023 CREATED BY SABINDRA NATH SHRESTHA
                </div>
                <img src={Payment} />
            </div>
        </div>



    </footer>;
};

export default Footer;
