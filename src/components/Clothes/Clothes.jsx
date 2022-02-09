import React from "react";
import Arrivals from "./Arrivals";
import Cards from "./Cards";
import "./clothes.scss";

const Clothes = ({sex}) => {
    let title;

    if (sex === true) {
        title = "MEN’S";
    } else {
        title = "WOMEN’S";
    }

    return (
        <section className="Clothes">
            <div className="container">
                <div>
                    <h2>{title.toUpperCase()}</h2>
                    <Arrivals />
                </div>
                <Cards sex={sex}/>
                <button>SEE ALL</button>
            </div>
        </section>
    );
};

export default Clothes;
