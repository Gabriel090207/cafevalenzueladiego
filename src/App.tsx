import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;