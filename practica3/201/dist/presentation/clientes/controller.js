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
exports.clienteController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class clienteController {
    //* DI
    constructor() {
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const clienteId = yield postgres_1.prisma.cliente.findMany();
            return res.json(clienteId);
        });
        this.getClienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            //    localhost:3000/movies/1
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const clienteId = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            (clienteId)
                ? res.json(clienteId)
                : res.status(404).json({ error: `Cliente with id ${id} not found` });
        });
        this.createCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createClienteDto] = dtos_1.CreateClienteDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const clienteId = yield postgres_1.prisma.cliente.create({
                data: createClienteDto
            });
            res.json(clienteId);
        });
        this.updateCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateClienteDto] = dtos_1.UpdateClienteDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const clienteId = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            if (!clienteId)
                return res.status(404).json({ error: `Cliente with id ${id} not found` });
            const updatedCliente = yield postgres_1.prisma.cliente.update({
                where: { id },
                data: updateClienteDto.values
            });
            res.json(updatedCliente);
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const cliente = yield postgres_1.prisma.cliente.findFirst({
                where: { id }
            });
            if (!cliente)
                return res.status(404).json({ error: `Cliente with id ${id} not found` });
            const deleted = yield postgres_1.prisma.cliente.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Cliente with id ${id} not found` });
        });
    }
}
exports.clienteController = clienteController;
