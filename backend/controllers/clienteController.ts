import { Request, Response } from "express";
import * as clienteModel from "../models/clienteModel";

export const createCliente = (req: Request, res: Response): void => {
    const { nombre, direccion, email, dni, telefono } = req.body;
    if (!nombre || !email || !telefono || !direccion || !dni) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const cliente = {
        nombre,
        direccion,
        email,
        dni,
        telefono,
        estado: true // Por defecto, el cliente está activo
    };

    clienteModel.createCliente(cliente, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Cliente creado exitosamente", id: result.insertId });
        }
    });
};

export const getClienteById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idCliente = parseInt(id, 10);
    if (!idCliente || isNaN(Number(idCliente))) {
        res.status(400).json({ error: "ID de cliente inválido" });
        return;
    }

    clienteModel.getClienteById(Number(idCliente), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Cliente no encontrado" });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllClientes = (req: Request, res: Response): void => {
    clienteModel.getAllClientes((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: "No se encontraron clientes" });
        } else {
            res.json(results);
        }
    });
};

export const updateCliente = (req: Request, res: Response): void => {
    const { id } = req.params;
    const idCliente = parseInt(id, 10);
    if (!idCliente || isNaN(Number(idCliente))) {
        res.status(400).json({ error: "ID de cliente inválido" });
        return;
    }

    const clienteUpdates = req.body;

    clienteModel.updateCliente(idCliente, clienteUpdates, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Cliente no encontrado o no se realizaron cambios" });
        } else {
            res.json({ message: "Cliente actualizado exitosamente" });
        }
    });
};

export const deleteCliente = (req: Request, res: Response): void => {
    const { id } = req.params;
    const idCliente = parseInt(id, 10);
    if (!idCliente || isNaN(Number(idCliente))) {
        res.status(400).json({ error: "ID de cliente inválido" });
        return;
    }

    clienteModel.deleteCliente(idCliente, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Cliente no encontrado" });
        } else {
            res.json({ message: "Cliente eliminado exitosamente" });
        }
    });
};
