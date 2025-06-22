import { Router } from 'express';
import { createProveedor, deleteProveedor, getAllProveedores, getProveedorById, updateProveedor } from '../controllers/proveedorController';

const router = Router();

// Endpoint para crear proveedor
router.post('/proveedor', createProveedor);
// Endpoint para obtener proveedores
router.get('/proveedor/:id', getProveedorById);
// Endpoint para obtener todos los proveedores
router.get('/proveedor', getAllProveedores);
// Endpoint para actualizar proveedor
router.post('/proveedor/:id', updateProveedor);
// Endpoint para eliminar proveedor
router.delete('/proveedor/:id', deleteProveedor);

export default router;