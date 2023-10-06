import { PrismaClient, Asistente } from '@prisma/client';

const prisma = new PrismaClient();

export const createAsistente = async (data: Asistente) => {
  return prisma.asistente.create({ data });
};

export const findAllAsistentes = async () => {
  return prisma.asistente.findMany();
};

export const findAsistenteById = async (id: number) => {
  return prisma.asistente.findUnique({ where: { idAsistente: id } });
};

export const updateAsistente = async (id: number, data: Asistente) => {
  return prisma.asistente.update({ where: { idAsistente: id }, data });
};

export const deleteAsistente = async (id: number) => {
  return prisma.asistente.delete({ where: { idAsistente: id } });
};
