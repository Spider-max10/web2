import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAreaDto, UpdateAreaDto } from '../../domain/dtos';


export class AreaController {
  //* DI
  constructor() { }
  public getArea = async( req: Request, res: Response ) => {
    const area = await prisma.area.findMany();
    return res.json( area);
  };




  public getAreaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const area = await prisma.area.findFirst({
      where: { id }
    });
    
    ( area )
      ? res.json( area )
      : res.status( 404 ).json( { error: `Area with id ${ id } not found` } );
  };




  public createArea = async( req: Request, res: Response ) => {
    
    const [error, createAreaDto] = CreateAreaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const area = await prisma.area.create({
    data : createAreaDto!
    });

    res.json( area );

  };



  public updateArea = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateAreaDto] = UpdateAreaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const area = await prisma.area.findFirst({
      where: { id }
    });
    if ( !area ) return res.status( 404 ).json( { error: `Area with id ${ id } not found` } );
    const updatedArea = await prisma.area.update({
      where: { id },
      data: updateAreaDto!.values
    });
    res.json( updatedArea );
  }


  public deleteArea = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const area = await prisma.area.findFirst({
      where: { id }
    });

    if ( !area ) return res.status(404).json({ error: `Area with id ${ id } not found` });
    const deleted = await prisma.area.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Area with id ${ id } not found` });
  }
}