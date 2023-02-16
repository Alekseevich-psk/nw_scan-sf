import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import News from "./../components/sections/News";
import ResInfo from "./../components/sections/ResInfo";
import Preloader from "./../components/elements/Preloader";

import getDefData from "./../hooks/getDefData";
import getPostsInit from "./../hooks/getPostsInit";

export default function Res(props) {
    const navigate = useNavigate();
    const mainData = localStorage.getItem('inputValues');
    if (mainData === 'null') navigate("/search");

    const [err, setErr] = useState(false);
    const [errSearch, setErrSearch] = useState(false);
    const [flagNewPost, setFlagNewPost] = useState(false);
    const [errSearchText, setErrSearchText] = useState(false);
    const [preloader, setPreloader] = useState(true);
    const [histogramsResult, setHistogramsResult] = useState(null);
    const [posts, setPosts] = useState(null);
    const promise = getDefData();

    useEffect(() => {

        promise.histograms.then(
            res => {
                if (res.data.length <= 0) return (setInterval(() => {
                    setErrSearchText('Ничего не найдено')
                }, 1500));
                setHistogramsResult(res);
            },
            err => {
                console.log(err);
                setErr(err);
            }
        );

        if (errSearchText) return;

        promise.objectSearch.then(
            res => {
                if (res.items.length <= 0) return;
                getPosts(res);
            },
            err => {
                console.log(err);
                setErr(err);
            }
        );

    }, []);

    const moreBtn = () => {
        const ids = JSON.parse(localStorage.getItem('idsHide'));
        getPosts(ids, 'newPost');
    }

    function setPostsStore(res) {
        const posts = localStorage.getItem('posts');

        if (posts !== null) {
            const postsStore = JSON.parse(localStorage.getItem('posts'));
            res.forEach(element => {
                postsStore.push(element);
            });
  
            localStorage.setItem('posts', JSON.stringify(postsStore));
        } else {
            localStorage.setItem('posts', JSON.stringify(res));
        }

        setPosts(res);
    }

    const getPosts = (arr, status = null) => {
        getPostsInit(arr, status).then(
            result => {
                if (result.length <= 0) return;
                setInterval(() => {
                    setPreloader(false);
                }, 1500);
                setPostsStore(result);
            },
            err => {
                console.log(err);
                setErr(err);
            }
        )
    }

    return (
        <section className="res">
            <div className={"container " + (errSearchText ? 'hide' : '')}>
                <div className={"res__main-wrapper " + (preloader ? "" : "hide")}>
                    <div className="res__main-inner">
                        <h1 className="res__main-s-title s-title">Ищем. Скоро будут результаты</h1>
                        <div className="res__main-desc">
                            Поиск может занять некоторое время, просим сохранять терпение.
                        </div>
                    </div>
                    <div className="res__main-inner res__main-inner--picture"></div>
                </div>

                <ResInfo
                    usePreloader={preloader}
                    histogramsResult={histogramsResult} />

                <News
                    usePreloader={preloader}
                    posts={posts} />
                <Preloader preloader={preloader} />
                <div className="res__align">
                    <button className="res__more-btn" onClick={moreBtn}>Показать еще</button>
                </div>
            </div>
            <div className={"container " + (errSearchText ? '' : 'hide')}>
                <h1 className="res__main-s-title s-title">Ничего не найдено!</h1>
                <Link to="/search">Вернуться к запросу</Link>
            </div>
        </section>
    )
}