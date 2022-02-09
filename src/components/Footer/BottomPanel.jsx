const BottomPanel = () => {
    return (
        <div className="Footer-bottom">
            <div className="Footer container">
                <span>Copyright © 2032 all rights reserved</span>
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
                <span>Clevertec.ru/training</span>
            </div>
        </div>
    );
};

export default BottomPanel;
