import React from "react";

class InputFieldsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputInn: null,
            inputInnError: false,
            inputTon: null,
            inputCountRes: null,
            inputCountResError: false,
            inputDateStart: null,
            inputDateEnd: null,
            inputDateError: false
        }
    }

    changeInputValue(elem) {
        const cls = elem.target.classList;

        switch (true) {
            case cls.contains('input--inn'):
                (elem.target.value.length > 10 || elem.target.value == '')
                    ? this.setState({ inputInn: null, inputInnError: true })
                    : this.setState({ inputInn: elem.target.value, inputInnError: false });
                break;

            case cls.contains('input--count'):
                (elem.target.value > 1000 || elem.target.value == '')
                    ? this.setState({ inputCountRes: null, inputCountResError: true })
                    : this.setState({ inputCountRes: elem.target.value, inputCountResError: false });
                break;

            case cls.contains('search__options'):
                this.setState({
                    inputTon: elem.target.value
                });
                break;

            case cls.contains('input--date-start'):
                this.setState({
                    inputDateStart: elem.target.value
                });
                break;

            case cls.contains('input--date-end'):
                console.log(elem.target.value);
                this.setState({
                    inputDateEnd: elem.target.value
                });
                break;
        }

        this.checkDateValue();
        this.sendValue();
    }

    sendValue() {
        this.props.getInputValue(this.state);
    }

    checkDateValue() {
        if (this.state.inputDateStart === null
            || this.state.inputDateEnd === null
            && this.state.inputDateStart > this.state.inputDateEnd) {
            this.setState({
                inputDateError: true
            })
        } else {
            this.setState({
                inputDateError: false
            })
        }
    }

    checkCountValue(elem) {
        console.log(elem.target.value.length);
        (elem.target.value.length < 10 || elem.target.value == '')
            ? this.setState({ inputInn: null, inputInnError: true })
            : this.setState({ inputInn: elem.target.value, inputInnError: false });
    }

    render() {
        return (
            <div className="search__form-inner">
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">ИНН компании <sup>*</sup></label>
                    <input
                        onBlur={this.checkCountValue.bind(this)}
                        onChange={this.changeInputValue.bind(this)}
                        type="number"
                        className={"search__input input input--inn " + (this.state.inputInnError ? 'input--error' : '')}
                        placeholder="10 цифр" />
                    <p className={"search__error error " + (this.state.inputInnError ? '' : 'hide')}>Некорректный ввод данных</p>
                </div>
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">Тональность</label>
                    <select
                        className="search__options"
                        onChange={this.changeInputValue.bind(this)}
                        id="pet-select">
                        <option value="positive">Позитивная</option>
                        <option value="negative">Негативная</option>
                        <option value="any">Любая</option>
                    </select>
                </div>
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">Количество документов в выдаче
                        <sup>*</sup></label>
                    <input
                        onChange={this.changeInputValue.bind(this)}
                        type="number"
                        className={"search__input input input--count " + (this.state.inputCountResError ? 'input--error' : '')}
                        placeholder="От 1 до 1000" />
                    <p className={"search__error error " + (this.state.inputCountResError ? '' : 'hide')}>Некорректный ввод данных</p>
                </div>
                <div className="search__wrap-item">
                    <label className="search__label label">Диапазон поиска <sup>*</sup></label>
                    <div className="search__wrap-input">
                        <input
                            onChange={this.changeInputValue.bind(this)}
                            type="date"
                            className="search__input input input--date-start"
                            name="date" />
                        <input
                            onChange={this.changeInputValue.bind(this)}
                            type="date"
                            className="search__input input input--date-end"
                            name="date2" />
                        <p className={"search__error error " + (this.state.inputDateError ? '' : 'hide')}>Некорректный ввод данных</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default InputFieldsForm;