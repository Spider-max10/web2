

export class UpdateModeloDto {

    private constructor(
      
      public readonly tipo: string,
      public readonly modelo: String,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.tipo ) returnObj.tipo= this.tipo;
      if ( this.modelo ) returnObj.modelo = this.modelo;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateModeloDto?]  {
  
      const { id, tipo, modelo} = props;
      let newName = tipo;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !tipo && !modelo ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateModeloDto(tipo, modelo)];
    }
    
  
  }