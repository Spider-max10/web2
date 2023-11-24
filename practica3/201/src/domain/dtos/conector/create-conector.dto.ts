export class CreateConectorDto {
    private constructor(
      public readonly tipo: string,
      public readonly descripcion: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateConectorDto?]  {
  
      const { tipo, descripcion} = props;

      if (!tipo) {
        return ['La propiedad tipo es obligatoria', undefined];
      }
      if (!descripcion) {
        return ['La propiedad descripcion es obligatoria', undefined];
      }
  
      return [undefined, new CreateConectorDto(tipo, descripcion)];
    }
  }