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
exports.AreaController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class AreaController {
    //* DI
    constructor() {
        this.getArea = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const area = yield postgres_1.prisma.area.findMany();
            return res.json(area);
        });
        this.getAreaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const area = yield postgres_1.prisma.area.findFirst({
                where: { id }
            });
            (area)
                ? res.json(area)
                : res.status(404).json({ error: `Area with id ${id} not found` });
        });
        this.createArea = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createAreaDto] = dtos_1.CreateAreaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const area = yield postgres_1.prisma.area.create({
                data: createAreaDto
            });
            res.json(area);
        });
        this.updateArea = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateAreaDto] = dtos_1.UpdateAreaDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const area = yield postgres_1.prisma.area.findFirst({
                where: { id }
            });
            if (!area)
                return res.status(404).json({ error: `Area with id ${id} not found` });
            const updatedArea = yield postgres_1.prisma.area.update({
                where: { id },
                data: updateAreaDto.values
            });
            res.json(updatedArea);
        });
        this.deleteArea = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const area = yield postgres_1.prisma.area.findFirst({
                where: { id }
            });
            if (!area)
                return res.status(404).json({ error: `Area with id ${id} not found` });
            const deleted = yield postgres_1.prisma.area.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Area with id ${id} not found` });
        });
    }
}
exports.AreaController = AreaController;
