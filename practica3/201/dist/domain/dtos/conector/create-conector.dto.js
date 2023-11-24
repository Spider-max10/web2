"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConectorDto = void 0;
class CreateConectorDto {
    constructor(tipo, descripcion) {
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
    static create(props) {
        const { tipo, descripcion } = props;
        if (!tipo) {
            return ['La propiedad tipo es obligatoria', undefined];
        }
        if (!descripcion) {
            return ['La propiedad descripcion es obligatoria', undefined];
        }
        return [undefined, new CreateConectorDto(tipo, descripcion)];
    }
}
exports.CreateConectorDto = CreateConectorDto;
