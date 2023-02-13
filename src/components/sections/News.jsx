import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DocItem from "./../elements/DocItem";
import documents from "./../../api/documents";


function News(props) {

    let postList = null;
    let posts = null;

    useEffect(() => {
        if (props.resSearch.objectSearch.length > 0) {
            console.log(props);
            localStorage.setItem('posts', JSON.stringify(props.resSearch.objectSearch));
        }
    }, []);

    posts = JSON.parse(localStorage.getItem('posts'));

    if (posts === null) return;
    // if (posts === null || typeof posts === 'object') return;

    postList = posts.map((el, index) => {
        return <DocItem key={index} el={el.ok} />
    })

    return (
        <div className="res__news">
            <h2 className="res__news-sub-title sub-title">Список документов</h2>
            <div className="res__news-wrapper">
                {postList}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        resSearch: state.resSearch
    }),
)(News);