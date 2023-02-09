import React, { useState } from "react";

export default function Input(props) {
    const [error, setError] = useState(false);

    function onChangeValue(e) {
        (!validate(e)) ? props.getInputValue(e.target.value, props.id) : props.getInputValue(null, props.id);
    }

    function validate(e) {
        if (props.validate === 'length') {
            if (e.target.value.length <= 9 || e.target.value.length >= 11) {
                setError(true);
                return true;
            }

            setError(false);
            return false;
        }


        if (props.validate === 'count') {
            if (e.target.value <= 0 || e.target.value >= 1001) {
                setError(true);
                return true;
            }

            setError(false);
            return false;
        }
    }

    return (
        <div className="search__item">
            <label htmlFor="inn" className="search__label label">{props.label} <sup>*</sup></label>
            <input
                onBlur={validate}
                onChange={onChangeValue}
                type={props.type}
                className={"search__input input input--inn " + (error ? 'input--error' : '')}
                placeholder={props.placeholder} />
            <p className={"search__error error " + (error ? '' : 'hide')}>Некорректный ввод данных</p>
        </div>
    )
}