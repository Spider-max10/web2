

export class UpdateClienteDto {

    private constructor(
      
      public readonly id: number,
      public readonly name?: String,
      public readonly email?:  String,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.name ) returnObj.name = this.name;
      if ( this.email ) returnObj.email = this.email;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateClienteDto?]  {
  
      const { id, name, email } = props;
      let newName = id;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !name && !email ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateClienteDto(id, name,email)];
    }
    
  
  }