import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import {CreateConectorDto, UpdateConectorDto} from '../../domain/dtos'


export class conectorController {
  //* DI
  constructor() { }
  public getConector = async( req: Request, res: Response ) => {
    const conector = await prisma.conector.findMany();
    return res.json( conector );
  };




  public getConectorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const conector = await prisma.conector.findFirst({
      where: { id }
    });
    
    ( conector )
      ? res.json( conector )
      : res.status( 404 ).json( { error: `Conector with id ${ id } not found` } );
  };




  public createConector = async( req: Request, res: Response ) => {
    
    const [error, createConectorDto] = CreateConectorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const conector = await prisma.conector.create({
      data: createConectorDto!
    });

    res.json( conector );

  };



  public updateConector = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateConectorDto] = UpdateConectorDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const conector = await prisma.conector.findFirst({
      where: { id }
    });
    if ( !conector ) return res.status( 404 ).json( { error: `Conector with id ${ id } not found` } );
    const updatedConector = await prisma.conector.update({
      where: { id },
      data: updateConectorDto!.values
    });
    res.json( updatedConector );
  }


  public deleteConector = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const conector = await prisma.conector.findFirst({
      where: { id }
    });

    if ( !conector ) return res.status(404).json({ error: `Conector with id ${ id } not found` });
    const deleted = await prisma.conector.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Conector with id ${ id } not found` });
  }
}