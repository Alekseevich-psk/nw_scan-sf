import React from "react";
import { Navigate } from 'react-router-dom';

import InputFieldsForm from "./../components/elements/InputFieldsForm";
import CheckBoxFieldsForm from "./../components/elements/CheckBoxFieldsForm";

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        localStorage.setItem('inputValues', null);
        localStorage.setItem('checkBoxValues', null);

        this.startSearch = this.startSearch.bind(this);

        this.state = {
            // inputValues: null,
            inputValues: {
                inn: '7710137066',
                ton: 'any',
                count: '12',
                dateStart: "2022-02-01",
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

        if (this.state.requiredData || true) {

            localStorage.setItem('inputValues', JSON.stringify(this.state.inputValues));
            localStorage.setItem('checkBoxValues', JSON.stringify(this.state.checkBoxValues));

            this.setState({
                redirectResPage: true
            })

            // const resParseItems = [];

            // new Promise((resolve, reject) => {
            //     histograms(true, this.state.inputValues, this.state.checkBoxValues, resolve, reject)
            // }).then(
            //     result => {
            //         this.props.preloader(false);
            //         localStorage.setItem('resTotalDocuments', JSON.stringify(result.data[0].data));
            //         localStorage.setItem('resRiskFactors', JSON.stringify(result.data[1].data));
            //     },
            //     error => {
            //         localStorage.setItem('resTotalDocuments', null);
            //         localStorage.setItem('resRiskFactors', null);
            //         console.log(error);
            //         this.props.preloader(false);
            //     }
            // );

            // new Promise((resolve, reject) => {
            //     histograms(false, this.state.inputValues, this.state.checkBoxValues, resolve, reject)
            // }).then(
            //     result => {

            //         console.log(result);

            //         result.items.forEach(element => {
            //             resParseItems.push(element.encodedId)
            //         });

            //         this.getPost(resParseItems);
            //         this.props.preloader(false);
            //     },
            //     error => {
            //         localStorage.setItem('encodedIds', null);
            //         console.log(error);
            //         this.props.preloader(false);
            //     }
            // );
        }
    }

    // getPost(arrId) {
    //     new Promise((resolve, reject) => {
    //         documents(arrId, resolve, reject)
    //     }).then(
    //         result => {
    //             console.log(result);
    //             const resArr = [];

    //             result.forEach(element => {
    //                 resArr.push(element.ok);
    //             });

    //             localStorage.setItem('posts', JSON.stringify(resArr));
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

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