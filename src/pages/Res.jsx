import React, { useState } from "react";

import News from "./../components/sections/News";
import ResInfo from "./../components/sections/ResInfo";
import Preloader from "./../components/elements/Preloader";

export default function Res(props) {
    return (
        <section className="res">
            <div className="container">

                <div className={"res__main-wrapper hide"}>
                    <div className="res__main-inner">
                        <h1 className="res__main-s-title s-title">Ищем. Скоро будут результаты</h1>
                        <div className="res__main-desc">
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </div>
                    </div>
                    <div className="res__main-inner res__main-inner--picture"></div>
                </div>
                <ResInfo />
                <News />
            </div>

        </section>
    )
}