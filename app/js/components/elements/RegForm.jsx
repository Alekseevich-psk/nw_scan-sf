import React from "react";


export default class RegForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}