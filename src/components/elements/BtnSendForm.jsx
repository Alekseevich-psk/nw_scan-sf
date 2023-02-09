import React from "react";

export default function BtnSendForm(props) {
    return (
        <div className="search__align">
            <input
                type="submit"
                disabled={(props.requiredData) ? "" : "disabled"}
                className={"search__btn btn " + (props.requiredData ? "" : "disabled")} value="Поиск" />
            <span>* Обязательные к заполнению поля</span>
        </div>
    )
}