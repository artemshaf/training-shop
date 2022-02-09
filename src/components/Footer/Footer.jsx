import "./footer.scss";
import MidPanel from "./MidPanel";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";

const Footer = () => {
    return (
        <section className="Footer">
            <TopPanel/>
            <MidPanel/>
            <BottomPanel/>
        </section>
    );
};

export default Footer;
