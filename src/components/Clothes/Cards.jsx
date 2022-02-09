import { useSelector } from "react-redux";

const Cards = (props) => {
    const data = useSelector((state) => {
        if(props.sex===false){
            return state.womenThings.womenThings
        }else{
            return state.menThings.menThings
        }
        
    });

    const dataList = data.map((d) => {
        // const keyPlug = d.name.substr(0,5);

        return(
            <li>
                <img src={d.img[0]} alt="img"/>
                <p>{d.name}</p>
                <div>
                    <span>$ {d.price}</span>
                    {/* <span>{d.discount}</span> */}
                    <ul>
                        <li datatype={`rating-${d.rating}`}>
                            <img fill="#f00" src={`${process.env.PUBLIC_URL}/imgs/icons/rating.svg`} alt="" />
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
    });

    return (
        <ul className="Clothes__cards">
            {dataList}
        </ul>
    );
};

export default Cards;
