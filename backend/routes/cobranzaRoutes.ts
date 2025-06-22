import { Router } from "express";
import { createCobranza, getCobranzaById, getAllCobranza, updateCobranza, deleteCobranza } from "../controllers/cobranzaController";

const router = Router();

// Endpoint para crear cobranza
router.post("/cobranza", createCobranza);
// Endpoint para obtener cobranza por ID
router.get("/cobranza/:id", getCobranzaById);
// Endpoint para obtener todas las cobranzas
router.get("/cobranza", getAllCobranza);
// Endpoint para actualizar cobranza
router.post("/cobranza/:id", updateCobranza);
// Endpoint para eliminar cobranza
router.delete("/cobranza/:id", deleteCobranza);

export default router;