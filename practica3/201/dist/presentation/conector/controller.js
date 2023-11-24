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
exports.conectorController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class conectorController {
    //* DI
    constructor() {
        this.getConector = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const conector = yield postgres_1.prisma.conector.findMany();
            return res.json(conector);
        });
        this.getConectorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const conector = yield postgres_1.prisma.conector.findFirst({
                where: { id }
            });
            (conector)
                ? res.json(conector)
                : res.status(404).json({ error: `Conector with id ${id} not found` });
        });
        this.createConector = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createConectorDto] = dtos_1.CreateConectorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const conector = yield postgres_1.prisma.conector.create({
                data: createConectorDto
            });
            res.json(conector);
        });
        this.updateConector = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateConectorDto] = dtos_1.UpdateConectorDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const conector = yield postgres_1.prisma.conector.findFirst({
                where: { id }
            });
            if (!conector)
                return res.status(404).json({ error: `Conector with id ${id} not found` });
            const updatedConector = yield postgres_1.prisma.conector.update({
                where: { id },
                data: updateConectorDto.values
            });
            res.json(updatedConector);
        });
        this.deleteConector = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const conector = yield postgres_1.prisma.conector.findFirst({
                where: { id }
            });
            if (!conector)
                return res.status(404).json({ error: `Conector with id ${id} not found` });
            const deleted = yield postgres_1.prisma.conector.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Conector with id ${id} not found` });
        });
    }
}
exports.conectorController = conectorController;
