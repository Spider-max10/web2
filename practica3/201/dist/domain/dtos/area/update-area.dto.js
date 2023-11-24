"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAreaDto = void 0;
class UpdateAreaDto {
    constructor(id, narea) {
        this.id = id;
        this.narea = narea;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.narea)
            returnObj.narea = this.narea;
        return returnObj;
    }
    static create(props) {
        const { id, narea } = props;
        let newName = narea;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (!id && !narea) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateAreaDto(id, narea)];
    }
}
exports.UpdateAreaDto = UpdateAreaDto;
