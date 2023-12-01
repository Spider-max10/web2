import { Router } from 'express';
import { AreaController } from './controller';

export class AreaRoutes {
  static get routes(): Router {
    const router = Router();
    const areaController = new AreaController();
    router.get('/', areaController.getArea);
    router.get('/:id', areaController.getAreaById );
    router.post('/', areaController.createArea );
    router.put('/:id', areaController.updateArea );
    router.delete('/:id', areaController.deleteArea );
    return router;
  }
}
