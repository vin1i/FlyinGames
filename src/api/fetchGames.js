/*import Image1 from '../../assets/RDR2.jpg';
import Image2 from '../../assets/Fallout4.png';
import Image3 from '../../assets/mafia3.jpg';
import Image4 from '../../assets/Hitman.jpg';
import Image5 from '../../assets/Re4.jpg';
import Image6 from '../../assets/ACMirage.jpg';
import Image7 from '../../assets/AlanWake.jpg';
import Image8 from '../../assets/fallout-76.jpg';
import Image9 from '../../assets/fARCRY6.jpg';
import Image10 from '../../assets/GTAV.jpg';
import Image11 from '../../assets/Baldursgate.jpg';
import Image12 from '../../assets/Sleeping Dogs.jpg';
import Image13 from '../../assets/SpiderMan.jpg';
import Image14 from '../../assets/SpiderMan2.jpg';
import './pc.css';

const gamesList = [
  {
    id: 1,
    image: Image1,
    title: 'Red Dead Redemption 2',
    preço: '50$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 2,
    image: Image2,
    title: 'Fallout 4',
    preço: '35$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 3,
    image: Image3,
    title: 'Mafia 3',
    preço: '35$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 4,
    image: Image4,
    title: 'Hitman',
    preço: '20$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 5,
    image: Image5,
    title: 'RE 4 Remake',
    preço: '20$ ',
    categoria: 'Ação | Terror',
  },
  {
    id: 6,
    image: Image6,
    title: 'AC Mirage',
    preço: '50$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 7,
    image: Image7,
    title: 'Alan Wake 2',
    preço: '65$ ',
    categoria: 'Ação | Suspense',
  },
  {
    id: 8,
    image: Image8,
    title: 'Fallout 76',
    preço: '25$ ',
    categoria: 'Ação | Aventura | RPG',
  },
  {
    id: 9,
    image: Image9,
    title: 'Far Cry 6',
    preço: '50$ ',
    categoria: 'Ação | Aventura ',
  },
  {
    id: 10,
    image: Image10,
    title: 'Grand Theft Auto V',
    preço: '40$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 11,
    image: Image11,
    title: 'Baldurs Gate',
    preço: '30$ ',
    categoria: 'RPG',
  },
  {
    id: 12,
    image: Image12,
    title: 'Sleeping Dogs',
    preço: '35$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 13,
    image: Image13,
    title: 'Spider Man',
    preço: '35$ ',
    categoria: 'Ação | Aventura',
  },
  {
    id: 14,
    image: Image14,
    title: 'Spider Man 2',
    preço: '50$ ',
    categoria: 'Ação | Aventura',
  },
  
];

function games ( response) {
  const dynamicDate = new Date();
  
  
  response.json({
    date:dynamicDate.toGMTString(),
    games: gamesList,



      function searchGames(response, query) {
        const results = gamesList.filter((game) =>
        game.name.toLowerCase().includes(query.toLowerCase())
        );

        response.json({
          results: results,
        });
      }
  });
}
  
export {games, searchGames};