import { Request, Response } from 'express';
import {
  createConsumible,
  findAllConsumibles,
  findConsumibleById,
  updateConsumible,
  deleteConsumible,
} from './consumible.model';

// Crear un Consumible
export const createConsumibleController = async (req: Request, res: Response) => {
  try {
    const data = req.body; // Datos del Consumible
    const consumible = await createConsumible(data);
    res.json(consumible);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el Consumible.' });
  }
};

// Obtener todos los Consumibles
export const getAllConsumiblesController = async (req: Request, res: Response) => {
  try {
    const consumibles = await findAllConsumibles();
    res.json(consumibles);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los Consumibles.' });
  }
};

// Obtener un Consumible por ID
export const getConsumibleByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const consumible = await findConsumibleById(id);
    if (!consumible) {
      return res.status(404).json({ error: 'Consumible no encontrado.' });
    }
    res.json(consumible);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el Consumible.' });
  }
};

// Actualizar un Consumible por ID
export const updateConsumibleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body; // Datos actualizados
    const consumible = await updateConsumible(id, data);
    if (!consumible) {
      return res.status(404).json({ error: 'Consumible no encontrado.' });
    }
    res.json(consumible);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el Consumible.' });
  }
};

// Eliminar un Consumible por ID
export const deleteConsumibleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const consumible = await deleteConsumible(id);
    if (!consumible) {
      return res.status(404).json({ error: 'Consumible no encontrado.' });
    }
    res.json({ message: 'Consumible eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el Consumible.' });
  }
};
