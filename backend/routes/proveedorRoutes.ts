import { Router } from 'express';
import { createProveedor, getProveedorById } from '../controllers/proveedorController';
import { get } from 'http';


const router = Router();

// Endpoint para crear proveedor
router.post('/proveedor', createProveedor);
// Endpoint para obtener proveedores
router.get('/proveedor/:id', getProveedorById);


export default router;