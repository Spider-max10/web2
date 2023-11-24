-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "consumible" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "modeloId" INTEGER NOT NULL,
    "conectorId" INTEGER NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "instancia" TEXT NOT NULL,
    "servicio" TEXT NOT NULL,
    "atencion" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,
    "asistenteId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "tecnicoId" INTEGER NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistente" (
    "id" SERIAL NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "soporte" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Asistente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modelo" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "narea" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conector" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Conector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ntelefono" INTEGER NOT NULL,

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Serie_consumible_key" ON "Serie"("consumible");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_name_key" ON "Cliente"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Conector_tipo_key" ON "Conector"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnico_nombre_key" ON "Tecnico"("nombre");

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_conectorId_fkey" FOREIGN KEY ("conectorId") REFERENCES "Conector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_asistenteId_fkey" FOREIGN KEY ("asistenteId") REFERENCES "Asistente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "Tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistente" ADD CONSTRAINT "Asistente_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
