import { Router } from 'express';
import { serieController } from './controller';

export class SerieRoutes {
  static get routes(): Router {
    const router = Router();
    const SerieController = new serieController();
    router.get('/', SerieController.getSerie);
    router.get('/:id', SerieController.getSerie);
    router.post('/', SerieController.createSerie );
    router.put('/:id', SerieController.updateSerie );
    router.delete('/:id', SerieController.deleteSerie );
    return router;
  }
}