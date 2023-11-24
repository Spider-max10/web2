"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciasRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AsistenciasRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const asistenciasController = new controller_1.AsistenciasController();
        router.get('/', asistenciasController.getAsistencias);
        router.get('/:id', asistenciasController.getAsistenciaById);
        router.post('/', asistenciasController.createAsistencia);
        router.put('/:id', asistenciasController.updateAsistencia);
        router.delete('/:id', asistenciasController.deleteAsistencia);
        return router;
    }
}
exports.AsistenciasRoutes = AsistenciasRoutes;
