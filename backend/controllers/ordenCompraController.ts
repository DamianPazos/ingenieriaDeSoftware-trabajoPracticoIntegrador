import { Request, Response } from "express";
import * as ordenCompraModel from "../models/ordenCompraModel";

export const createOrdenCompra = (req: Request, res: Response): void => {
    const { idProveedor } = req.body;
    if (!idProveedor) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const ordenCompra = {
        idProveedor,
        fecha: new Date(), // Fecha actual
    };

    ordenCompraModel.createOrdenCompra(ordenCompra, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Orden de compra creada exitosamente", id: result.insertId });
        }
    });
};

export const getOrdenCompraById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idOrdenCompra = parseInt(id, 10);
    if (!idOrdenCompra || isNaN(Number(idOrdenCompra))) {
        res.status(400).json({ error: "ID de orden de compra inválido" });
        return;
    }

    ordenCompraModel.getOrdenCompraById(Number(idOrdenCompra), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Orden de compra no encontrada" });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllOrdenesCompra = (req: Request, res: Response): void => {
    ordenCompraModel.getAllOrdenesCompra((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: "No se encontraron órdenes de compra" });
        } else {
            res.json(results);
        }
    });
};

export const updateOrdenCompra = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { idProveedor, fecha } = req.body;

    // Validar que el ID sea un número
    const idOrdenCompra = parseInt(id, 10);
    if (!idOrdenCompra || isNaN(Number(idOrdenCompra))) {
        res.status(400).json({ error: "ID de orden de compra inválido" });
        return;
    }

    if (!idProveedor && !fecha) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const ordenCompra = {
        idProveedor,
        fecha,
    };

    ordenCompraModel.updateOrdenCompra(Number(idOrdenCompra), ordenCompra, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Orden de compra actualizada exitosamente" });
        }
    });
};

export const deleteOrdenCompra = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idOrdenCompra = parseInt(id, 10);
    if (!idOrdenCompra || isNaN(Number(idOrdenCompra))) {
        res.status(400).json({ error: "ID de orden de compra inválido" });
        return;
    }

    ordenCompraModel.deleteOrdenCompra(Number(idOrdenCompra), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Orden de compra no encontrada" });
        } else {
            res.json({ message: "Orden de compra eliminada exitosamente" });
        }
    });
};