
import { Response, Request } from 'express';

import { prismaClient } from '../databases/PrismaClient';

export class GamerController {

  async create(req: Request, res: Response) {
    
    const image: string = req.body.image; 
    const title: string = req.body.title;
    const price: number = parseFloat(req.body.price);
    
    const newGamer = await prismaClient.games.create({
      data: {
        image,
        title,
        price,
      }
    })

    res.json({success: true, data: newGamer});
  };

  async read(req: Request, res: Response) {
    const allGames = await prismaClient.games.findMany();

    res.json({success: true, data: allGames});
  };

  

}