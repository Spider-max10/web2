"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./asistencias/routes");
const routes_2 = require("./clientes/routes");
const routes_3 = require("./modelo/routes");
const routes_4 = require("./series/routes");
const routes_5 = require("./asistente/routes");
const routes_6 = require("./area/routes");
const routes_7 = require("./tecnico/routes");
const routes_8 = require("./conector/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/asistencia', routes_1.AsistenciasRoutes.routes);
        router.use('/api/cliente', routes_2.ClienteRoutes.routes);
        router.use('/api/modelo', routes_3.ModeloRoutes.routes);
        router.use('/api/serie', routes_4.SerieRoutes.routes);
        router.use('/api/area', routes_6.AreaRoutes.routes);
        router.use('/api/asistente', routes_5.AsistenteIdRoutes.routes);
        router.use('/api/tecnico', routes_7.TecnicoRoutes.routes);
        router.use('/api/conector', routes_8.ConectorRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
