"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ClienteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ClientesController = new controller_1.clienteController();
        router.get('/', ClientesController.getClientes);
        router.get('/:id', ClientesController.getClienteById);
        router.post('/', ClientesController.createCliente);
        router.put('/:id', ClientesController.updateCliente);
        router.delete('/:id', ClientesController.deleteCliente);
        return router;
    }
}
exports.ClienteRoutes = ClienteRoutes;
