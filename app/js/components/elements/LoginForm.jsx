import React from "react";
import { connect } from "react-redux";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputNameValue: 'sf_student1',
            inputNamePass: 'Es#m*VvaA7'
        }

    }

    handleClick(e) {
        e.preventDefault();

        const params = new URLSearchParams();
        params.set('login', this.inputNameValue.value);
        params.set('password', this.inputPassValue.value);

        fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: params
        }).then(res => res.ok ? res : Promise.reject(res))
            .then(data => {
                this.props.editAuth(true)
            })
            .catch(() => console.log('some error'));
    }

    render() {
        return (
            <form className="form__auth active">
                <div className="form__item">
                    <label htmlFor="name" className="form__label label">Логин или номер телефона:</label>
                    <input ref={(input) => this.inputNameValue = input} type="text" id="name" name="name" className="form__input input" defaultValue={this.state.inputNameValue} />
                    <div className="form__error">Введите корректные данные</div>
                </div>
                <div className="form__item">
                    <label htmlFor="password_auth" className="form__label label">Пароль:</label>
                    <input ref={(input) => this.inputPassValue = input} type="password" id="password_auth" name="password" className="form__input input" defaultValue={this.state.inputNamePass} />
                    <div className="form__error">Введите корректные данные</div>
                </div>
                <div className="form__align">
                    <input
                        onClick={this.handleClick.bind(this)}
                        type="submit"
                        className="form__btn btn"
                        value="Войти" />
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