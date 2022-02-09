import "./subscribe.scss";

const Subscribe = () => {
    return (
        <div className="Subcribe-container">
            <section className="Subcribe container">
                <img src={`${process.env.PUBLIC_URL}/imgs/promo/women.png`} alt="" />
                <div>
                    <span>Special Offer</span>
                    <p>
                        Subscribe <br />
                        And Get 10% Off
                    </p>
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
                <img src={`${process.env.PUBLIC_URL}/imgs/promo/men.png`} alt="" />
            </section>
        </div>
    );
};

export default Subscribe;
