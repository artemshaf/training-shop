import { Link, HashRouter as Router } from "react-router-dom";

const ShopLogo = () => {
    return (
        <Router>
            <Link to="/">
                <img className="Header__nav__logo" src={process.env.PUBLIC_URL + "/imgs/icons/CleverShop.svg"} alt="logo" />
            </Link>
        </Router>
    );
};

export default ShopLogo;
