export class CreateAsistenciaDto {
    private constructor(
      public readonly instancia: string,
      public readonly servicio: string,
      public readonly atencion: string,
      public readonly serieId: number,
      public readonly asistenteId: number,
      public readonly clienteId: number,
      public readonly tecnicoId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAsistenciaDto?]  {
  
      const { instancia, servicio, atencion, serieId, asistenteId, clienteId, tecnicoId} = props;
  
      if (!instancia) {
        return ['La propiedad instancia es obligatoria', undefined];
      }
      if (!servicio) {
        return ['La propiedad servicio es obligatoria', undefined];
      }
      if (!atencion) {
        return ['La propiedad atencion es obligatoria', undefined];
      }
      if (!serieId) {
        return ['La propiedad seriesid es obligatoria', undefined];
      }
      if (!asistenteId) {
        return ['La propiedad asistenteid es obligatoria', undefined];
      }
      if (!clienteId) {
        return ['La propiedad clienteid es obligatoria', undefined];
      }
      if (!tecnicoId) {
        return ['La propiedad tecnicoId es obligatoria', undefined];
      }
  
      return [undefined, new CreateAsistenciaDto(instancia , servicio, atencion, serieId, asistenteId, clienteId, tecnicoId)];
    }
  }