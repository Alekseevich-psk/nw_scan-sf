import React from "react";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./elements/Header.jsx";
import Footer from "./elements/Footer.jsx";

import Index from "./pages/Index.jsx";
import Auth from "./pages/Auth.jsx";
import Res from "./pages/Res.jsx";
import Search from "./pages/Search.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('test');

        // fetch("https://gateway.scan-interfax.ru/api/v1/account/login")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     });
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/res" element={<Res />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>

            </div>
        );
    }
}

export default App;