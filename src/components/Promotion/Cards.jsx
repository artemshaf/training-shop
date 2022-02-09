import { useSelector } from "react-redux";

const Cards = () => {
    const data = useSelector((state) => state.banner.banner);

    const dataList = data.map((d) => {
        return (
            <li>
                <img src={d.img} alt="img" />
                <div>
                    {d.title.length>0 && (<span>{d.title}</span>)}
                    <p>{d.descr}</p>
                </div>
            </li>
        );
    });

    return <ul className="lstn Promo-cards">{dataList}</ul>;
};

export default Cards;
