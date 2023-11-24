import { Router } from 'express';
import { AsistenciasController } from './controller';

export class AsistenciasRoutes {
  static get routes(): Router {
    const router = Router();
    const asistenciasController = new AsistenciasController();
    router.get('/', asistenciasController.getAsistencias);
    router.get('/:id', asistenciasController.getAsistenciaById );
    router.post('/', asistenciasController.createAsistencia );
    router.put('/:id', asistenciasController.updateAsistencia );
    router.delete('/:id', asistenciasController.deleteAsistencia );
    return router;
  }
}
