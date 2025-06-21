import { Router } from "express";
import { createFactura, getFacturaById, getAllFactura } from "../controllers/facturaController";

const router = Router();

// Endpoint para crear factura
router.post("/factura", createFactura);
// Endpoint para obtener factura por ID
router.get("/factura/:id", getFacturaById);
// Endpoint para obtener todas las facturas
router.get("/factura", getAllFactura);

export default router;