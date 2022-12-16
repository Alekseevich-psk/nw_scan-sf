import React from 'react';

export default function WhyMe() {
    return (
        <section className="why-me">
            <div className="container">
                <h2 className="why-me__s-title s-title">Почему именно мы</h2>
                <div className="why-me__main-wrap">
                    <div className="why-me__sl-arrows sl-arrows">
                        <div className="sl-arrows__arrow sl-arrows__arrow--prev"></div>
                        <div className="sl-arrows__arrow sl-arrows__arrow--next"></div>
                    </div>
                    <div className="why-me__slider swiper-container">
                        <div className="why-me__wrapper swiper-wrapper">

                            <div className="why-me__slide swiper-slide">
                                <div className="why-me__slide-body">
                                    <div className="why-me__ico">
                                        <img src="./images/svg/ico-why-me-1.svg" alt="" />
                                    </div>
                                    <div className="why-me__desc">
                                        Высокая и оперативная скорость обработки заявки
                                    </div>
                                </div>
                            </div>

                            <div className="why-me__slide swiper-slide">
                                <div className="why-me__slide-body">
                                    <div className="why-me__ico">
                                        <img src="./images/svg/ico-why-me-2.svg" alt="" />
                                    </div>
                                    <div className="why-me__desc">
                                        Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
                                    </div>
                                </div>
                            </div>

                            <div className="why-me__slide swiper-slide">
                                <div className="why-me__slide-body">
                                    <div className="why-me__ico">
                                        <img src="./images/svg/ico-why-me-3.svg" alt="" />
                                    </div>
                                    <div className="why-me__desc">
                                        Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="why-me__bg"></div>
            </div>
        </section>
    )
}