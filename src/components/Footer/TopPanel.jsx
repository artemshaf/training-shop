import React from "react";
import Socials from "../Widgets/Socials";

const TopPanel = () => {
    return (
        <div className="Footer-top">
            <div className="container">
                <span>BE IN TOUCH WITH US:</span>
                <div>
                    <input type="text" placeholder="Enter your email" />
                    <button>Join Us</button>
                </div>
                <Socials />
            </div>
        </div>
    );
};

export default TopPanel;
