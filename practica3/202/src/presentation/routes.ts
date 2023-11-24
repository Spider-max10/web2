import { Router } from 'express';

import { AsistenciasRoutes  } from './asistencias/routes';
import { ClienteRoutes  } from './clientes/routes';
import { ModeloRoutes } from './modelo/routes';
import { SerieRoutes } from './series/routes';
import { AsistenteIdRoutes } from './asistente/routes';
import { AreaRoutes } from './area/routes';
import { TecnicoRoutes } from './tecnico/routes';
import { ConectorRoutes } from './conector/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistencia', AsistenciasRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/modelo', ModeloRoutes.routes );
    router.use('/api/serie', SerieRoutes.routes );
    router.use('/api/area', AreaRoutes.routes );
    router.use('/api/asistente', AsistenteIdRoutes.routes );
    router.use('/api/tecnico', TecnicoRoutes.routes );
    router.use('/api/conector', ConectorRoutes.routes );
    
    return router;
  }


}

