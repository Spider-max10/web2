"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ModeloRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ModeloController = new controller_1.modeloController();
        router.get('/', ModeloController.getModelo);
        router.get('/:id', ModeloController.getModeloById);
        router.post('/', ModeloController.createModelo);
        router.put('/:id', ModeloController.updateModelo);
        router.delete('/:id', ModeloController.deleteModelo);
        return router;
    }
}
exports.ModeloRoutes = ModeloRoutes;
