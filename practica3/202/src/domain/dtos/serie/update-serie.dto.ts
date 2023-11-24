export class UpdateSeriesDto {

    private constructor(
      
      public readonly id: number,
      public readonly consumible: string,
      public readonly tipo: String,
      public readonly modeloId: number,
      public readonly conectorId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.consumible ) returnObj.consumible= this.consumible;
      if ( this.tipo ) returnObj.tipo= this.tipo;
      if ( this.modeloId ) returnObj.modeloId = this.modeloId;
      if ( this.conectorId ) returnObj.conectorId = this.conectorId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateSeriesDto?]  {
  
      const { id,consumible, tipo , modeloId, conectorId} = props;
      let newName = consumible;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !consumible && !tipo && !modeloId && !conectorId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateSeriesDto(id, consumible,tipo,modeloId,conectorId)];
    }
    
  
  }