const Seasons = () => {
    return (
        <div className="container">
            {/* seasons-cards */}
            <section>
                <ul className="Seasons-cards">
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imgs/promo/promo2_1.png`} alt="" />
                        <div>
                            <span>New Season</span>
                            <p>lookbook collection</p>
                        </div>
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imgs/promo/promo2_2.png`} alt="" />
                        <div>
                            <span>Sale</span>
                            <p>Get UP to 50% off</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Seasons;
