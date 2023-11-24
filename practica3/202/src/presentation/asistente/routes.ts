import { Router } from 'express';
import { AsistenteController } from './controller';

export class AsistenteIdRoutes {
  static get routes(): Router {
    const router = Router();
    const asistenteController = new AsistenteController();
    router.get('/', asistenteController.getAsistente);
    router.get('/:id', asistenteController.getAsistente );
    router.post('/', asistenteController.createAsistente );
    router.put('/:id', asistenteController.updateAsistente );
    router.delete('/:id', asistenteController.deleteAsistente );
    return router;
  }
}
