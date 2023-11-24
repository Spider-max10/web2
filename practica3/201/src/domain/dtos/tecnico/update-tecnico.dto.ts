

export class UpdateTecnicoDto {

    private constructor(
      
      public readonly id: number,
      public readonly nombre: String,
      public readonly ntelefono: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id= this.id;
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.ntelefono) returnObj.ntelefono = this.ntelefono;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateTecnicoDto?]  {
  
      const { id, nombre, ntelefono } = props;
      let newName = id;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre && !ntelefono  ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateTecnicoDto (id, nombre, ntelefono )];
    }
    
  
  }