import { ModeloEntity } from '../../entities/modelo.entity';
import { ModeloRepository } from '../../repositories/modelo.repository';


export interface GetModelosUseCase {
  execute(): Promise<ModeloEntity[]>
}


export class GetModelos implements GetModelosUseCase {
  
  constructor(
    private readonly repository: ModeloRepository,
  ) {}
  
  execute(): Promise<ModeloEntity[]> {
    return this.repository.getAll();
  }

}

