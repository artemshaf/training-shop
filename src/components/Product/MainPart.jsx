import "./product.scss";
import iconSize from "./size.svg";
import iconHeart from "./heart.svg";
import iconScales from "./scales.svg";
import iconCar from "./car.svg";
import iconRefresh from "./refresh.svg";
import iconMail from "./mail.svg";

const MainPart = ({ data }) => {

    return (
        <div className="Product__main">
            <div className="container">
                <div className="Product__main__imgs">
                    <ul>
                        <li>
                            <div></div>
                            <div></div>
                        </li>
                        <li>
                            <img src={data.img[0]} alt="" />
                        </li>
                        <li>
                            <img src={data.img[0]} alt="" />
                        </li>
                        <li>
                            <img src={data.img[0]} alt="" />
                        </li>
                        <li>
                            <img src={data.img[0]} alt="" />
                        </li>
                    </ul>
                    <div>
                        <img src={data.img[0]} alt="" />
                    </div>
                </div>
                <div className="Product__main__descr">
                    <div className="Product__main__descr__colors">
                        <p>
                            <h3>Color: </h3>
                            <span>Blue</span>
                        </p>
                        <ul>
                            <li>
                                <img src={data.img[0]} alt="" />
                            </li>
                            <li>
                                <img src={data.img[0]} alt="" />
                            </li>
                            <li>
                                <img src={data.img[0]} alt="" />
                            </li>
                            <li>
                                <img src={data.img[0]} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="Product__main__descr__sizes">
                        <p>
                            <h3>Size: </h3>
                            <span>S</span>
                        </p>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                        </ul>
                        <img src={iconSize} alt="" />
                    </div>
                    <div className="Product__main__descr__price">
                        <span>$ {data.price}</span>
                        <button>Add to card</button>
                        <div>
                            <img src={iconHeart} alt="" />
                            <img src={iconScales} alt="" />
                        </div>
                    </div>
                    <ul className="Product__main__descr__info-icons">
                        <li>
                            <img src={iconCar} alt="" />
                            <p>Shipping & Delivery</p>
                        </li>
                        <li>
                            <img src={iconRefresh} alt="" />
                            <p>Returns & Exchanges</p>
                        </li>
                        <li>
                            <img src={iconMail} alt="" />
                            <p>Ask a question</p>
                        </li>
                    </ul>
                    <div className="Product__main__descr__guarant">
                        <div>
                            <span>guaranteed safe checkout</span>
                            <hr></hr>
                        </div>
                        <ul>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/Stripe.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/AES.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/paypal.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/visa.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/mastercard.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/discover.svg`} alt="" />
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/american-express.svg`} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="Product__main__descr__descr">
                    DESCRIPTION
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPart;
