import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import proveedorRoutes from './routes/proveedorRoutes';
import productoRoutes from './routes/productoRoutes';
import clienteRoutes from './routes/clienteRoutes';
import formaCobranzaRoutes from './routes/formaCobranzaRoutes';
import ordenComprasRoutes from './routes/ordenCompraRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT_BACKEND || 5000;

app.use(cors());
app.use(express.json()); // Para parsear JSON en los request

// Todas las rutas definidas de productos se agruparán bajo /api
app.use('/api', proveedorRoutes);
app.use('/api', productoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', formaCobranzaRoutes);
app.use('/api', ordenComprasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});