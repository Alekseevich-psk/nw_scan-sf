import React from "react";
import { connect } from "react-redux";
import login from "../../api/login.js";
import { Navigate } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputNameValueDef: 'sf_student1',
            inputNamePassDef: 'Es#m*VvaA7',
            errorForm: false,
            redirectOnSearchPage: false
        }

    }

    handleClick(e) {
        e.preventDefault();

        this.props.preloader(true);

        const loginStatus = new Promise((resolve, reject) => {
            login(this.inputNameValueDef.value, this.inputPassValue.value, resolve, reject);
        });

        loginStatus
            .then(
                result => {
                    // console.log(result);
                    this.props.preloader(false);
                    this.props.editAuth(true);
                    this.setState({
                        errorForm: false,
                        redirectOnSearchPage: true
                    });

                },
                error => {
                    // console.log(error);
                    this.props.preloader(false);
                    this.setState({
                        errorForm: true,
                    });
                }
            );

    }

    render() {
        return (
            <form className={"form__auth " + (this.state.errorForm ? "error-form" : "")}>
                {this.state.redirectOnSearchPage ? (<Navigate to="/search" replace={true} />) : ''}
                <div className="form__item">
                    <label htmlFor="name" className="form__label label">Логин или номер телефона:</label>
                    <input ref={(input) => this.inputNameValueDef = input} type="text" id="name" name="name" className="form__input input" defaultValue={this.state.inputNameValueDef} />
                    <div className="form__error error">Введите корректные данные</div>
                </div>
                <div className="form__item">
                    <label htmlFor="password_auth" className="form__label label">Пароль:</label>
                    <input ref={(input) => this.inputPassValue = input} type="password" id="password_auth" name="password" className="form__input input" defaultValue={this.state.inputNamePassDef} />
                    <div className="form__error error">Введите корректные данные</div>
                </div>
                <div className="form__align">
                    <input
                        onClick={this.handleClick.bind(this)}
                        type="submit"
                        className="form__btn btn"
                        value="Войти" />
                    <div className="form__error error">Проверьте данные</div>
                </div>
                <div className="form__enter">
                    <div className="form__enter-title">Войти через:</div>
                    <a href="" className="form__enter-ico form__enter-ico--gg"></a>
                    <a href="" className="form__enter-ico form__enter-ico--fb"></a>
                    <a href="" className="form__enter-ico form__enter-ico--ya"></a>
                </div>
            </form>
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
)(LoginForm);