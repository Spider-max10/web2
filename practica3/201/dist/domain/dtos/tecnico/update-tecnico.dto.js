"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTecnicoDto = void 0;
class UpdateTecnicoDto {
    constructor(id, nombre, ntelefono) {
        this.id = id;
        this.nombre = nombre;
        this.ntelefono = ntelefono;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.nombre)
            returnObj.nombre = this.nombre;
        if (this.ntelefono)
            returnObj.ntelefono = this.ntelefono;
        return returnObj;
    }
    static create(props) {
        const { id, nombre, ntelefono } = props;
        let newName = id;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !nombre && !ntelefono) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTecnicoDto(id, nombre, ntelefono)];
    }
}
exports.UpdateTecnicoDto = UpdateTecnicoDto;
