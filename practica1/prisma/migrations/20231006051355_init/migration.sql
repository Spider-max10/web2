/*
  Warnings:

  - Added the required column `nombre` to the `Consumible` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consumible" ADD COLUMN     "nombre" TEXT NOT NULL;
