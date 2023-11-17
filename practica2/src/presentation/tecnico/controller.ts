import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import {CreateTecnicoDto, UpdateTecnicoDto} from '../../domain/dtos'


export class tecnicoController {
  //* DI
  constructor() { }
  public getTecnico = async( req: Request, res: Response ) => {
    const tecnico = await prisma.tecnico.findMany();
    return res.json( tecnico );
  };


  public getTecnicoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tecnico = await prisma.tecnico.findFirst({
      where: { id }
    });
    
    ( tecnico )
      ? res.json( tecnico)
      : res.status( 404 ).json( { error: `Tecnico with id ${ id } not found` } );
  };




  public createTecnico = async( req: Request, res: Response ) => {
    
    const [error, createTecnicoDto] = CreateTecnicoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tecnico = await prisma.tecnico.create({
      data: createTecnicoDto!
    });

    res.json( tecnico);

  };



  public updateTecnico = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTecnicoDto] = UpdateTecnicoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tecnico = await prisma.tecnico.findFirst({
      where: { id }
    });
    if ( !tecnico ) return res.status( 404 ).json( { error: `tecnico with id ${ id } not found` } );
    const updatedTecnico = await prisma.tecnico.update({
      where: { id },
      data: updateTecnicoDto!.values
    });
    res.json( updatedTecnico );
  }


  public deleteTecnico = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const tecnico = await prisma.tecnico.findFirst({
      where: { id }
    });

    if ( !tecnico ) return res.status(404).json({ error: `Tecnico with id ${ id } not found` });
    const deleted = await prisma.tecnico.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Tecnico with id ${ id } not found` });
  }
}