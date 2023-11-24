"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AreaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const areaController = new controller_1.AreaController();
        router.get('/', areaController.getArea);
        router.get('/:id', areaController.getAreaById);
        router.post('/', areaController.createArea);
        router.put('/:id', areaController.updateArea);
        router.delete('/:id', areaController.deleteArea);
        return router;
    }
}
exports.AreaRoutes = AreaRoutes;
