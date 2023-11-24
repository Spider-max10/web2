export class CreateClienteDto {
    private constructor(
      public readonly name : string,
      public readonly email: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateClienteDto?]  {
  
      const { name, email} = props;
  
      if (!name) {
        return ['La propiedad name es obligatoria', undefined];
      }
      if (!email) {
        return ['La propiedad email es obligatoria', undefined];
      }
  
      return [undefined, new CreateClienteDto(name, email)];
    }
  }