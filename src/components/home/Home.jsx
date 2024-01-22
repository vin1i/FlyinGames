import React from 'react';
import './home.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Stars  () {
  return (
    <section className="game container section" id="stars">
      <h2 className="section__title">Destaques</h2>
      <span className="section__subtitle">Jogos em alta</span>

      <Swiper
        className="game__container"
        grabCursor={true}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title }) => (
          <SwiperSlide className="game__card" key={id}>
            <img src={image} alt="" className="game__img" />
            <h3 className="game__name">{title}</h3>
            <p className="game__description"></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Stars;
