import { useSelector } from "react-redux";

const AboutItem = () => {
    const data = useSelector((state) => state.bannerAbout.bannerAbout);

    const dataList = data.map((d) => {
        const keyPlug = d.descr.substr(0,5);

        return (
            <li key={keyPlug}>
                <img src={d.img} alt="img" />
                <span>{d.title}</span>
                <p>{d.descr}</p>
            </li>
        );
    });
    return <ul>{dataList}</ul>;
};

export default AboutItem;
