import { Router } from 'express';
import { ConectoresController } from './controller';
import { ConectorDatasourceImpl } from '../../infrastructure/datasource/conector.datasource.impl';
import { ConectorRepositoryImpl } from '../../infrastructure/repositories/conector.repository.impl';


export class ConectorRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ConectorDatasourceImpl();
    const conectorRepository = new ConectorRepositoryImpl( datasource );
    const conectorController = new ConectoresController(conectorRepository);

    router.get('/', conectorController.getConectores );
    router.get('/:id', conectorController.getConectorById );
    
    router.post('/', conectorController.createConector );
    router.put('/:id', conectorController.updateConector );
    router.delete('/:id', conectorController.deleteConector );


    return router;
  }


}

