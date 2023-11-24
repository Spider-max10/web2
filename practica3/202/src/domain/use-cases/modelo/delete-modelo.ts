import { ModeloEntity } from '../../entities/modelo.entity';
import { ModeloRepository } from '../../repositories/modelo.repository';


export interface DeleteModeloUseCase {
  execute( id: number ): Promise<ModeloEntity>
}

export class DeleteModelo implements DeleteModeloUseCase {
  
  constructor(
    private readonly repository: ModeloRepository,
  ) {}
  
  execute( id: number ): Promise<ModeloEntity> {
    return this.repository.deleteById(id);
  }

}

