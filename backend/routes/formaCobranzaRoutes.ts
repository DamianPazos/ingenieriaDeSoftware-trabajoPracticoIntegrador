import { Router } from "express";
import { createFormaCobranza, getFormaCobranzaById, updateFormaCobranza, deleteFormaCobranza } from "../controllers/formaCobranzaController";

const router = Router();

// Endpoint para crear forma de cobranza
router.post("/formaCobranza", createFormaCobranza);
// Endpoint para obtener forma de cobranza por ID
router.get("/formaCobranza/:id", getFormaCobranzaById);
// Endpoint para actualizar forma de cobranza
router.post("/formaCobranza/:id", updateFormaCobranza);
// Endpoint para eliminar forma de cobranza
router.delete("/formaCobranza/:id", deleteFormaCobranza);

export default router;