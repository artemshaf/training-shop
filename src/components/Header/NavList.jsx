import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavList = () => {
    const data = useSelector((state) => state.headerNav.headerNav);

    const dataList = data.map((d) => {

        return (
            <li className="Header__nav__list-item" key={d.text}>
                <Link to={d.to}>{d.text}</Link>
            </li>
        );
    });

    return (
        <ul className="Header__nav__list lstn">
            {dataList}
        </ul>
    );
};

export default NavList;
