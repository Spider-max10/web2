import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos';


export class clienteController {
  //* DI
  constructor() { }
  public getClientes = async( req: Request, res: Response ) => {
    const clienteId = await prisma.cliente.findMany();
    return res.json( clienteId );
  };




  public getClienteById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const clienteId = await prisma.cliente.findFirst({
      where: { id }
    });
    
    ( clienteId )
      ? res.json( clienteId )
      : res.status( 404 ).json( { error: `Cliente with id ${ id } not found` } );
  };




  public createCliente = async( req: Request, res: Response ) => {
    
    const [error, createClienteDto] = CreateClienteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const clienteId = await prisma.cliente.create({
      data: createClienteDto!
    });

    res.json( clienteId );

  };



  public updateCliente = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateClienteDto] = UpdateClienteDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const clienteId = await prisma.cliente.findFirst({
      where: { id }
    });
    if ( !clienteId ) return res.status( 404 ).json( { error: `Cliente with id ${ id } not found` } );
    const updatedCliente = await prisma.cliente.update({
      where: { id },
      data: updateClienteDto!.values
    });
    res.json( updatedCliente );
  }


  public deleteCliente = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    if ( !cliente ) return res.status(404).json({ error: `Cliente with id ${ id } not found` });
    const deleted = await prisma.cliente.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Cliente with id ${ id } not found` });
  }
}