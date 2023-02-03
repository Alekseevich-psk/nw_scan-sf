import React from "react";

class InputFieldsForm extends React.Component {
    render() {
        return(
            <div className="search__form-inner">
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">ИНН компании <sup>*</sup></label>
                    <input type="number" className="search__input input" placeholder="10 цифр" />
                </div>
                <div className="search__item">
                    <label htmlFor="inn" className="search__label label">Тональность</label>
                    <select id="pet-select">
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
                    <input type="number" className="search__input input" placeholder="От 1 до 1000" />
                </div>
                <div className="search__wrap-item">
                    <label htmlFor="" className="search__label label">Диапазон поиска <sup>*</sup></label>
                    <div className="search__wrap-input">
                        <input type="date" className="search__input input" id="date" name="date" />
                        <input type="date" className="search__input input" id="date" name="date" />
                    </div>
                </div>
            </div>
        )
    }
}


export default InputFieldsForm;