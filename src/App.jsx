import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Category from "./pages/Category";
import IndexPage from "./pages/IndexPage";
import PNF from "./pages/PNF";
import Product from "./pages/Product";

const App = () => {
    console.log(process.env.PUBLIC_URL);
    console.log();
    return (
        <section className="App">
            <Router>
                <Header />
                <Routes path="/training-shop">
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/men" element={<Category />} />
                    <Route path="/women" element={<Category />} />
                    <Route path="/:id" element={<Product />} />
                    <Route path="/*" element={<PNF />} />
                </Routes>
                <Footer />
            </Router>
        </section>
    );
};

export default App;
