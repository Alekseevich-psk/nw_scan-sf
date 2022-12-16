import React from "react";

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

                <div className="res__info">
                    <h2 className="res__info-sub-title sub-title">Общая сводка</h2>
                    <div className="res__info-desc">Найдено 4 221 вариантов</div>
                    <div className="res__info-slider-wrap">
                        <div className="res__info-list">
                            <div className="res__info-list-item">Период</div>
                            <div className="res__info-list-item">Всего</div>
                            <div className="res__info-list-item">Риски</div>
                        </div>
                        <div className="res__info-slider swiper-container">
                            <div className="res__info-wrapper swiper-wrapper">
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                                <div className="res__info-slide swiper-slide">
                                    <div className="res__info-date">10.09.2021</div>
                                    <div className="res__info-cont">5</div>
                                    <div className="res__info-cont">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="res__news">
                    <h2 className="res__news-sub-title sub-title">Список документов</h2>
                    <div className="res__news-wrapper">
                        <div className="res__news-item n-item">
                            <div className="n-item__info">
                                <div className="n-item__date">13.09.2021</div>
                                <a href="/" className="n-item__source">Комсомольская правда KP.RU</a>
                            </div>
                            <div className="n-item__title">Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
                            <div className="n-item__cat n-item__cat--techno">Технические новости</div>
                            <div className="n-item__picture">
                                <img src="./images/preview-news.jpg" alt=""/>
                            </div>
                            <div className="n-item__desc">
                                <p>
                                    SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение
                                    прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет.
                                    Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon
                                    и других топовых компаниях.
                                </p>
                                <p>
                                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство.
                                    80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают
                                    менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме,
                                    подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                                </p>
                            </div>
                            <div className="n-item__align">
                                <a href="" className="n-item__btn">Читать в источнике</a>
                                <div className="n-item__more">2 543 слова</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}