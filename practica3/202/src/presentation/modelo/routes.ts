import { Router } from 'express';
import { ModelosController } from './controller';
import { ModeloDatasourceImpl } from '../../infrastructure/datasource/modelo.datasource.impl';
import { ModeloRepositoryImpl } from '../../infrastructure/repositories/modelo.repository.impl';


export class ModeloRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ModeloDatasourceImpl();
    const modeloRepository = new ModeloRepositoryImpl( datasource );
    const modeloController = new ModelosController(modeloRepository);

    router.get('/', modeloController.getModelos );
    router.get('/:id', modeloController.getModeloById );
    
    router.post('/', modeloController.createModelo );
    router.put('/:id', modeloController.updateModelo );
    router.delete('/:id', modeloController.deleteModelo );


    return router;
  }


}
