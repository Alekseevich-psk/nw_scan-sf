import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import { connect } from "react-redux";

function ResInfo(props) {

    const swiperRef = useRef();
    let resInfo = null;

    useEffect(() => {
        if (props.resSearch.length > 0) {
            localStorage.setItem('resUseDefData', JSON.stringify(props.resSearch));
            props.getStatusWork(true, 'resInfo');
        }

    });

    resInfo = JSON.parse(localStorage.getItem('resUseDefData'));
    if (resInfo === null) return;
    
    const totalDocuments = resInfo['0'].data;
    const riskFactors = resInfo['1'].data;

    const listSlide = totalDocuments.map((el, i) =>
        <SwiperSlide key={i} className="res__info-slide swiper-slide">
            <div className="res__info-date">{el.date.slice(0, 10)}</div>
            <div className="res__info-cont">{el.value}</div>
            <div className="res__info-cont">{riskFactors[i].value}</div>
        </SwiperSlide>
    );

    return (
        <div className="res__info">
            <h2 className="res__info-sub-title sub-title">Общая сводка</h2>
            <div className="res__info-desc">Найдено {totalDocuments.length} вариантов</div>

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

export default connect(
    state => ({
        resSearch: state.resSearch
    }),
)(ResInfo);