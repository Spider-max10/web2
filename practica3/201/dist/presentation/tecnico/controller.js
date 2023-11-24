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
exports.tecnicoController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class tecnicoController {
    //* DI
    constructor() {
        this.getTecnico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tecnico = yield postgres_1.prisma.tecnico.findMany();
            return res.json(tecnico);
        });
        this.getTecnicoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const tecnico = yield postgres_1.prisma.tecnico.findFirst({
                where: { id }
            });
            (tecnico)
                ? res.json(tecnico)
                : res.status(404).json({ error: `Tecnico with id ${id} not found` });
        });
        this.createTecnico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createTecnicoDto] = dtos_1.CreateTecnicoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const tecnico = yield postgres_1.prisma.tecnico.create({
                data: createTecnicoDto
            });
            res.json(tecnico);
        });
        this.updateTecnico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateTecnicoDto] = dtos_1.UpdateTecnicoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const tecnico = yield postgres_1.prisma.tecnico.findFirst({
                where: { id }
            });
            if (!tecnico)
                return res.status(404).json({ error: `tecnico with id ${id} not found` });
            const updatedTecnico = yield postgres_1.prisma.tecnico.update({
                where: { id },
                data: updateTecnicoDto.values
            });
            res.json(updatedTecnico);
        });
        this.deleteTecnico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const tecnico = yield postgres_1.prisma.tecnico.findFirst({
                where: { id }
            });
            if (!tecnico)
                return res.status(404).json({ error: `Tecnico with id ${id} not found` });
            const deleted = yield postgres_1.prisma.tecnico.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Tecnico with id ${id} not found` });
        });
    }
}
exports.tecnicoController = tecnicoController;
