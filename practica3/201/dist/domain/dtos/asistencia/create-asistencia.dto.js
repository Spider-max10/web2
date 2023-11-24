"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAsistenciaDto = void 0;
class CreateAsistenciaDto {
    constructor(instancia, servicio, atencion, serieId, asistenteId, clienteId, tecnicoId) {
        this.instancia = instancia;
        this.servicio = servicio;
        this.atencion = atencion;
        this.serieId = serieId;
        this.asistenteId = asistenteId;
        this.clienteId = clienteId;
        this.tecnicoId = tecnicoId;
    }
    static create(props) {
        const { instancia, servicio, atencion, serieId, asistenteId, clienteId, tecnicoId } = props;
        if (!instancia) {
            return ['La propiedad instancia es obligatoria', undefined];
        }
        if (!servicio) {
            return ['La propiedad servicio es obligatoria', undefined];
        }
        if (!atencion) {
            return ['La propiedad atencion es obligatoria', undefined];
        }
        if (!serieId) {
            return ['La propiedad seriesid es obligatoria', undefined];
        }
        if (!asistenteId) {
            return ['La propiedad asistenteid es obligatoria', undefined];
        }
        if (!clienteId) {
            return ['La propiedad clienteid es obligatoria', undefined];
        }
        if (!tecnicoId) {
            return ['La propiedad tecnicoId es obligatoria', undefined];
        }
        return [undefined, new CreateAsistenciaDto(instancia, servicio, atencion, serieId, asistenteId, clienteId, tecnicoId)];
    }
}
exports.CreateAsistenciaDto = CreateAsistenciaDto;
