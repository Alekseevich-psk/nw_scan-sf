import React from "react";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./chunks/Header.jsx";
import Footer from "./chunks/Footer.jsx";

import Index from "./pages/Index.jsx";
import Auth from "./pages/Auth.jsx";
import Res from "./pages/Res.jsx";
import Search from "./pages/Search.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>

            </div>
        );
    }
}

export default App;