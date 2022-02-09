import Clothes from "../components/Clothes/Clothes";
import Promotion from "../components/Promotion/Promotion";
import Seasons from "../components/Seasons/Seasons";
import Subscribe from "../components/Subscribe/Subscribe";
import Blog from "../components/Blog/Blog";

const IndexPage = () => {
    return (
        <div>
            <Promotion />
            <Clothes sex={false} />
            <Clothes sex={true} />
            <Seasons />
            <Subscribe />
            <Blog />
        </div>
    );
};

export default IndexPage;
