import InfoPanel from "./InfoPanel";
import "./header.scss";
import NavPanel from "./NavPanel";

const Header = () => {
    return (
        <header className="Header">
            <section className="Header__info">
                <InfoPanel/>
            </section>
            <section className="Header__nav">
                <NavPanel/>
            </section>
        </header>
    );
};

export default Header;
