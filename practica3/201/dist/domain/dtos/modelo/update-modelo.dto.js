"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateModeloDto = void 0;
class UpdateModeloDto {
    constructor(tipo, modelo) {
        this.tipo = tipo;
        this.modelo = modelo;
    }
    get values() {
        const returnObj = {};
        if (this.tipo)
            returnObj.tipo = this.tipo;
        if (this.modelo)
            returnObj.modelo = this.modelo;
        return returnObj;
    }
    static create(props) {
        const { id, tipo, modelo } = props;
        let newName = tipo;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!tipo && !modelo) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateModeloDto(tipo, modelo)];
    }
}
exports.UpdateModeloDto = UpdateModeloDto;
