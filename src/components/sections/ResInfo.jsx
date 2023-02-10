import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';


export default function ResInfo(props) {
    const resTotalDocuments = JSON.parse(localStorage.getItem('resTotalDocuments'));
    const resRiskFactors = JSON.parse(localStorage.getItem('resRiskFactors'));
    const resCount = resTotalDocuments.length;
    const swiperRef = useRef();

    const listSlide = resTotalDocuments.map((number, index) =>
        <SwiperSlide key={index + number.value} className="res__info-slide swiper-slide">
            <div className="res__info-date">{number.date.slice(0, 10)}</div>
            <div className="res__info-cont">{number.value}</div>
            <div className="res__info-cont">{resRiskFactors[index].value}</div>
        </SwiperSlide>
    );

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
                    }}
                >

                    {listSlide}

                </Swiper>

            </div>
        </div>
    )
}