import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAsistenciaDto, UpdateAsistenciaDto } from '../../domain/dtos';


export class AsistenciasController {
  //* DI
  constructor() { }
  public getAsistencias = async( req: Request, res: Response ) => {
    const asistencia = await prisma.asistencia.findMany();
    return res.json( asistencia);
  };




  public getAsistenciaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const asistencia = await prisma.asistencia.findFirst({
      where: { id }
    });
    
    ( asistencia )
      ? res.json( asistencia )
      : res.status( 404 ).json( { error: `Asistencia with id ${ id } not found` } );
  };




  public createAsistencia = async( req: Request, res: Response ) => {
    
    const [error, createAsistenciaDto] = CreateAsistenciaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const asistencia = await prisma.asistencia.create({
      data: createAsistenciaDto!
    });

    res.json( asistencia );

  };



  public updateAsistencia = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAsistenciaDto] = UpdateAsistenciaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const asistencia = await prisma.asistencia.findFirst({
      where: { id }
    });
    if ( !asistencia ) return res.status( 404 ).json( { error: `Asistencia with id ${ id } not found` } );
    const updatedAsistencia = await prisma.asistencia.update({
      where: { id },
      data: updateAsistenciaDto!.values
    });
    res.json( updatedAsistencia );
  }


  public deleteAsistencia = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const asistencia = await prisma.asistencia.findFirst({
      where: { id }
    });

    if ( !asistencia ) return res.status(404).json({ error: `Asistencia with id ${ id } not found` });
    const deleted = await prisma.asistencia.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Asistencia with id ${ id } not found` });
  }
}