/*
  Warnings:

  - You are about to drop the column `idSerial` on the `Asistencia` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_idSerial_fkey";

-- AlterTable
ALTER TABLE "Asistencia" DROP COLUMN "idSerial";
