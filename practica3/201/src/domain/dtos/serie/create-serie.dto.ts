export class CreateSeriesDto {
    private constructor(
      public readonly consumible : string,
      public readonly tipo: string,
      public readonly conectorId: number,
      public readonly modeloId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateSeriesDto?]  {
  
      const { consumible, tipo,conectorId,modeloId} = props;
  
      if (!consumible) {
        return ['La propiedad consumible es obligatoria', undefined];
      }
      if (!tipo) {
        return ['La propiedad tipo es obligatoria', undefined];
      }
      if (!conectorId) {
        return ['La propiedad conexionid es obligatoria', undefined];
      }
      if (!modeloId) {
        return ['La propiedad modeloid es obligatoria', undefined];
      }
  
      return [undefined, new CreateSeriesDto(consumible,tipo,conectorId,modeloId)];
    }
  }