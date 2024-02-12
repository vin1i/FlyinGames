import { Router } from 'express';


import { GamerController } from './controller/GamerController'; 

const router = Router();

const gamerController = new GamerController();


router.post('/gamer', gamerController.create);
router.get('/gamer', gamerController.read);

export default router;