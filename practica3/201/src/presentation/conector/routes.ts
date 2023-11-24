import { Router } from 'express';
import { conectorController } from './controller';

export class ConectorRoutes {
  static get routes(): Router {
    const router = Router();
    const ConectorController = new conectorController();
    router.get('/', ConectorController.getConector);
    router.get('/:id', ConectorController.getConectorById);
    router.post('/', ConectorController.createConector );
    router.put('/:id', ConectorController.updateConector );
    router.delete('/:id', ConectorController.deleteConector );
    return router;
  }
}