"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeriesDto = void 0;
class UpdateSeriesDto {
    constructor(id, consumible, tipo, modeloId, conectorId) {
        this.id = id;
        this.consumible = consumible;
        this.tipo = tipo;
        this.modeloId = modeloId;
        this.conectorId = conectorId;
    }
    get values() {
        const returnObj = {};
        if (this.consumible)
            returnObj.consumible = this.consumible;
        if (this.tipo)
            returnObj.tipo = this.tipo;
        if (this.modeloId)
            returnObj.modeloId = this.modeloId;
        if (this.conectorId)
            returnObj.conectorId = this.conectorId;
        return returnObj;
    }
    static create(props) {
        const { id, consumible, tipo, modeloId, conectorId } = props;
        let newName = consumible;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!consumible && !tipo && !modeloId && !conectorId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateSeriesDto(id, consumible, tipo, modeloId, conectorId)];
    }
}
exports.UpdateSeriesDto = UpdateSeriesDto;
