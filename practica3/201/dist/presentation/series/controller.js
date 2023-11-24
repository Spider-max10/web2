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
exports.serieController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos/");
class serieController {
    //* DI
    constructor() {
        this.getSerie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const serie = yield postgres_1.prisma.serie.findMany();
            return res.json(serie);
        });
        this.getSerieById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const serie = yield postgres_1.prisma.serie.findFirst({
                where: { id }
            });
            (serie)
                ? res.json(serie)
                : res.status(404).json({ error: `Serie with id ${id} not found` });
        });
        this.createSerie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createSerieDto] = dtos_1.CreateSeriesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const serie = yield postgres_1.prisma.serie.create({
                data: createSerieDto
            });
            res.json(serie);
        });
        this.updateSerie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateSerieDto] = dtos_1.UpdateSeriesDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const serie = yield postgres_1.prisma.serie.findFirst({
                where: { id }
            });
            if (!serie)
                return res.status(404).json({ error: `Serie with id ${id} not found` });
            const updatedSerie = yield postgres_1.prisma.serie.update({
                where: { id },
                data: updateSerieDto.values
            });
            res.json(updateSerieDto);
        });
        this.deleteSerie = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const serie = yield postgres_1.prisma.serie.findFirst({
                where: { id }
            });
            if (!serie)
                return res.status(404).json({ error: `Serie with id ${id} not found` });
            const deleted = yield postgres_1.prisma.serie.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Serie with id ${id} not found` });
        });
    }
}
exports.serieController = serieController;
