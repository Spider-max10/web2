import { Router } from 'express';
import { clienteController } from './controller';

export class ClienteRoutes {
  static get routes(): Router {
    const router = Router();
    const ClientesController = new clienteController();
    router.get('/', ClientesController.getClientes);
    router.get('/:id', ClientesController.getClienteById );
    router.post('/', ClientesController.createCliente );
    router.put('/:id', ClientesController.updateCliente );
    router.delete('/:id', ClientesController.deleteCliente );
    return router;
  }
}
