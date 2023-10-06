import { PrismaClient, Consumible } from '@prisma/client';

const prisma = new PrismaClient();

export const createConsumible = async (data: Consumible) => {
  return prisma.consumible.create({ data });
};

export const findAllConsumibles = async () => {
  return prisma.consumible.findMany();
};

export const findConsumibleById = async (id: number) => {
  return prisma.consumible.findUnique({ where: { id } });
};

export const updateConsumible = async (id: number, data: Consumible) => {
  return prisma.consumible.update({ where: { id }, data });
};

export const deleteConsumible = async (id: number) => {
  return prisma.consumible.delete({ where: { id } });
};
