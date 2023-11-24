export class CreateModeloDto {
    private constructor(
      public readonly tipo : string,
      public readonly modelo: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateModeloDto?]  {
  
      const { tipo, modelo} = props;
  
      if (!tipo) {
        return ['La propiedad tipo es obligatoria', undefined];
      }
      if (!modelo) {
        return ['La propiedad modelo es obligatoria', undefined];
      }
      return [undefined, new CreateModeloDto(tipo, modelo)];
    }
  }