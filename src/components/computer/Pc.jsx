import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { stars } from './Data';
import './pc.css';

const PC = () => {
  return (
    <section className="star section" id="computer">
      <h2 className="section__title">Games Pc</h2>
      <span className="section__subtitle">Jogos para Pc</span>

      <Swiper
        className="star__container grid"
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {stars.map(({ id, image, title, preço, categoria }) => (
          <SwiperSlide className="star__card" key={id}>
            <img src={image} alt="" className="star__img" />
            <h3 className="star__name">{title}</h3>
            <h5 className="star__price">{preço}</h5>
            <p className="star__description">{categoria}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PC;
