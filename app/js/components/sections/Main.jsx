import React from 'react';
import { link } from "react-router-dom";

export default function Main() {
    return (
        <section className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__inner main__inner--text">
                        <h1 className="main__m-title m-title">
                            сервис <br /> по поиску публикаций <br /> о компании <br /> по его ИНН
                        </h1>
                        <div className="main__desc">
                            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                        </div>
                        <div className="main__align">
                            {/* <link to="{search}" className="main__btn btn">Запросить данные</link> */}
                        </div>
                    </div>
                    <div className="main__inner main__inner--bg"></div>
                </div>
            </div>
        </section>
    );
}