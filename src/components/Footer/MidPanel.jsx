import React from "react";

const MidPanel = () => {
    return (
        <div className="Footer-mid">
            <ul className="container">
                <li>
                    <h3>Categories</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Beauty</li>
                    </ul>
                </li>
                <li>
                    <h3>Infomation</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </ul>
                </li>
                <li>
                    <h3>Useful links</h3>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping & Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </li>
                <li>
                    <h3>CONTACT US</h3>
                    <ul>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/imgs/icons/map.svg`} alt="" />
                            <span>Belarus, Gomel, Lange 17</span>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/imgs/icons/phone.svg`} alt="" />
                            <span>+375 29 100 20 30</span>
                        </li>
                        <li>
                            <img className="icon-f" src={`${process.env.PUBLIC_URL}/imgs/icons/oClock.svg`} alt="" />
                            <span>All week 24/7</span>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/imgs/icons/mail.svg`} alt="" />
                            <span>info@clevertec.ru</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default MidPanel;
