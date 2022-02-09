import Socials from "../Widgets/Socials";
import InfoPanelData from "./InfoPanelData";

const InfoPanel = () => {
    return (
        <div className="container Header__info-container">
            <InfoPanelData/>
            <Socials/>
        </div>
    );
};

export default InfoPanel;
