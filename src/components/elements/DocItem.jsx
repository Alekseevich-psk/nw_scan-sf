import React from "react";

export default function DocItem(props) {
    const el = props.el;
    console.log(el);
    return (
        <div className="res__news-item n-item">
            <div className="n-item__info">
                <div className="n-item__date">{el.issueDate.slice(0, 10)}</div>
                <a href={el.url} target="_blank" className="n-item__source">{el.source.name}</a>
            </div>
            <div className="n-item__title">{el.title.text}</div>

            <div className={"n-item__cat n-item__cat--techno " + (el.attributes.isTechNews ? '' : 'hide')}>технические новости</div>
            <div className={"n-item__cat n-item__cat--announcement " + (el.attributes.isTechNews ? '' : 'hide')}>анонсы и события</div>
            <div className={"n-item__cat n-item__cat--digest " + (el.attributes.isTechNews ? '' : 'hide')}>сводки новостей</div>

            <div className="n-item__picture">
                <img src="./images/preview-news.jpg" alt="" />
            </div>
            <div className="n-item__desc">
                {/* {el.content.markup} */}
            </div>
            <div className="n-item__align">
                <a href={el.url} target="_blank" className="n-item__btn">Читать в источнике</a>
                <div className="n-item__more">{el.attributes.wordCount} слова</div>
            </div>
        </div>
    )
}