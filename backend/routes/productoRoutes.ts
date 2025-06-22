import { Router } from 'express';
import { createProducto, deleteProducto, getAllProductos, getProductoById, updateProducto } from '../controllers/productoController';
const router = Router();

// Endpoint para crear proveedor
router.post('/producto', createProducto);
// Endpoint para obtener proveedores
router.get('/producto/:id', getProductoById);
// Endpoint para obtener todos los proveedores
router.get('/producto', getAllProductos);
// Endpoint para actualizar proveedor
router.post('/producto/:id', updateProducto);
// Endpoint para eliminar proveedor
router.delete('/producto/:id', deleteProducto);

export default router;