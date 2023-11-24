import { Request, Response } from 'express';
import { CreateConectorDto, UpdateConectorDto } from '../../domain/dtos';
import { CreateConector, DeleteConector, GetConector, GetConectores, ConectorRepository, UpdateConector } from '../../domain';


export class ConectoresController {

  //* DI
  constructor(
    private readonly conectorRepository: ConectorRepository,
  ) { }


  public getConectores = ( req: Request, res: Response ) => {

    new GetConectores( this.conectorRepository )
      .execute()
      .then( conectores => res.json( conectores ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getConectorById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetConector( this.conectorRepository )
      .execute( id )
      .then( conector => res.json( conector ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createConector = ( req: Request, res: Response ) => {
    const [ error, createConectorDto ] = CreateConectorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateConector( this.conectorRepository )
      .execute( createConectorDto! )
      .then( conector => res.json( conector ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateConector = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateConectorDto ] = UpdateConectorDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateConector( this.conectorRepository )
      .execute( updateConectorDto! )
      .then( conector => res.json( conector ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteConector = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteConector( this.conectorRepository )
      .execute( id )
      .then( conector => res.json( conector ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 