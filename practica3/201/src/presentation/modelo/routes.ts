import { Router } from 'express';
import { modeloController } from './controller';

export class ModeloRoutes {
  static get routes(): Router {
    const router = Router();
    const ModeloController = new modeloController();
    router.get('/', ModeloController.getModelo);
    router.get('/:id', ModeloController.getModeloById );
    router.post('/', ModeloController.createModelo );
    router.put('/:id', ModeloController.updateModelo );
    router.delete('/:id', ModeloController.deleteModelo );
    return router;
  }
}
