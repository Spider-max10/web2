import { Router } from 'express';
import {
  createAsistenciaController,
  getAllAsistenciasController,
  getAsistenciaByIdController,
  updateAsistenciaController,
  deleteAsistenciaController,
} from './asistenciaController';

const router = Router();

// Rutas CRUD para Asistencia
router.post('/', createAsistenciaController);
router.get('/', getAllAsistenciasController);
router.get('/:id', getAsistenciaByIdController);
router.put('/:id', updateAsistenciaController);
router.delete('/:id', deleteAsistenciaController);

export default router;
