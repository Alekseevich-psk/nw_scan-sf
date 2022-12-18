import React from "react";


export default function DocItem() {
    return (
        <div className="res__news-item n-item">
            <div className="n-item__info">
                <div className="n-item__date">13.09.2021</div>
                <a href="/" className="n-item__source">Комсомольская правда KP.RU</a>
            </div>
            <div className="n-item__title">Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
            <div className="n-item__cat n-item__cat--techno">Технические новости</div>
            <div className="n-item__picture">
                <img src="./images/preview-news.jpg" alt="" />
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
    )
}