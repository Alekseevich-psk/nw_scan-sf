import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

import InputFieldsForm from "./../components/elements/InputFieldsForm";
import CheckBoxFieldsForm from "./../components/elements/CheckBoxFieldsForm";
import histograms from "./../api/histograms";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.startSearch = this.startSearch.bind(this);

        // console.log(props);

        this.state = {
            // inputValues: null,
            inputValues: {
                inn: '7710137066',
                ton: 'any',
                count: '12',
                dateStart: "2023-02-01",
                dateEnd: "2023-02-02",
            },
            // checkBoxValues: null,
            checkBoxValues: {
                maxFullness: true,
                inBusinessNews: true,
                onlyMainRole: true,
                advertisement: true,
                isDigest: true,
            },
            requiredData: false,
            redirectResPage: false
        }
    }

    inputValue(status, obj) {

        this.setState({
            requiredData: status
        })

        if (!status) return;

        this.setState({
            inputValues: obj
        })
    }

    getCheckBoxValue(obj) {
        this.setState({
            checkBoxValues: obj
        })
    }

    startSearch() {
        this.props.preloader(true);

        if (true) {
            new Promise((resolve, reject) => {
                histograms(this.state.inputValues, this.state.checkBoxValues, resolve, reject)
            }).then(
                result => {
                    this.props.setResHistograms(result);
                    this.props.preloader(false);

                    this.setState({
                        redirectResPage: true
                    })
                },
                error => {
                    console.log(error);
                    this.props.preloader(false);
                }
            )
        }
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
                                {this.state.redirectResPage ? (<Navigate to="/res" replace={true} />) : ''}
                                <InputFieldsForm inputValue={this.inputValue.bind(this)} />
                                <CheckBoxFieldsForm
                                    startSearch={this.startSearch.bind(this)}
                                    getCheckBoxValue={this.getCheckBoxValue.bind(this)}
                                    requiredData={this.state.requiredData} />

                            </div>
                        </form>
                    </div>

                    <div className="search__bg"></div>
                </div>
            </section>
        )
    }
}

export default connect(
    state => ({
        resSearch: state.resSearch
    }),
    dispatch => ({
        setResHistograms: (value) => {
            dispatch({ type: "setResHistograms", value: value })
        },
        setResObjectSearch: (value) => {
            dispatch({ type: "setResObjectSearch", value: value })
        },

    })
)(Search);