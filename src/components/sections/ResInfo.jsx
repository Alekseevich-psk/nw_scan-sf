import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import histograms from "./../../api/histograms";


export default function ResInfo(props) {
    const swiperRef = useRef();
    let listSlide = null;

    const [resDate, setResDate] = useState(null);
    const [resRisk, setResRisk] = useState(null);
    const [resCount, setCount] = useState(null);

    const inputValues = JSON.parse(localStorage.getItem('inputValues'));
    const checkBoxValues = JSON.parse(localStorage.getItem('checkBoxValues'));

    if (resDate === null) {
        new Promise((resolve, reject) => {
            histograms(true, inputValues, checkBoxValues, resolve, reject)
        }).then(
            result => {
                setResDate(result.data[0].data);
                setResRisk(result.data[1].data);
                setCount(result.data[0].data.length);
            },
            error => {
                console.log(error);
            }
        );
    } else {
        listSlide = resDate.map((el, i) =>
            <SwiperSlide key={i} className="res__info-slide swiper-slide">
                <div className="res__info-date">{el.date.slice(0, 10)}</div>
                <div className="res__info-cont">{el.value}</div>
                <div className="res__info-cont">{resRisk[i].value}</div>
            </SwiperSlide>
        );
    }

    return (
        <div className="res__info">
            <h2 className="res__info-sub-title sub-title">Общая сводка</h2>
            <div className="res__info-desc">Найдено {resCount} вариантов</div>

            <div className="res__info-slider-wrap">

                <div className="res__sl-arrows sl-arrows">
                    <div onClick={() => swiperRef.current?.slidePrev()} className="sl-arrows__arrow sl-arrows__arrow--prev"></div>
                    <div onClick={() => swiperRef.current?.slideNext()} className="sl-arrows__arrow sl-arrows__arrow--next"></div>
                </div>

                <div className="res__info-list">
                    <div className="res__info-list-item">Период</div>
                    <div className="res__info-list-item">Всего</div>
                    <div className="res__info-list-item">Риски</div>
                </div>

                <Swiper
                    className="res__info-slider"
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },

                        768: {
                            slidesPerView: 5,
                        },

                        960: {
                            slidesPerView: 8,
                        },
                    }}>

                    {listSlide}

                </Swiper>

            </div>
        </div>
    )
}