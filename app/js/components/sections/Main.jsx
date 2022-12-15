import React from 'react';

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
                            <button className="main__btn btn">Запросить данные</button>
                        </div>
                    </div>
                    <div className="main__inner main__inner--bg"></div>
                </div>
            </div>
        </section>
    );
}