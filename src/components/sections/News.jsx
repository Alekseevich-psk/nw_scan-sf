import DocItem from "./../elements/DocItem";

export default function News() {

    return (
        <div className="res__news">
            <h2 className="res__news-sub-title sub-title">Список документов</h2>
            <div className="res__news-wrapper">
                <DocItem />
            </div>
        </div>
    )
} 