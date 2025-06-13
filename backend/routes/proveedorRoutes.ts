import { Router } from 'express';
import { createProveedor } from '../controllers/proveedorController';

const router = Router();

// Endpoint para crear proveedor
router.post('/proveedor', createProveedor);
// Endpoint para obtener proveedores


export default router;