import React from "react";
import InputFieldsForm from "./../components/elements/InputFieldsForm";
import CheckBoxFieldsForm from "./../components/elements/CheckBoxFieldsForm";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputsValue: {},
            checkBoxValues: null,
            requiredData: false
        }
    }

    getInputValue(obj) {
        if (obj.inputInnError
            || obj.inputCountResError
            || obj.inputDateError) {
            this.setState({
                requiredData: true,
                inputsValue: obj
            })
        } else {
            console.log('test-2');
            this.setState({
                requiredData: false,
            })
        }

    }

    getCheckBoxValue(obj) {
        // this.setState({
        //     checkBoxValues: obj
        // })
    }

    render() {
        return (
            <section className="search">
                <div className="container">
                    <div className="search__fly-picture search__fly-picture--one">
                        <img src="./images/svg/ico-a4.svg" alt="" />
                    </div>
                    <div className="search__fly-picture search__fly-picture--two">
                        <img src="./images/svg/ico-folders.svg" alt="" />
                    </div>

                    <div className="search__wrapper">
                        <h1 className="search__s-title s-title">Найдите необходимые данные в пару кликов.</h1>
                        <div className="search__desc">Задайте параметры поиска.<br />Чем больше заполните, тем точнее поиск</div>
                        <form className="search__form">
                            <div className="search__form-wrapper">

                                <InputFieldsForm getInputValue={this.getInputValue.bind(this)} />
                                <CheckBoxFieldsForm requiredData={this.state.requiredData} />

                            </div>
                        </form>
                    </div>

                    <div className="search__bg"></div>
                </div>
            </section>
        )
    }
}

export default Search;