"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsistenciaDto = void 0;
class UpdateAsistenciaDto {
    constructor(id, instancia, servicio, atencion, serieId, asistenteId, clienteId, tecnicoId) {
        this.id = id;
        this.instancia = instancia;
        this.servicio = servicio;
        this.atencion = atencion;
        this.serieId = serieId;
        this.asistenteId = asistenteId;
        this.clienteId = clienteId;
        this.tecnicoId = tecnicoId;
    }
    get values() {
        const returnObj = {};
        if (this.instancia)
            returnObj.instancia = this.instancia;
        if (this.servicio)
            returnObj.servicio = this.servicio;
        if (this.atencion)
            returnObj.antencion = this.atencion;
        if (this.serieId)
            returnObj.seriesId = this.serieId;
        if (this.asistenteId)
            returnObj.asistenteId = this.asistenteId;
        if (this.clienteId)
            returnObj.clienteId = this.clienteId;
        if (this.tecnicoId)
            returnObj.tecnicoId = this.tecnicoId;
        return returnObj;
    }
    static create(props) {
        const { id, instancia, servicio, antencion, serieId, asistenteId, clienteId, tecnicoId } = props;
        let newName = instancia;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!instancia && !servicio && !antencion && !serieId && !asistenteId && !clienteId && !tecnicoId) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateAsistenciaDto(id, instancia, servicio, antencion, serieId, asistenteId, clienteId, tecnicoId)];
    }
}
exports.UpdateAsistenciaDto = UpdateAsistenciaDto;
