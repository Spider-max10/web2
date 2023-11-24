"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAreaDto = void 0;
class CreateAreaDto {
    constructor(id, narea) {
        this.id = id;
        this.narea = narea;
    }
    static create(props) {
        const { id, narea } = props;
        if (!id)
            return ['id property is required', undefined];
        if (!narea)
            return ['id property is required', undefined];
        return [undefined, new CreateAreaDto(id, narea)];
    }
}
exports.CreateAreaDto = CreateAreaDto;
