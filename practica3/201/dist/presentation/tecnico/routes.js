"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TecnicoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const TecnicoController = new controller_1.tecnicoController();
        router.get('/', TecnicoController.getTecnico);
        router.get('/:id', TecnicoController.getTecnicoById);
        router.post('/', TecnicoController.createTecnico);
        router.put('/:id', TecnicoController.updateTecnico);
        router.delete('/:id', TecnicoController.deleteTecnico);
        return router;
    }
}
exports.TecnicoRoutes = TecnicoRoutes;
