export class CreateAsistenteDto {
    private constructor(
      public readonly caracteristicas: string,
      public readonly descripcion: string,
      public readonly soporte: string,
      public readonly areaId: number,

    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAsistenteDto?]  {
  
      const { caracteristicas,descripcion,soporte,areaId} = props;
  
      if (!caracteristicas) {
        return ['La propiedad caracteristicas es obligatoria', undefined];
      }
      if (!descripcion) {
        return ['La propiedad descripcion es obligatoria', undefined];
      }
      if (!soporte) {
        return ['La propiedad soporte es obligatoria', undefined];
      }
      if (!areaId) {
        return ['La propiedad areaid es obligatoria', undefined];
      }
  
  
      return [undefined, new CreateAsistenteDto(caracteristicas,descripcion,soporte,areaId)];
    }
  }