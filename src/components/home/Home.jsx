import React from "react";
import "./home.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Stars = () => {
    return ( 
<section className="game container section" id="stars">

<h2 className="section__title">Destaques</h2>
                <span className="section__subtitle">
               Jogos em alta
                 </span>

                 <Swiper className="game__container"
                 effect="fade"
                  loop={true}
                  grabCursor={true}
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    350: {
                      slidesPerView: 1,
                      
                      
                    },
                  
                    576: {
                      slidesPerView: 2,
                      
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    
                  }}
                  
                  modules={[Pagination]}

                 >
                    {Data.map(({id,image, title}) => {
                        return(
                           
                            <SwiperSlide className="game__card" key={id}> 
                            <img src={image} alt =""
                            className = "game__img" />
                            
                            <h3 className="game__name">{title}</h3>
                            <p className="game__description">
                               
                            </p>
                            
                            
                            
                            </SwiperSlide>
                        )
                    })}
                 </Swiper>
        </section>
    );
};

export default Stars;