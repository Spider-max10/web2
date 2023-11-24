import { CreateModeloDto } from '../../dtos';
import { ModeloEntity } from '../../entities/modelo.entity';
import { ModeloRepository } from '../../repositories/modelo.repository';


export interface CreateModeloUseCase {
  execute( dto: CreateModeloDto ): Promise<ModeloEntity>
}

// ctrl+ shift + l
export class CreateModelo implements CreateModeloUseCase {
  
  constructor(
    private readonly repository: ModeloRepository,
  ) {}
  
  execute( dto: CreateModeloDto ): Promise<ModeloEntity> {
    return this.repository.create(dto);
  }

}

