import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TrendingTopic = () => {

    const data = [
        {
            title: "Emuni.uz",
            subTitle: "EMU UNIVERSITY | online",
            img: "soff-emuni-uz.png",
            link: 'https://emuni.uz/en/home-page/'
        },
        {
            title: "Parvaz-group.com",
            subTitle: "Afghanistan's biggest animal feed manufacturer | online",
            img: "soff-parwaz-group-com.png",
            link: 'http://parvaz-group.com/'
        },
        {
            title: "Effective Minerals",
            subTitle: 'Effective Minerals | offline',
            img: "soff-effective-uz.png",
            link: ''
        },
        {
            title: "Ibs-tashkent.uz",
            subTitle: "IBS - International Business school in Tashken | online",
            img: "soff-ibs-tashkent-uz.png",
            link: 'https://www.ibs-tashkent.uz/index_en.php'
        },
        {
            title: "Jasictech.uz",
            subTitle: "JASIC в Ташкенте | online",
            img: "soff-jasictech-uz.png",
            link: 'https://jasictech.uz/'
        },
        {
            title: "Atiengineeringltd.com",
            subTitle: "КОМПАНИЯ ATI ENGINEERING LTD (США) | online",
            img: "soff-atiengineeringltd-uz.png",
            link: 'https://atiengineeringltd.com/'
        },
        {
            title: "Opencard.uz",
            subTitle: "OPEN РАССРОЧКА | online",
            img: "soff-opencard-uz-0.png",
            link: 'https://opencard.uz/'
        },
        {
            title: "Opencard",
            subTitle: "Мгновенная покупка без предоплат! | offline",
            img: "soff-opencard-uz.png",
            link: ''
        },
        {
            title: "Alldata.uz",
            subTitle: "Online magazin! | online",
            img: "soff-alldata-uz.png",
            link: 'https://alldata.uz/'
        },
        {
            title: "Cisuzbekistan.uz",
            subTitle: "Cambridge School of It and Economics | online",
            img: "soff-cisuzbekistan-uz.png",
            link: 'https://www.cisuzbekistan.uz/'
        },
        {
            title: "Greenboxjp.uz",
            subTitle: "We support your dreams | online",
            img: "soff-greenboxjp-com.png",
            link: 'http://www.greenboxjp.uz/'
        },
        {
            title: "Maxsus beton",
            subTitle: "Maxsus beton | offline",
            img: "13.png",
            link: ''
        },
        {
            title: "DreamEdu",
            subTitle: "Dream Education | offline",
            img: "4.png",
            link: ''
        },
    ];


    return (
        <>
            <div className="swiper-container swiper-group-6">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3200,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-style-2",
                        nextEl: ".swiper-button-next-style-2",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1350: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper"
                >
                    {data.map((item, i) => (
                        <SwiperSlide className="swiper-slide"  key={i}>
                            <div className="card-style-1">
                                <Link href={`${item.link}`} target={`${(item.link) && '_blank'}`}>
                                    <div className="card-image"><img src={`assets/imgs/page/portfolio/${item.img}`} alt="Genz" />
                                        <div className="card-info">
                                            <div className="info-bottom">
                                                <h6 className="color-white mb-5">{item.title}</h6>
                                                <p className="text-xs color-gray-500"> {item.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev swiper-button-prev-style-2" />
                <div className="swiper-button-next swiper-button-next-style-2" />
            </div>



        </>
    );
};

export default TrendingTopic;

