"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsistenteDto = void 0;
class UpdateAsistenteDto {
    constructor(id, caracteristicas, descripcion, soporte, areaId) {
        this.id = id;
        this.caracteristicas = caracteristicas;
        this.descripcion = descripcion;
        this.soporte = soporte;
        this.areaId = areaId;
    }
    get values() {
        const returnObj = {};
        if (this.caracteristicas)
            returnObj.caracteristicas = this.caracteristicas;
        if (this.descripcion)
            returnObj.descripcion = this.descripcion;
        if (this.soporte)
            returnObj.soporte = this.soporte;
        if (this.areaId)
            returnObj.areaId = this.areaId;
        return returnObj;
    }
    static create(props) {
        const { id, caracteristicas, descripcion, soporte, areaId } = props;
        let newName = caracteristicas;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!caracteristicas && !descripcion && !soporte && !areaId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateAsistenteDto(id, caracteristicas, descripcion, soporte, areaId)];
    }
}
exports.UpdateAsistenteDto = UpdateAsistenteDto;
