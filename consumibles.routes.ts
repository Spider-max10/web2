import { Router } from 'express';
import {
  createConsumibleController,
  getAllConsumiblesController,
  getConsumibleByIdController,
  updateConsumibleController,
  deleteConsumibleController,
} from './consumibleController';

const router = Router();

// Rutas CRUD para Consumible
router.post('/', createConsumibleController);
router.get('/', getAllConsumiblesController);
router.get('/:id', getConsumibleByIdController);
router.put('/:id', updateConsumibleController);
router.delete('/:id', deleteConsumibleController);

export default router;
