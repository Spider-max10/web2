"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAsistenteDto = void 0;
class CreateAsistenteDto {
    constructor(caracteristicas, descripcion, soporte, areaId) {
        this.caracteristicas = caracteristicas;
        this.descripcion = descripcion;
        this.soporte = soporte;
        this.areaId = areaId;
    }
    static create(props) {
        const { caracteristicas, descripcion, soporte, areaId } = props;
        if (!caracteristicas) {
            return ['La propiedad caracteristicas es obligatoria', undefined];
        }
        if (!descripcion) {
            return ['La propiedad descripcion es obligatoria', undefined];
        }
        if (!soporte) {
            return ['La propiedad soporte es obligatoria', undefined];
        }
        if (!areaId) {
            return ['La propiedad areaid es obligatoria', undefined];
        }
        return [undefined, new CreateAsistenteDto(caracteristicas, descripcion, soporte, areaId)];
    }
}
exports.CreateAsistenteDto = CreateAsistenteDto;
