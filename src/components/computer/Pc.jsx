import React from "react";
import { stars } from "./Data";
import './pc.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import modulos
import {  } from 'swiper/modules';

const PC = () => {
    return(
        <section className="star section" id="computer">
            <h2 className="section__title"> Games Pc</h2>
                <span className="section__subtitle">
                Jogos para Pc
                 </span>

                 <Swiper className="star__container grid"
                 effect="fade"
                  loop={true}
                  grabCursor={true}
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{

                    320: {
                      slidesPerView: 4,
                      
                    },


                    350: {
                      slidesPerView: 4,
                      
                    },

                    576: {
                      slidesPerView: 6,
                      
                    },
                    768: {
                      slidesPerView: 7,
                      spaceBetween: 4,
                    },
                    
                  }}
                  
                  modules={[]}

                 >
                    {stars.map(({id,image, title, preço, categoria}) => {
                        return(
                            <SwiperSlide className="star__card" key={id}> 
                            <img src={image} alt =""
                            className = "star__img" />
                            
                            <h3 className="star__name">{title}</h3>
                            <h5 className="star__price">
                               {preço}
                            </h5>
                            <p className="star__description">
                               {categoria}
                            </p>
                            
                            
                            
                            </SwiperSlide>
                        )
                    })}
                 </Swiper>
        </section>
    );
};

export default PC;