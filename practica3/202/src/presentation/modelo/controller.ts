import { Request, Response } from 'express';
import { CreateModeloDto, UpdateModeloDto } from '../../domain/dtos';
import { CreateModelo, DeleteModelo, GetModelo, GetModelos, ModeloRepository, UpdateModelo } from '../../domain';


export class ModelosController {

  //* DI
  constructor(
    private readonly modeloRepository: ModeloRepository,
  ) { }


  public getModelos = ( req: Request, res: Response ) => {

    new GetModelos( this.modeloRepository )
      .execute()
      .then( modelos => res.json( modelos ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getModeloById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetModelo( this.modeloRepository )
      .execute( id )
      .then( modelo => res.json( modelo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createModelo = ( req: Request, res: Response ) => {
    const [ error, createModeloDto ] = CreateModeloDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateModelo ( this.modeloRepository )
      .execute( createModeloDto! )
      .then( modelo => res.json( modelo ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateModelo = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateModeloDto ] = UpdateModeloDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateModelo( this.modeloRepository )
      .execute( updateModeloDto! )
      .then( cmodelo => res.json( cmodelo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteModelo = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteModelo( this.modeloRepository )
      .execute( id )
      .then( modelo => res.json( modelo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 