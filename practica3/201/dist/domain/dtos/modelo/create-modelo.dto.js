"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModeloDto = void 0;
class CreateModeloDto {
    constructor(tipo, modelo) {
        this.tipo = tipo;
        this.modelo = modelo;
    }
    static create(props) {
        const { tipo, modelo } = props;
        if (!tipo) {
            return ['La propiedad tipo es obligatoria', undefined];
        }
        if (!modelo) {
            return ['La propiedad modelo es obligatoria', undefined];
        }
        return [undefined, new CreateModeloDto(tipo, modelo)];
    }
}
exports.CreateModeloDto = CreateModeloDto;
