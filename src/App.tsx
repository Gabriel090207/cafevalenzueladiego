import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

    return (
        <>
            <ScrollToTop />

            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                </Routes>
            </main>

            <Footer />
        </>
    );

}

export default App;