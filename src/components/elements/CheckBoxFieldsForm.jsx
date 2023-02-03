import React from "react";

class CheckBoxFieldsForm extends React.Component {
    render() {
        return (
            <div className="search__form-inner">
                <div className="search__item">
                    <input type="checkbox" className="search__checkbox checkbox" name="1" id="1" />
                    <label htmlFor="1" className="search__ch-label ch-label">Признак максимальной полноты</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label">Упоминания в бизнес-контексте</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label">Главная роль в публикации</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label ch-label--disabled">Публикации только с
                        риск-факторами</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label ch-label--disabled">Включать технические
                        новости рынков</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label">Включать анонсы и календари</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="1" id="1" className="search__checkbox checkbox" />
                    <label htmlFor="1" className="search__ch-label ch-label">Включать сводки новостей</label>
                </div>

                <div className="search__align">
                    <input type="submit" className="search__btn btn disabled" disabled value="Поиск" />
                    <span>* Обязательные к заполнению поля</span>
                </div>
            </div>
        )
    }
}

export default CheckBoxFieldsForm;