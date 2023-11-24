import { prisma } from '../../data/postgres';
import { CreateModeloDto, ModeloDatasource, ModeloEntity, UpdateModeloDto } from '../../domain';




export class ModeloDatasourceImpl implements ModeloDatasource {

  async create( createModeloDto: CreateModeloDto ): Promise<ModeloEntity> {
    const modelo = await prisma.modelo.create({
      data: createModeloDto!
    });

    return ModeloEntity.fromObject( modelo );
  }

  async getAll(): Promise<ModeloEntity[]> {
    const modelos = await prisma.modelo.findMany();
    return modelos.map( modelo => ModeloEntity.fromObject(modelo) );
  }

  async findById( id: number ): Promise<ModeloEntity> {
    const modelo = await prisma.modelo.findFirst({
      where: { id }
    });

    if ( !modelo ) throw `Modelo with id ${ id } not found`;
    return ModeloEntity.fromObject(modelo);
  }

  async updateById( updateModeloDto: UpdateModeloDto ): Promise<ModeloEntity> {
    await this.findById( updateModeloDto.id );
    
    const updatedModelo = await prisma.modelo.update({
      where: { id: updateModeloDto.id },
      data: updateModeloDto!.values
    });

    return ModeloEntity.fromObject(updatedModelo);
  }

  async deleteById( id: number ): Promise<ModeloEntity> {
    await this.findById( id );
    const deleted = await prisma.modelo.delete({
      where: { id }
    });

    return ModeloEntity.fromObject( deleted );
  }

}