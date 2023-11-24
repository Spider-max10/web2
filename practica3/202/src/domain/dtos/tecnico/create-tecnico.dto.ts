export class CreateTecnicoDto {
    private constructor(
      public readonly nombre : string,
      public readonly ntelefono: number,

    ){}
    static create( props: {[key:string]: any} ): [string?, CreateTecnicoDto?]  {
  
      const {nombre,ntelefono} = props;
  
      if (!nombre) {
        return ['La propiedad nombre es obligatoria', undefined];
      }
      if (!ntelefono) {
        return ['La propiedad ntelefono es obligatoria', undefined];
      }

      return [undefined, new CreateTecnicoDto(nombre,ntelefono)];
    }
  }