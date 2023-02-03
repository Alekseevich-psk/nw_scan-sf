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
                this.setState({
                    inputDateEnd: elem.target.value
                });
    
                if (this.state.inputDateEnd > this.state.inputDateStart) {
                    this.setState({
                        inputDateError: true
                    })
                } else {
                    this.setState({
                        inputDateError: false
                    })
                }
                break;
        }

    }

    componentDidUpdate() {
        console.log(this.state.inputInn, this.state.inputCountRes);
        if (this.state.inputInn !== null && this.state.inputCountRes !== null) {
            this.props.getInputValue(this.state);
        }
    }

    render() {
        return (
            <div className="search__form-inner">
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">ИНН компании <sup>*</sup></label>
                    <input
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
                        <option value="">Любая</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
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
                    <label htmlFor="" className="search__label label">Диапазон поиска <sup>*</sup></label>
                    <div className="search__wrap-input">
                        <input
                            onChange={this.changeInputValue.bind(this)}
                            type="date"
                            className="search__input input input--date-start"
                            id="date"
                            name="date" />
                        <input
                            onChange={this.changeInputValue.bind(this)}
                            type="date"
                            className="search__input input input--date-end"
                            id="date"
                            name="date" />
                        <p className={"search__error error " + (this.state.inputDateError ? '' : 'hide')}>Некорректный ввод данных</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default InputFieldsForm;