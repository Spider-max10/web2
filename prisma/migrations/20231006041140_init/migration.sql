/*
  Warnings:

  - The primary key for the `Asistente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Asistente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Asistencia" ADD COLUMN     "idAsistente" INTEGER;

-- AlterTable
ALTER TABLE "Asistente" DROP CONSTRAINT "Asistente_pkey",
DROP COLUMN "id",
ADD COLUMN     "idAsistente" SERIAL NOT NULL,
ADD CONSTRAINT "Asistente_pkey" PRIMARY KEY ("idAsistente");

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_idAsistente_fkey" FOREIGN KEY ("idAsistente") REFERENCES "Asistente"("idAsistente") ON DELETE SET NULL ON UPDATE CASCADE;
