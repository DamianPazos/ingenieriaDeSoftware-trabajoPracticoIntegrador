import { Router } from "express";
import { createDetalleProducto, getAllDetalleProducto, getDetalleProductoById, updateDetalleProducto, deleteDetalleProducto } from "../controllers/detalleProductoController";

const router = Router();

// Endpoint para crear detalle de producto
router.post("/", createDetalleProducto);
// Endpoint para obtener detalle de producto por ID
router.get("/", getAllDetalleProducto);
// Endpoint para obtener todos los detalles de productos
router.get("/:id", getDetalleProductoById);
// Endpoint para actualizar detalle de producto
router.put("/:id", updateDetalleProducto);
// Endpoint para eliminar detalle de producto
router.delete("/:id", deleteDetalleProducto);

export default router;
