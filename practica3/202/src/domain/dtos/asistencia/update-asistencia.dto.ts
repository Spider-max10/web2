export class UpdateAsistenciaDto {

    private constructor(
      
      public readonly id: number,
      public readonly instancia?: String,
      public readonly servicio?:  String,
      public readonly atencion?: String,
      public readonly serieId?: number,
      public readonly asistenteId?: number,
      public readonly clienteId?: number,
      public readonly tecnicoId?: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.instancia ) returnObj.instancia= this.instancia;
      if ( this.servicio ) returnObj.servicio = this.servicio;
      if ( this.atencion ) returnObj.antencion = this.atencion;
      if ( this.serieId ) returnObj.seriesId = this.serieId;
      if ( this.asistenteId) returnObj.asistenteId = this.asistenteId;
      if ( this.clienteId ) returnObj.clienteId = this.clienteId;
      if ( this.tecnicoId ) returnObj.tecnicoId = this.tecnicoId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateAsistenciaDto?]  {
  
      const { id, instancia, servicio, antencion, serieId,asistenteId, clienteId, tecnicoId } = props;
      let newName = instancia;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !instancia && !servicio && !antencion && !serieId && !asistenteId && !clienteId && !tecnicoId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateAsistenciaDto(id, instancia, servicio, antencion,serieId,asistenteId,clienteId, tecnicoId)];
    }
    
  
  }