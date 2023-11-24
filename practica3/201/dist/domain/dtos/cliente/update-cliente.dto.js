"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteDto = void 0;
class UpdateClienteDto {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        if (this.email)
            returnObj.email = this.email;
        return returnObj;
    }
    static create(props) {
        const { id, name, email } = props;
        let newName = id;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!name && !email) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateClienteDto(id, name, email)];
    }
}
exports.UpdateClienteDto = UpdateClienteDto;
