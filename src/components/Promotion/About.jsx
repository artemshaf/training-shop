import { useSelector } from "react-redux";

const About = () => {
    const data = useSelector((state) => state.bannerAbout.bannerAbout);

    const dataList = data.map((d) => {
        const keyPlug = d.descr.substr(0, 5);

        return (
            <li key={keyPlug}>
                <img src={d.img} alt="img" />
                <div>
                    <span>{d.title}</span>
                    <p>{d.descr}</p>
                </div>
            </li>
        );
    });
    return <ul className="lstn About-list">{dataList}</ul>;
};

export default About;
