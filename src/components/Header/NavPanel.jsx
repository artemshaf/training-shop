import ShopLogo from "../Widgets/ShopLogo";
import NavList from "./NavList";
import Icons from "./Icons";

const NavPanel = () => {
    return (
        <section className="Header__nav-container container">
            <ShopLogo/>
            <NavList/>
            <div className="Header__nav__icons">
                <Icons/>
            </div>
            
        </section>
    );
};

export default NavPanel;
