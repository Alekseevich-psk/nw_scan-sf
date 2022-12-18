import React from "react";
import DocItem from "../elements/DocItem.jsx";
import ResInfo from "../sections/ResInfo.jsx";

export default function Res() {
    return (
        <section className="res">
            <div className="container">

                <div className="res__main-wrapper">
                    <div className="res__main-inner">
                        <h1 className="res__main-s-title s-title">Ищем. Скоро будут результаты</h1>
                        <div className="res__main-desc">
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </div>
                    </div>
                    <div className="res__main-inner res__main-inner--picture"></div>
                </div>

                <ResInfo/>

                <div className="res__news">
                    <h2 className="res__news-sub-title sub-title">Список документов</h2>
                    <div className="res__news-wrapper">
                        <DocItem/>
                    </div>
                </div>

            </div>
        </section>
    )
}