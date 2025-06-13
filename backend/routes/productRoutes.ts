import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const router = Router();

router.get('/productos', getProducts);

// Agrega las rutas POST, PUT y DELETE según el CRUD que necesites.

export default router;
