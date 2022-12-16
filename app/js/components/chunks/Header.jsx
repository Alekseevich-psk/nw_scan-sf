import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <Link to="/" className="header__inner header__inner--logo"></Link>
                        <div className="header__inner header__inner--nav">
                            <div className="header__nav nav">
                                <div className="nav__btn"></div>
                                <ul className="nav__list">
                                    <li className="nav__item">
                                        <Link to="/" className="nav__link">Главная</Link>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#tariff" className="nav__link">Тарифы</a>
                                    </li>
                                    <li className="nav__item">
                                        <a href="/faq" className="nav__link">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__inner header__inner--info">
                            <div className="header__info">
                                <div className="header__info-item">
                                    Использовано компаний <span>34</span>
                                </div>
                                <div className="header__info-item">
                                    Лимит по компаниям <span>100</span>
                                </div>
                            </div>
                        </div>
                        <div className="header__inner header__inner--user">
                            <div className="header__user">
                                <div className="header__user-text">
                                    <div className="header__name">Алексей А.</div>
                                    <button className="header__btn-out">Выйти</button>
                                </div>
                                <div className="header__avatar">
                                    <img src="./images/preview-user.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;