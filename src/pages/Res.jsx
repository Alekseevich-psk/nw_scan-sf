import React, { useState } from "react";

import News from "./../components/sections/News";
import ResInfo from "./../components/sections/ResInfo";
import Preloader from "./../components/elements/Preloader";

import histograms from "./../api/histograms";
import documents from "./../api/documents";

export default function Res(props) {

    const [preloader, setPreloader] = useState(true);


    const inputValues = JSON.parse(localStorage.getItem('inputValues'));
    const checkBoxValues = JSON.parse(localStorage.getItem('checkBoxValues'));



    return (
        <section className="res">
            <div className="container">

                <div className={"res__main-wrapper "}>
                    <div className="res__main-inner">
                        <h1 className="res__main-s-title s-title">Ищем. Скоро будут результаты</h1>
                        <div className="res__main-desc">
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </div>
                    </div>
                    <div className="res__main-inner res__main-inner--picture"></div>
                </div>
                <ResInfo />
            </div>
            {/* <Preloader preloader={preloader} /> */}
        </section>
    )
}