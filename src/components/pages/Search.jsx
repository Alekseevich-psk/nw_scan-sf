import React from "react";

export default function Search() {
    return (<section className="search">
        <div className="container">
            <div className="search__fly-picture search__fly-picture--one">
                <img src="./images/svg/ico-a4.svg" alt="" />
            </div>
            <div className="search__fly-picture search__fly-picture--two">
                <img src="./images/svg/ico-folders.svg" alt="" />
            </div>

            <div className="search__wrapper">
                <h1 className="search__s-title s-title">Найдите необходимые данные в пару кликов.</h1>
                <div className="search__desc">Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</div>
                <form className="search__form">
                    <div className="search__form-wrapper">
                        <div className="search__form-inner">
                            <div className="search__item">
                                <label for="inn" className="search__label label">ИНН компании <sup>*</sup></label>
                                <input type="number" className="search__input input" placeholder="10 цифр" />
                            </div>
                            <div className="search__item">
                                <label for="inn" className="search__label label">Тональность</label>
                                <select id="pet-select">
                                    <option value="">Любая</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="hamster">Hamster</option>
                                    <option value="parrot">Parrot</option>
                                    <option value="spider">Spider</option>
                                    <option value="goldfish">Goldfish</option>
                                </select>
                            </div>
                            <div className="search__item">
                                <label for="inn" className="search__label label">Количество документов в выдаче
                                    <sup>*</sup></label>
                                <input type="number" className="search__input input" placeholder="От 1 до 1000" />
                            </div>
                            <div className="search__wrap-item">
                                <label for="" className="search__label label">Диапазон поиска <sup>*</sup></label>
                                <div className="search__wrap-input">
                                    <input type="date" className="search__input input" id="date" name="date" />
                                    <input type="date" className="search__input input" id="date" name="date" />
                                </div>
                            </div>
                        </div>

                        <div className="search__form-inner">
                            <div className="search__item">
                                <input type="checkbox" className="search__checkbox checkbox" name="1" id="1" />
                                <label for="1" className="search__ch-label ch-label">Признак максимальной полноты</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label">Упоминания в бизнес-контексте</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label">Главная роль в публикации</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label ch-label--disabled">Публикации только с
                                    риск-факторами</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label ch-label--disabled">Включать технические
                                    новости рынков</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label">Включать анонсы и календари</label>
                            </div>
                            <div className="search__item">
                                <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                                <label for="1" className="search__ch-label ch-label">Включать сводки новостей</label>
                            </div>

                            <div className="search__align">
                                <input type="submit" className="search__btn btn disabled" value="Поиск" />
                                <span>* Обязательные к заполнению поля</span>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

            <div className="search__bg"></div>
        </div>
    </section>)
}