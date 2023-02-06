import React from "react";

class CheckBoxFieldsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchCheckbox: false,
            businessContext: false,
            mainRole: false,
            riskFactors: false,
            technicalNews: false,
            advertisement: false,
            newNews: false,
        }

    }


    render() {
        // console.log(this.props.requiredData);
        return (
            <div className="search__form-inner">
                <div className="search__item">
                    <input type="checkbox" className="search__checkbox checkbox" name="maximum-full" id="maximum-full" />
                    <label htmlFor="maximum-full" className="search__ch-label ch-label">Признак максимальной полноты</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="business-context" id="business-context" className="search__checkbox checkbox" />
                    <label htmlFor="business-context" className="search__ch-label ch-label">Упоминания в бизнес-контексте</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="main-role" id="main-role" className="search__checkbox checkbox" />
                    <label htmlFor="main-role" className="search__ch-label ch-label">Главная роль в публикации</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="risk-factors" id="risk-factors" className="search__checkbox checkbox" />
                    <label htmlFor="risk-factors" className="search__ch-label ch-label ch-label--disabled">Публикации только с
                        риск-факторами</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="technical-news" id="technical-news" className="search__checkbox checkbox" />
                    <label htmlFor="technical-news" className="search__ch-label ch-label ch-label--disabled">Включать технические
                        новости рынков</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="advertisement" id="advertisement" className="search__checkbox checkbox" />
                    <label htmlFor="advertisement" className="search__ch-label ch-label">Включать анонсы и календари</label>
                </div>
                <div className="search__item">
                    <input type="checkbox" name="new-news" id="new-news" className="search__checkbox checkbox" />
                    <label htmlFor="new-news" className="search__ch-label ch-label">Включать сводки новостей</label>
                </div>

                <div className="search__align">
                    <input 
                    type="submit" 
                    disabled = {(this.props.requiredData) ? "" : "disabled"}
                    className={"search__btn btn " + (this.props.requiredData ? "" : "disabled")} value="Поиск" />
                    <span>* Обязательные к заполнению поля</span>
                </div>
            </div>
        )
    }
}

export default CheckBoxFieldsForm;