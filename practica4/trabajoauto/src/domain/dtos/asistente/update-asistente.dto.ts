

export class UpdateAsistenteDto {

    private constructor(
      
      public readonly id: number,
      public readonly caracteristicas: String,
      public readonly descripcion: String,
      public readonly soporte: String,
      public readonly areaId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.caracteristicas ) returnObj.caracteristicas= this.caracteristicas;
      if ( this.descripcion ) returnObj.descripcion = this.descripcion;
      if ( this.soporte ) returnObj.soporte = this.soporte;
      if ( this.areaId ) returnObj.areaId = this.areaId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateAsistenteDto?]  {
  
      const { id, caracteristicas,descripcion,soporte,areaId } = props;
      let newName = caracteristicas;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !caracteristicas && !descripcion && !soporte && !areaId ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateAsistenteDto (id, caracteristicas,descripcion,soporte, areaId )];
    }
    
  
  }