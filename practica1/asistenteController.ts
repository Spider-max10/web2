import { Request, Response } from 'express';
import {
  createAsistente,
  findAllAsistentes,
  findAsistenteById,
  updateAsistente,
  deleteAsistente,
} from './asistente.model';

// Crear un Asistente
export const createAsistenteController = async (req: Request, res: Response) => {
  try {
    const data = req.body; // Datos del Asistente
    // Agrega un registro de consola para mostrar los datos que se van a crear
    console.log('Datos que se van a crear:', data);
    
    const asistente = await createAsistente(data);
    
    // Agrega un registro de consola para mostrar el asistente creado
    console.log('Asistente creado:', asistente);

    res.json(asistente);
  } catch (error) {
    // Agrega un registro de consola para mostrar cualquier error que ocurra
    console.error('Error al crear el Asistente:', error);

    res.status(500).json({ error: 'No se pudo crear el Asistente.' });
  }
};


// Obtener todos los Asistentes
export const getAllAsistentesController = async (req: Request, res: Response) => {
  try {
    const asistentes = await findAllAsistentes();
    res.json(asistentes);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los Asistentes.' });
  }
};

// Obtener un Asistente por ID
export const getAsistenteByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const asistente = await findAsistenteById(id);
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado.' });
    }
    res.json(asistente);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el Asistente.' });
  }
};

// Actualizar un Asistente por ID
export const updateAsistenteController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body; // Datos actualizados
    const asistente = await updateAsistente(id, data);
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado.' });
    }
    res.json(asistente);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el Asistente.' });
  }
};

// Eliminar un Asistente por ID
export const deleteAsistenteController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const asistente = await deleteAsistente(id);
    if (!asistente) {
      return res.status(404).json({ error: 'Asistente no encontrado.' });
    }
    res.json({ message: 'Asistente eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el Asistente.' });
  }
};
