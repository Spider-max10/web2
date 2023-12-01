import { Router } from 'express';
import { tecnicoController } from './controller';

export class TecnicoRoutes {
  static get routes(): Router {
    const router = Router();
    const TecnicoController = new tecnicoController();
    router.get('/',TecnicoController.getTecnico);
    router.get('/:id', TecnicoController.getTecnicoById);
    router.post('/', TecnicoController.createTecnico );
    router.put('/:id', TecnicoController.updateTecnico );
    router.delete('/:id', TecnicoController.deleteTecnico );
    return router;
  }
}