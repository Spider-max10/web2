"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteDto = void 0;
class CreateClienteDto {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static create(props) {
        const { name, email } = props;
        if (!name) {
            return ['La propiedad name es obligatoria', undefined];
        }
        if (!email) {
            return ['La propiedad email es obligatoria', undefined];
        }
        return [undefined, new CreateClienteDto(name, email)];
    }
}
exports.CreateClienteDto = CreateClienteDto;
