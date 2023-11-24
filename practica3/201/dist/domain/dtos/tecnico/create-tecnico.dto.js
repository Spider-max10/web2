"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTecnicoDto = void 0;
class CreateTecnicoDto {
    constructor(nombre, ntelefono) {
        this.nombre = nombre;
        this.ntelefono = ntelefono;
    }
    static create(props) {
        const { nombre, ntelefono } = props;
        if (!nombre) {
            return ['La propiedad nombre es obligatoria', undefined];
        }
        if (!ntelefono) {
            return ['La propiedad ntelefono es obligatoria', undefined];
        }
        return [undefined, new CreateTecnicoDto(nombre, ntelefono)];
    }
}
exports.CreateTecnicoDto = CreateTecnicoDto;
