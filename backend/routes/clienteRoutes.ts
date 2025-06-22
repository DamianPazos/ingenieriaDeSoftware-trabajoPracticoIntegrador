import { Router } from "express";
import { createCliente, deleteCliente, getAllClientes, getClienteById, updateCliente } from "../controllers/clienteController";

const router = Router();

// Endpoint para crear cliente
router.post("/cliente", createCliente);
// Endpoint para obtener cliente por ID
router.get("/cliente/:id", getClienteById);
// Endpoint para obtener todos los clientes 
router.get("/cliente", getAllClientes);
// Endpoint para actualizar cliente
router.post("/cliente/:id", updateCliente);
// Endpoint para eliminar cliente
router.delete("/cliente/:id", deleteCliente);

export default router;