import iconFilter from "./filter.svg";
import iconBurger from "./burger.svg";
import iconActionsDotted from "./actions-dotted.svg";

const ActionsPanel = () => {
    return (
        <div className="Category__actions-panel">
            <div className="container">
                <div className="actions__filter">
                    <img src={iconFilter} alt="" />
                    <span>Filter</span>
                </div>
                <div className="iconsList">
                    <img src={iconBurger} alt="" />
                    <img src={iconActionsDotted} alt="" />
                </div>
                <div className="Category__arrivals">BESTSELLERS </div>
            </div>
        </div>
    );
};

export default ActionsPanel;
