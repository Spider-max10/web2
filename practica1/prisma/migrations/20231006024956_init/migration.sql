-- CreateTable
CREATE TABLE "Marca" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modelo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "marcaId" INTEGER NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serial" (
    "id" SERIAL NOT NULL,
    "serial" INTEGER NOT NULL,
    "modeloId" INTEGER NOT NULL,
    "instanciaId" INTEGER NOT NULL,

    CONSTRAINT "Serial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,

    CONSTRAINT "Asistente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "idSerial" INTEGER NOT NULL,
    "idConsumible" INTEGER NOT NULL,
    "soporte" TEXT NOT NULL,
    "requisito" TEXT NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumible" (
    "id" SERIAL NOT NULL,
    "idModelo" INTEGER NOT NULL,

    CONSTRAINT "Consumible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peticion" (
    "id" SERIAL NOT NULL,
    "peticion" TEXT NOT NULL,

    CONSTRAINT "Peticion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modelo" ADD CONSTRAINT "Modelo_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serial" ADD CONSTRAINT "Serial_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_idSerial_fkey" FOREIGN KEY ("idSerial") REFERENCES "Serial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_idConsumible_fkey" FOREIGN KEY ("idConsumible") REFERENCES "Consumible"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumible" ADD CONSTRAINT "Consumible_idModelo_fkey" FOREIGN KEY ("idModelo") REFERENCES "Modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
