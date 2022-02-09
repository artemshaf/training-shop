import { useSelector } from "react-redux";
import './socials.scss';

const Socials = () => {
    const info = useSelector((state) => state.socials.socials);

    const dataList = info.map((data) => {
        const keyPlug = data.href.substr(0,9);

        return (
            <li key={keyPlug}>
                <a href={data.href}>
                    <img src={process.env.PUBLIC_URL + data.img} alt={keyPlug}/>
                </a>
            </li>
        );
    });

    return <ul className="lstn widgets-socials">{dataList}</ul>;
};

export default Socials;
