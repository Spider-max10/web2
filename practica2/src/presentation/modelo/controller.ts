import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateModeloDto, UpdateModeloDto } from '../../domain/dtos';


export class modeloController {
  //* DI
  constructor() { }
  public getModelo = async( req: Request, res: Response ) => {
    const modelo = await prisma.modelo.findMany();
    return res.json( modelo);
  };




  public getModeloById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const modelo = await prisma.modelo.findFirst({
      where: { id }
    });
    
    ( modelo )
      ? res.json( modelo )
      : res.status( 404 ).json( { error: `Modelo with id ${ id } not found` } );
  };




  public createModelo = async( req: Request, res: Response ) => {
    
    const [error, createModeloDto] = CreateModeloDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const modelo = await prisma.modelo.create({
      data: createModeloDto!
    });

    res.json( modelo );

  };



  public updateModelo = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateModeloDto] = UpdateModeloDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const modelo = await prisma.modelo.findFirst({
      where: { id }
    });
    if ( !modelo ) return res.status( 404 ).json( { error: `Modelo with id ${ id } not found` } );
    const updatedModelo = await prisma.asistencia.update({
      where: { id },
      data: updateModeloDto!.values
    });
    res.json( updatedModelo );
  }


  public deleteModelo = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const modelo = await prisma.modelo.findFirst({
      where: { id }
    });

    if ( !modelo ) return res.status(404).json({ error: `Modelo with id ${ id } not found` });
    const deleted = await prisma.modelo.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Modelo with id ${ id } not found` });
  }
}