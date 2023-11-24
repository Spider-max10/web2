import { ModeloEntity } from '../../entities/modelo.entity';
import { ModeloRepository } from '../../repositories/modelo.repository';


export interface GetModeloUseCase {
  execute( id: number ): Promise<ModeloEntity>
}


export class GetModelo implements GetModeloUseCase {
  
  constructor(
    private readonly repository: ModeloRepository,
  ) {}
  
  execute( id: number ): Promise<ModeloEntity> {
    return this.repository.findById(id);
  }

}

