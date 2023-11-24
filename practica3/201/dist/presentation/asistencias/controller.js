"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciasController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class AsistenciasController {
    //* DI
    constructor() {
        this.getAsistencias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const asistencia = yield postgres_1.prisma.asistencia.findMany();
            return res.json(asistencia);
        });
        this.getAsistenciaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const asistencia = yield postgres_1.prisma.asistencia.findFirst({
                where: { id }
            });
            (asistencia)
                ? res.json(asistencia)
                : res.status(404).json({ error: `Asistencia with id ${id} not found` });
        });
        this.createAsistencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createAsistenciaDto] = dtos_1.CreateAsistenciaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const asistencia = yield postgres_1.prisma.asistencia.create({
                data: createAsistenciaDto
            });
            res.json(asistencia);
        });
        this.updateAsistencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateAsistenciaDto] = dtos_1.UpdateAsistenciaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const asistencia = yield postgres_1.prisma.asistencia.findFirst({
                where: { id }
            });
            if (!asistencia)
                return res.status(404).json({ error: `Asistencia with id ${id} not found` });
            const updatedAsistencia = yield postgres_1.prisma.asistencia.update({
                where: { id },
                data: updateAsistenciaDto.values
            });
            res.json(updatedAsistencia);
        });
        this.deleteAsistencia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const asistencia = yield postgres_1.prisma.asistencia.findFirst({
                where: { id }
            });
            if (!asistencia)
                return res.status(404).json({ error: `Asistencia with id ${id} not found` });
            const deleted = yield postgres_1.prisma.asistencia.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Asistencia with id ${id} not found` });
        });
    }
}
exports.AsistenciasController = AsistenciasController;
