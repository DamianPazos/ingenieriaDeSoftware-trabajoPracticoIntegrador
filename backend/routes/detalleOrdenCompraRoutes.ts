import { Router } from "express";
import { createDetalleOrdenCompra, getDetalleOrdenCompraById, getAllDetalleOrdenCompra, updateDetalleOrdenCompra, deleteDetalleOrdenCompra } from "../controllers/detalleOrdenCompraController";

const router = Router();

// Endpoint para crear detalle de orden de compra
router.post("/detalleOrdenCompra", createDetalleOrdenCompra);
// Endpoint para obtener detalle de orden de compra por ID
router.get("/detalleOrdenCompra/:id", getDetalleOrdenCompraById);
// Endpoint para obtener todos los detalles de orden de compra
router.get("/detalleOrdenCompra", getAllDetalleOrdenCompra);
// Endpoint para actualizar detalle de orden de compra
router.post("/detalleOrdenCompra/:id", updateDetalleOrdenCompra);
// Endpoint para eliminar detalle de orden de compra
router.delete("/detalleOrdenCompra/:id", deleteDetalleOrdenCompra);

export default router;