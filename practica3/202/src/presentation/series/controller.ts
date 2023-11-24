import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import {CreateSeriesDto, UpdateSeriesDto} from '../../domain/dtos/'


export class serieController {
  //* DI
  constructor() { }
  public getSerie = async( req: Request, res: Response ) => {
    const serie = await prisma.serie.findMany();
    return res.json( serie );
  };




  public getSerieById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const serie = await prisma.serie.findFirst({
      where: { id }
    });
    
    ( serie )
      ? res.json( serie )
      : res.status( 404 ).json( { error: `Serie with id ${ id } not found` } );
  };




  public createSerie = async( req: Request, res: Response ) => {
    
    const [error, createSerieDto] = CreateSeriesDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const serie = await prisma.serie.create({
      data: createSerieDto!
    });

    res.json( serie );

  };



  public updateSerie = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateSerieDto] = UpdateSeriesDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const serie = await prisma.serie.findFirst({
      where: { id }
    });
    if ( !serie ) return res.status( 404 ).json( { error: `Serie with id ${ id } not found` } );
    const updatedSerie = await prisma.serie.update({
      where: { id },
      data: updateSerieDto!.values
    });
    res.json( updateSerieDto );
  }


  public deleteSerie = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const serie = await prisma.serie.findFirst({
      where: { id }
    });

    if ( !serie ) return res.status(404).json({ error: `Serie with id ${ id } not found` });
    const deleted = await prisma.serie.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Serie with id ${ id } not found` });
  }
}