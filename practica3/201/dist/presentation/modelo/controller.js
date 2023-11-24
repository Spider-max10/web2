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
exports.modeloController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class modeloController {
    //* DI
    constructor() {
        this.getModelo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const modelo = yield postgres_1.prisma.modelo.findMany();
            return res.json(modelo);
        });
        this.getModeloById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const modelo = yield postgres_1.prisma.modelo.findFirst({
                where: { id }
            });
            (modelo)
                ? res.json(modelo)
                : res.status(404).json({ error: `Modelo with id ${id} not found` });
        });
        this.createModelo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createModeloDto] = dtos_1.CreateModeloDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const modelo = yield postgres_1.prisma.modelo.create({
                data: createModeloDto
            });
            res.json(modelo);
        });
        this.updateModelo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateModeloDto] = dtos_1.UpdateModeloDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const modelo = yield postgres_1.prisma.modelo.findFirst({
                where: { id }
            });
            if (!modelo)
                return res.status(404).json({ error: `Modelo with id ${id} not found` });
            const updatedModelo = yield postgres_1.prisma.asistencia.update({
                where: { id },
                data: updateModeloDto.values
            });
            res.json(updatedModelo);
        });
        this.deleteModelo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const modelo = yield postgres_1.prisma.modelo.findFirst({
                where: { id }
            });
            if (!modelo)
                return res.status(404).json({ error: `Modelo with id ${id} not found` });
            const deleted = yield postgres_1.prisma.modelo.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Modelo with id ${id} not found` });
        });
    }
}
exports.modeloController = modeloController;
