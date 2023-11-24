



export class ModeloEntity {

    constructor(
      public id: number,
      public tipo : string,
      public modelo: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): ModeloEntity {
      const { id,tipo, modelo } = object;
      if ( !id ) throw 'Id is required';
      if ( !tipo ) throw 'tipo is required';
      if ( !modelo ) throw 'descripcion is required';
  
        return new ModeloEntity(id,tipo, modelo)
    }
  
  }
  
  
  