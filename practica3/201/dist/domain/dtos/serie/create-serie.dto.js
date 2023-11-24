"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSeriesDto = void 0;
class CreateSeriesDto {
    constructor(consumible, tipo, conectorId, modeloId) {
        this.consumible = consumible;
        this.tipo = tipo;
        this.conectorId = conectorId;
        this.modeloId = modeloId;
    }
    static create(props) {
        const { consumible, tipo, conectorId, modeloId } = props;
        if (!consumible) {
            return ['La propiedad consumible es obligatoria', undefined];
        }
        if (!tipo) {
            return ['La propiedad tipo es obligatoria', undefined];
        }
        if (!conectorId) {
            return ['La propiedad conexionid es obligatoria', undefined];
        }
        if (!modeloId) {
            return ['La propiedad modeloid es obligatoria', undefined];
        }
        return [undefined, new CreateSeriesDto(consumible, tipo, conectorId, modeloId)];
    }
}
exports.CreateSeriesDto = CreateSeriesDto;
