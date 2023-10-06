import { Router } from 'express';
import {
  createAsistenteController,
  getAllAsistentesController,
  getAsistenteByIdController,
  updateAsistenteController,
  deleteAsistenteController,
} from './asistenteController';

const router = Router();

// Rutas CRUD para Asistente
router.post('/', createAsistenteController);
router.get('/', getAllAsistentesController);
router.get('/:id', getAsistenteByIdController);
router.put('/:id', updateAsistenteController);
router.delete('/:id', deleteAsistenteController);

export default router;
