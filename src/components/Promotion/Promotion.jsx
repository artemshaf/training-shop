import Cards from "./Cards";
import About from "./About";
import "./promotion.scss";

const Promotion = () => {
    

    return (
        <section className="Promo">
            <div className="container">
                <Cards/>
                <About/>
            </div>
        </section>
    )
};

export default Promotion;
