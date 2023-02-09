import { getElementError } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function InputDate(props) {
    const [error, setError] = useState(false);
    const [date, setDate] = useState({ start: null, end: null });

    function onChangeValue(e) {

        if (e == null) return;

        if (e.target.classList.contains('input--date-start')) {

            setDate(prevState => ({
                ...prevState,
                start: e.target.value
            }));

            validate(e.target.value, date.end);
            props.getInputValue(e.target.value, 'start-date');
        }

        if (e.target.classList.contains('input--date-end')) {
            props.getInputValue(e.target.value, 'start-end');

            setDate(prevState => ({
                ...prevState,
                end: e.target.value
            }));

            validate(date.start, e.target.value);
            props.getInputValue(e.target.value, 'start-end');
        }

    }

    function validate(valueStart, valueEnd) {
        (valueStart > valueEnd) ? setError(true) : setError(false);
    }

    return (
        <div className="search__wrap-item">
            <label className="search__label label">Диапазон поиска <sup>*</sup></label>
            <div className="search__wrap-input">
                <input
                    onChange={onChangeValue}
                    type="date"
                    className="search__input input input--date-start"
                    name="date" />
                <input
                    onChange={onChangeValue}
                    type="date"
                    className="search__input input input--date-end"
                    name="date2" />
                <p className={"search__error error " + (error ? '' : 'hide')}>Некорректный ввод данных</p>
            </div>
        </div>
    )
}