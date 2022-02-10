import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Category/Header";
import MainPart from "../components/Product/MainPart";

const Product = (props) => {
    const {id} = useParams();
    let data = useSelector((state) => state.things.things.filter((obj) => obj.id === id));
    data = data[0];
    
    return (
        <div>
            <Header title={data.name}/>
            <MainPart data={data}/>
        </div>
    );
};

export default Product;
