"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConectorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ConectorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ConectorController = new controller_1.conectorController();
        router.get('/', ConectorController.getConector);
        router.get('/:id', ConectorController.getConectorById);
        router.post('/', ConectorController.createConector);
        router.put('/:id', ConectorController.updateConector);
        router.delete('/:id', ConectorController.deleteConector);
        return router;
    }
}
exports.ConectorRoutes = ConectorRoutes;
