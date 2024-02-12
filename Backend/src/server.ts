import express from 'express';
import cors from 'cors';
import router from './router';


const app = express();
const port = 3001

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

app.use(router)

app.listen({
  port
});



