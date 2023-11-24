import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAsistenteDto, UpdateAsistenteDto } from '../../domain/dtos';


export class AsistenteController {
  //* DI
  constructor() { }
  public getAsistente = async( req: Request, res: Response ) => {
    const asistente = await prisma.asistente.findMany();
    return res.json( asistente );
  };




  public getAsistenciaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const asistente = await prisma.asistente.findFirst({
      where: { id }
    });
    
    ( asistente )
      ? res.json( asistente )
      : res.status( 404 ).json( { error: `Asistente with id ${ id } not found` } );
  };




  public createAsistente = async( req: Request, res: Response ) => {
    
    const [error, createAsistenteDto] = CreateAsistenteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const asistente = await prisma.asistente.create({
      data: createAsistenteDto!
    });

    res.json( asistente );

  };



  public updateAsistente = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAsistenteDto] = UpdateAsistenteDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const asistente = await prisma.asistente.findFirst({
      where: { id }
    });
    if ( !asistente ) return res.status( 404 ).json( { error: `Asistente with id ${ id } not found` } );
    const updatedAsistente = await prisma.asistente.update({
      where: { id },
      data: updateAsistenteDto!.values
    });
    res.json( updatedAsistente );
  }


  public deleteAsistente = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const asistente = await prisma.asistente.findFirst({
      where: { id }
    });

    if ( !asistente ) return res.status(404).json({ error: `Asistente with id ${ id } not found` });
    const deleted = await prisma.asistente.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Asistente with id ${ id } not found` });
  }
}