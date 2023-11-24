"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class SerieRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const SerieController = new controller_1.serieController();
        router.get('/', SerieController.getSerie);
        router.get('/:id', SerieController.getSerie);
        router.post('/', SerieController.createSerie);
        router.put('/:id', SerieController.updateSerie);
        router.delete('/:id', SerieController.deleteSerie);
        return router;
    }
}
exports.SerieRoutes = SerieRoutes;
