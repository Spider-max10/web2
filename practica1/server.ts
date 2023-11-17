import express from 'express';
import asistenciaRoutes from './asistenciaRoutes'; // Asegúrate de que la ruta sea correcta
import consumiblesRouter from './consumibles.routes';
import asistenteRouter from './asistentes.routes';

const app = express();

app.use(express.json());

// Agrega otras configuraciones y rutas según sea necesario

// Rutas para Asistencia
app.use('/api/asistencia', asistenciaRoutes); // Cambié la ruta a '/api/asistencia'

// Rutas para Consumible
app.use('/api/consumibles', consumiblesRouter); // Agregamos las rutas para Consumible

app.use('/api/asistente', asistenteRouter); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
