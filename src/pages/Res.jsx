import React, { useEffect, useState } from "react";

import News from "./../components/sections/News";
import ResInfo from "./../components/sections/ResInfo";
import Preloader from "./../components/elements/Preloader";

export default function Res(props) {

    const [preloader, setPreloader] = useState(false);
    const [statusWorkResInfo, setStatusWorkResInfo] = useState(false);
    const [statusWorkNews, setStatusWorkNews] = useState(false);

    const getStatusWork = (status, component) => {

        if (status && component === 'resInfo') {
            setStatusWorkResInfo(true)
        }

        if (status && component === 'News') {
            setStatusWorkResInfo(true)
        }

        if (statusWorkResInfo && statusWorkNews) {
            setTimeout(() => {
                setPreloader(false);
            }, 1500);
        }
    }


    return (
        <section className="res">
            <div className="container">

                <div className={"res__main-wrapper " + (preloader ? '' : 'hide')}>
                    <div className="res__main-inner">
                        <h1 className="res__main-s-title s-title">Ищем. Скоро будут результаты</h1>
                        <div className="res__main-desc">
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </div>
                    </div>
                    <div className="res__main-inner res__main-inner--picture"></div>
                </div>
                <ResInfo getStatusWork={getStatusWork} />
                <News />
            </div>

            <Preloader preloader={true} />
        </section>
    )
}