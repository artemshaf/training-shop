import { useSelector } from "react-redux";


const InfoPanelData = () => {
    const info = useSelector((state) => state.infoPanelData.infoPanelData); 
    const dataList = info.map((data) => {
        const keyPlug = data.text.substr(0,9);
    
        return (
            <li key={keyPlug}>
                <img src={process.env.PUBLIC_URL + data.img} alt={keyPlug} />
                <span>{data.text}</span>
            </li>
        )
    });

    return (
        <ul className="lstn info-panel-list">
            {dataList}
        </ul>
    );
};

export default InfoPanelData;
