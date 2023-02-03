import React from "react";
import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="res__info">
                <h2 className="res__info-sub-title sub-title">Общая сводка</h2>
                <div className="res__info-desc">Найдено 4 221 вариантов</div>
                <div className="res__info-slider-wrap">
                    <div className="res__info-list">
                        <div className="res__info-list-item">Период</div>
                        <div className="res__info-list-item">Всего</div>
                        <div className="res__info-list-item">Риски</div>
                    </div>

                    <Swiper
                        className="res__info-slider"
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
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>

                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>
                        <SwiperSlide className="res__info-slide swiper-slide">
                            <div className="res__info-date">10.09.2021</div>
                            <div className="res__info-cont">5</div>
                            <div className="res__info-cont">0</div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        );
    }
}

export default App;