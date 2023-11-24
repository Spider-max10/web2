import { CreateModeloDto, UpdateModeloDto } from '../dtos';
import { ModeloEntity } from '../entities/modelo.entity';



export abstract class ModeloRepository {

  abstract create( createModeloDto: CreateModeloDto ): Promise<ModeloEntity>;

  abstract getAll(): Promise<ModeloEntity[]>;

  abstract findById( id: number ): Promise<ModeloEntity>;
  abstract updateById( updateModeloDto: UpdateModeloDto ): Promise<ModeloEntity>;
  abstract deleteById( id: number ): Promise<ModeloEntity>;
}
