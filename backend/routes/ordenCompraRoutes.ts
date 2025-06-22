import { Router } from 'express';
import { createOrdenCompra, deleteOrdenCompra, getAllOrdenesCompra, getOrdenCompraById, updateOrdenCompra } from '../controllers/ordenCompraController';

const router = Router();

// Endpoint para crear orden de compra
router.post('/ordenCompra', createOrdenCompra);
// Endpoint para obtener orden de compra por ID
router.get('/ordenCompra/:id', getOrdenCompraById);
// Endpoint para obtener todas las ordenes de compra
router.get('/ordenCompra', getAllOrdenesCompra);
// Endpoint para actualizar orden de compra
router.post('/ordenCompra/:id', updateOrdenCompra);
// Endpoint para eliminar orden de compra
router.delete('/ordenCompra/:id', deleteOrdenCompra);

export default router;