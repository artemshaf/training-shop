import { useLocation } from "react-router-dom";
import ActionsPanel from "../components/Category/ActionsPanel";
import Header from "../components/Category/Header";
import Cards from "../components/Clothes/Cards";
import iconLoading from './sq.svg';

import "../components/Category/category.scss";

const Category = () => {
    const loc = useLocation();
    const categoryTitle = loc.pathname.replace("/", "");

    const element = (
        <div>
            <Header title={categoryTitle.toUpperCase()} />
            <ActionsPanel />
            <div className="container">
                <Cards sex={`${categoryTitle.toLowerCase()}`} />
                <img className="loading-svg" src={iconLoading} alt=""/>
            </div>
        </div>
    );

    return <div>{element}</div>;
};

export default Category;
