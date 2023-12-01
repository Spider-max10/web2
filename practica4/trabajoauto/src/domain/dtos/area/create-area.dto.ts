export class CreateAreaDto {
    private constructor(
      public readonly id : number,
      public readonly narea: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateAreaDto?]  {
  
      const { id, narea} = props;
  
      if ( !id ) return ['id property is required', undefined];

      if ( !narea ) return ['id property is required', undefined];
  
  
      return [undefined, new CreateAreaDto(id,narea)];
    }
  }