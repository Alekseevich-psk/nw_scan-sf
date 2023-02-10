import React, { useState } from "react";

import DocItem from "./../elements/DocItem";
// import documents from "./../../api/documents";

export default function News(props) {


    return (
        <div className="res__news">
            <h2 className="res__news-sub-title sub-title">Список документов</h2>
            <div className="res__news-wrapper">
                <DocItem />
            </div>
        </div>
    )
} 