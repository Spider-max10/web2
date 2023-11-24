import { CreateModeloDto, ModeloDatasource, ModeloEntity, ModeloRepository, UpdateModeloDto } from '../../domain';


export class ModeloRepositoryImpl implements ModeloRepository {

  constructor(
    private readonly datasource: ModeloDatasource,
  ) { }


  create( createModeloDto: CreateModeloDto ): Promise<ModeloEntity> {
    return this.datasource.create( createModeloDto );
  }

  getAll(): Promise<ModeloEntity[]> {
    return this.datasource.getAll();
1  }

  findById( id: number ): Promise<ModeloEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateModeloDto: UpdateModeloDto ): Promise<ModeloEntity> {
    return this.datasource.updateById( updateModeloDto );
  }

  deleteById( id: number ): Promise<ModeloEntity> {
    return this.datasource.deleteById( id );
  }

}


