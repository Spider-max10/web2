import { Request, Response } from 'express';
import {
  createAsistencia,
  findAllAsistencias,
  findAsistenciaById,
  updateAsistencia,
  deleteAsistencia,
} from './asistencia.model';

// Crear una Asistencia
export const createAsistenciaController = async (req: Request, res: Response) => {
  try {
    const data = req.body; // Datos de la Asistencia
    const asistencia = await createAsistencia(data);
    res.json(asistencia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la Asistencia.' });
  }
};

// Obtener todas las Asistencias
export const getAllAsistenciasController = async (req: Request, res: Response) => {
  try {
    const asistencias = await findAllAsistencias();
    res.json(asistencias);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las Asistencias.' });
  }
};

// Obtener una Asistencia por ID
export const getAsistenciaByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const asistencia = await findAsistenciaById(id);
    if (!asistencia) {
      return res.status(404).json({ error: 'Asistencia no encontrada.' });
    }
    res.json(asistencia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener la Asistencia.' });
  }
};

// Actualizar una Asistencia por ID
export const updateAsistenciaController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body; // Datos actualizados
    const asistencia = await updateAsistencia(id, data);
    if (!asistencia) {
      return res.status(404).json({ error: 'Asistencia no encontrada.' });
    }
    res.json(asistencia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la Asistencia.' });
  }
};

// Eliminar una Asistencia por ID
export const deleteAsistenciaController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const asistencia = await deleteAsistencia(id);
    if (!asistencia) {
      return res.status(404).json({ error: 'Asistencia no encontrada.' });
    }
    res.json({ message: 'Asistencia eliminada con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar la Asistencia.' });
  }
};
