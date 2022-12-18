import React from "react";
import LoginForm from "../elements/LoginForm.jsx";
import RegForm from "../elements/RegForm.jsx";

export default function Auth() {
    return (
        <section className="auth">
            <div className="container">
                <div className="auth__wrapper">
                    <div className="auth__inner">
                        <h1 className="auth__s-title s-title">Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                        <div className="auth__bg auth__bg--desktop"></div>
                    </div>
                    <div className="auth__inner">
                        <div className="auth__form form form--auth">
                            <div className="form__wrap-btn-select">
                                <button className="form__select-form active">Войти</button>
                                <button className="form__select-form">Зарегистрироваться</button>
                            </div>
                            <LoginForm/>
                            <RegForm/>
                        </div>
                        <div className="auth__bg auth__bg--mobile"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}