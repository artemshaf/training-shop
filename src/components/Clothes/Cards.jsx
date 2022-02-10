import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./clothes.scss";

const Cards = (props) => {
    const data = useSelector((state) => state.things.things);

    const getData = ( ) => data;

    const dataList = data.map((d) => {
        // const keyPlug = d.name.substr(0,5);
        if(d.id[0]===props.sex[0]){
            return(
                <li key={d.id}>
                    <Link to={`/${d.id}`} onClick={() => getData}>
                        <img src={d.img[0]} alt="img"/>
                    </Link>
                    <p>{d.name}</p>
                    <div>
                        <span>$ {d.price}</span>
                        {/* <span>{d.discount}</span> */}
                        <ul>
                            <li datatype={`rating-${d.rating}`}>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
                            </li>
                            <li datatype={`rating-${d.rating}`}>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
                            </li>
                            <li datatype={`rating-${d.rating}`}>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
                            </li>
                            <li datatype={`rating-${d.rating}`}>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
                            </li>
                            <li datatype={`rating-${d.rating}`}>
                                <img src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
                            </li>
                        </ul>
                    </div>
                </li>
            )
        } else {
            return null;
        }
    });

    return (
        <ul className="Clothes__cards">
            {dataList}
        </ul>
    );
};

export default Cards;
