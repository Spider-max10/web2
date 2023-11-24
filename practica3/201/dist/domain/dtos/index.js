"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./asistencia/create-asistencia.dto"), exports);
__exportStar(require("./asistencia/update-asistencia.dto"), exports);
__exportStar(require("./area/create-area.dto"), exports);
__exportStar(require("./area/update-area.dto"), exports);
__exportStar(require("./cliente/create-cliente.dto"), exports);
__exportStar(require("./cliente/update-cliente.dto"), exports);
__exportStar(require("./serie/create-serie.dto"), exports);
__exportStar(require("./serie/update-serie.dto"), exports);
__exportStar(require("./modelo/create-modelo.dto"), exports);
__exportStar(require("./modelo/update-modelo.dto"), exports);
__exportStar(require("./asistente/create-asistente.dto"), exports);
__exportStar(require("./asistente/update-asistente.dto"), exports);
__exportStar(require("./conector/create-conector.dto"), exports);
__exportStar(require("./conector/update-conector.dto"), exports);
__exportStar(require("./tecnico/create-tecnico.dto"), exports);
__exportStar(require("./tecnico/update-tecnico.dto"), exports);
