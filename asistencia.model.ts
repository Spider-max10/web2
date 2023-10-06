import { PrismaClient, Asistencia } from '@prisma/client';

const prisma = new PrismaClient();

export const createAsistencia = async (data: Asistencia) => {
  return prisma.asistencia.create({ data });
};

export const findAllAsistencias = async () => {
  return prisma.asistencia.findMany({
    include: {
      consumible: true,
      asistente: true,
    },
  });
};

export const findAsistenciaById = async (id: number) => {
  return prisma.asistencia.findUnique({
    where: { id },
    include: {
      consumible: true,
      asistente: true,
    },
  });
};
export const updateAsistencia = async (id: number, data: Asistencia) => {
  try {
    const updatedAsistencia = await prisma.asistencia.update({
      where: { id },
      data: {
        idConsumible: data.idConsumible, // Actualiza el idConsumible si es proporcionado
        soporte: data.soporte,
        requisito: data.requisito,
      },
      include: {
        consumible: true,
        asistente: true,
      },
    });

    return updatedAsistencia;
  } catch (error: any) {
    throw new Error('Error al actualizar la Asistencia: ' + error.message);
  }
};


export const deleteAsistencia = async (id: number) => {
  return prisma.asistencia.delete({
    where: { id },
    include: {
      consumible: true,
      asistente: true,
    },
  });
};
