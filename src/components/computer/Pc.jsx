import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { gamesPc } from './Data';
import './pc.css';

function PC  ()  {

  



  return (
    <section className="pc section" id="computer">
      <h2 className="section__title">Games Pc</h2>
      <span className="section__subtitle">Jogos para Pc</span>

      <Swiper
        className="pc__container grid"
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
        {gamesPc.map(({ id, image, title, preço, categoria }) => (
          <SwiperSlide className="pc__card" key={id}>
            <Link to={`/game/${id}`}>
              <img src={image} alt="" className="pc__img" />
              <h3 className="pc__name">{title}</h3>
              <h5 className="pc__price">{preço}</h5>
              <p className="pc__description">{categoria}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PC;
