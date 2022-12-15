import React from "react";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./chunks/Header.jsx";
import Footer from "./chunks/Footer.jsx";

import Main from "./sections/Main.jsx";
import WhyMe from "./sections/WhyMe.jsx";
import Tariff from "./sections/Tariff.jsx";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <WhyMe/>
                <Tariff/>
                <Footer />
            </div>
        );
    }
}

export default App;