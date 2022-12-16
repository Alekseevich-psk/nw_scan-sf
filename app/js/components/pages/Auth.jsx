import React from "react";

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
                            <form className="form__auth">
                                <div className="form__item">
                                    <label for="email" className="form__label label">Логин или номер телефона:</label>
                                    <input type="text" id="email" name="email" className="form__input input" />
                                        <div className="form__error">Введите корректные данные</div>
                                </div>
                                <div className="form__item">
                                    <label for="password" className="form__label label">Пароль:</label>
                                    <input type="password" id="password" name="password" className="form__input input" />
                                        <div className="form__error">Введите корректные данные</div>
                                </div>
                                <div className="form__align">
                                    <input type="submit" className="form__btn btn disabled" disabled value="Войти" />
                                        <a href="/" className="form__rem-pass">Восстановить пароль</a>
                                </div>
                                <div className="form__enter">
                                    <div className="form__enter-title">Войти через:</div>
                                    <a href="" className="form__enter-ico form__enter-ico--gg"></a>
                                    <a href="" className="form__enter-ico form__enter-ico--fb"></a>
                                    <a href="" className="form__enter-ico form__enter-ico--ya"></a>
                                </div>
                            </form>
                            <form className="form__reg active">
                                <div className="form__item">
                                    <label for="email" className="form__label label">Логин или номер телефона:</label>
                                    <input type="text" id="email" name="email" className="form__input input" />
                                        <div className="form__error">Введите корректные данные</div>
                                </div>
                                <div className="form__item">
                                    <label for="password" className="form__label label">Пароль:</label>
                                    <input type="password" id="password" name="password" className="form__input input" />
                                        <div className="form__error">Введите корректные данные</div>
                                </div>
                                <div className="form__align">
                                    <input type="submit" className="form__btn btn disabled" disabled value="Войти" />
                                </div>
                            </form>

                        </div>

                        <div className="auth__bg auth__bg--mobile"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}