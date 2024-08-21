import React from 'react'
import './footer.scss'
import logo from '../../assets/logo1.png'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="cont1">
                    <div className="cont-menu">
                        <div className="cont cont-menu1">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="cont-menu">
                        <div className="cont">
                            <h2>About Us</h2>
                            <a href="">Our Heritage</a>
                            <a href="">Coffeehouse</a>
                            <a href="">Our Company</a>
                        </div>
                    </div>
                    <div className="cont-menu">
                        <div className="cont">
                            <h2>Responsibility</h2>
                            <a href="">Diversity</a>
                            <a href="">Community</a>
                            <a href="">Ethical Sourcing</a>
                            <a href="">Environmental Stewardship</a>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                    <div className="cont-menu">
                        <div className="cont">
                            <h2>Quick Links</h2>
                            <a href="">Privacy Policy</a>
                            <a href="">FAQs</a>
                            <a href="">Starbucks India Mobile App Terms of Use</a>
                            <a href="">Customer Service</a>
                            <a href="">Starbucks Rewards Day Offer</a>
                            <a href="">Delivery</a>
                            <a href="">Season's Gifting</a>
                            <a href="">Offer for Beverage Subscription at Starbucks.</a>
                            <a href="">Loyalty Program Terms and Conditions</a>
                            <a href="">Beverage Subscription</a>
                        </div>
                    </div>
                    <div className="cont-menu">
                        <div className="cont">
                            <h2>SOCIAL MEDIA</h2>
                            <div className="media-icon">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                    <div className="cont-menu">
                        <div className="cont cont-menu6">
                            <img src={img14} alt="" />
                            <img src={img15} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cont2">
                    <div className="menu-cont">
                        <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}