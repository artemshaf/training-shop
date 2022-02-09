import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Category from "./pages/Category";
import IndexPage from "./pages/IndexPage";
import PNF from "./pages/PNF";

const App = () => {
    console.log(process.env.PUBLIC_URL);
    console.log();
    return (
        <section className="App">
            <Header />
            <Router>
                <Routes path="/training-shop">
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/men" element={<Category />} />
                    <Route path="/women" element={<Category />} />
                </Routes>
            </Router>
            <Footer />
        </section>
    );
};

export default App;
