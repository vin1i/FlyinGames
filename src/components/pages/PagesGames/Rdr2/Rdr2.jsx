/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import RDR3 from '../../../../assets/assets__demonstraçao/Rdr__demo.png';
import RDR2 from '../../../../assets/assets__demonstraçao/Rdr2_demo.jpg';
import RDR1 from '../../../../assets/assets__demonstraçao/Rdr__demo.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../../../header/Header';
import Footer from '../../../Footer/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {  EffectFade, Pagination} from 'swiper/modules';
import './rdr2.css';
//import { rdr2 } from './Data';




const Rdr2 = () => {

  return (

    <>  <Header/>
      <section className="details__section">
        <h2 className="details__title">Red Dead Redemption 2</h2>
        <span className="details__subtitle">Ação e Aventura | História influenciável ✏️</span>

        <Swiper
          className="details__container grid"
          pagination={true}
          grabCursor={true}
          effect={'fade'}
          loop={true}
          spaceBetween={10}

          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, EffectFade]}
        >
          <SwiperSlide className="swiper-img"><img src={RDR3} alt="" className="games__img" /> </SwiperSlide>
          <SwiperSlide className="swiper-img"><img src={RDR2} alt="" className="games__img" /> </SwiperSlide>
          <SwiperSlide className="swiper-img"><img src={RDR1} alt="" className="games__img" /> </SwiperSlide>
          <SwiperSlide className="swiper-img"><img src={RDR3} alt="" className="games__img" /> </SwiperSlide>
        </Swiper>
        <div className="box__details">
          <h2 className="box__title">Red Dead Redemption 2</h2>
          <p className="p">
            <strong>O JOGO:</strong> Vencedor de mais de 175 prêmios de Jogo do Ano e ganhador de mais de 250 pontuações perfeitas, Red Dead Redemption 2 é o conto épico do fora-da-lei Arthur Morgan e da infame gangue Van der Linde, na corrida pela América no alvorecer da era moderna. Também inclui o acesso ao mundo vivo compartilhado do Red Dead Online.
            <br /><br />
            <strong>América, 1899.</strong> O fim da era do velho oeste começa quando os homens da lei caçam as últimas gangues de foras-da-lei. Aqueles que não se rendem ou sucumbem, acabam mortos. Depois que um assalto termina muito mal na cidade de Blackwater, Arthur Morgan e a gangue de Dutch Van der Linde são obrigados a fugir. Com os agentes federais e os melhores caçadores de recompensas do país na sua cola, a gangue deve roubar, assaltar e abrir caminho pelo coração da América para sobreviver. O surgimento de grupos internos ameaça destruir a gangue, então Arthur deve escolher entre seus próprios ideais e a lealdade à gangue que o criou.
            <br /><br />
            <strong>Red Dead Redemption 2 para PC</strong> aproveita ao máximo a potência do PC para dar vida a cada canto deste gigantesco e riquíssimo universo. Novas melhorias gráficas e técnicas para deixar o jogo mais imersivo incluem maiores distâncias de renderização para melhor navegação, iluminação global de maior qualidade e oclusão do ambiente para melhorar a iluminação do dia e da noite, melhorias nos reflexos e sombras mais fortes e de maior resolução a todas as distâncias; texturas de árvore tesseladas e melhorias nas texturas de relva e pelos, tornando todas as plantas e animais mais realistas.
            <br /><br />
            <strong>DESTAQUES:</strong> A versão de Red Dead Redemption 2 para PC também oferece suporte a HDR, a monitores de ponta com resolução 4K ou superior, configurações com vários monitores, widescreen, taxas de quadros mais rápidas e muito mais. Red Dead Redemption 2 para PC também inclui conteúdo adicional no Modo História, incluindo Missões de Caçador de Recompensa, Esconderijos de Gangues, Armas e muito mais, além de acesso gratuito ao imenso mundo online de Red Dead Online, que apresenta todas as melhorias lançadas anteriormente e o conteúdo mais recente para a experiência online completa, que inclui as Ocupações da Fronteira e os ofícios especializados de Caçador de Recompensas, Mercador e Colecionador, entre outros recursos. Red Dead Redemption 2 para PC é a melhor maneira de conhecer um dos jogos mais aclamados pela crítica de todos os tempos, que ganhou mais de 175 prêmios de jogo do ano e conquistou mais de 250 pontuações perfeitas.
          </p>

        </div>

      </section>
      <Footer/>
    </>
  );
};


export default Rdr2;
