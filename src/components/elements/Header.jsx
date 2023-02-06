import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import profileInfo from "../../api/profileInfo";
import MiniPreloader from "./MiniPreloader";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            limitCompany: null,
            usedCompany: null,
            showPreloader: true
        }
    }

    handleClick() {
        localStorage.clear();
        this.props.editAuth(false);
    }

    componentDidMount() {

        if (this.props.authStore.auth) {
            const profileInfoStatus = new Promise((resolve, reject) => {
                profileInfo(resolve, reject);
            });

            profileInfoStatus
                .then(
                    result => {
                        this.setState({
                            limitCompany: result.eventFiltersInfo.companyLimit,
                            usedCompany: result.eventFiltersInfo.usedCompanyCount,
                            showPreloader: false,
                        });
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }

    showPreloader() {
        if (this.state.showPreloader) return <MiniPreloader />;
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
                        <div className={"header__inner header__inner--info " + (this.props.authStore.auth ? 'show' : 'hide')}>
                            <div className="header__info">
                                <div className="header__info-item">
                                    Использовано компаний: {this.showPreloader()}<span>{this.state.usedCompany}</span>
                                </div>
                                <div className="header__info-item">
                                    Лимит по компаниям: {this.showPreloader()}<span>{this.state.limitCompany}</span>
                                </div>
                            </div>
                        </div>
                        <div className="header__inner header__inner--user">
                            <div className={"header__user header__user--auth " + (this.props.authStore.auth ? 'show' : 'hide')}>
                                <div className="header__user-text">
                                    <div className="header__name">Андрей И.</div>
                                    <Link
                                        to="/"
                                        onClick={this.handleClick.bind(this)}
                                        className="header__btn-out">Выйти</Link>
                                </div>
                                <div className="header__avatar">
                                    <img src="./images/preview-user.png" alt="" />
                                </div>
                            </div>
                            <div className={"header__user header__user--no-auth " + (this.props.authStore.auth ? 'hide' : 'show')}>
                                <Link to="/" className="header__link header__link--reg">Регистрация</Link>
                                <Link to="/auth" className="header__link header__link--enter">Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({
        authStore: state.authStore
    }),
    dispatch => ({
        editAuth: (value) => {
            dispatch({ type: "AUTH", value: value })
        }
    })
)(Header);