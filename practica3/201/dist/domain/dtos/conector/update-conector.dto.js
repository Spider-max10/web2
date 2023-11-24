"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConectorDto = void 0;
class UpdateConectorDto {
    constructor(id, tipo, descripcion) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
    get values() {
        const returnObj = {};
        if (this.tipo)
            returnObj.tipo = this.tipo;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        return returnObj;
    }
    static create(props) {
        const { id, tipo, descripcion } = props;
        let newName = tipo;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!tipo && !descripcion) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateConectorDto(id, tipo, descripcion)];
    }
}
exports.UpdateConectorDto = UpdateConectorDto;
