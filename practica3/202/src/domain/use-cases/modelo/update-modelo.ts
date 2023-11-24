import { UpdateModeloDto } from '../../dtos';
import { ModeloEntity } from '../../entities/modelo.entity';
import { ModeloRepository } from '../../repositories/modelo.repository';


export interface UpdateModeloUseCase {
  execute( dto: UpdateModeloDto ): Promise<ModeloEntity>
}


export class UpdateModelo implements UpdateModeloUseCase {
  
  constructor(
    private readonly repository: ModeloRepository,
  ) {}
  
  execute( dto: UpdateModeloDto ): Promise<ModeloEntity> {
    return this.repository.updateById(dto);
  }

}

