import { Link } from "react-router-dom";

const ShopLogo = () => {
    return (
        <Link to="/">
            <img className="Header__nav__logo" src={process.env.PUBLIC_URL + "/imgs/icons/CleverShop.svg"} alt="logo" />
        </Link>
    );
};

export default ShopLogo;
