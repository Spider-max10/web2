export class UpdateConectorDto {

    private constructor(
      
      public readonly id: number,
      public readonly tipo: String,
      public readonly descripcion: String,

    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.tipo ) returnObj.tipo= this.tipo;
      if ( this.descripcion ) returnObj.descripcion = this.descripcion;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateConectorDto?]  {
  
      const { id,tipo,descripcion} = props;
      let newName = tipo;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !tipo && !descripcion ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateConectorDto (id, tipo,descripcion )];
    }
    
  
  }