import { Request, Response } from "express";
import * as detalleOrdenCompraModel from "../models/detalleOrdenCompraModel";

export const createDetalleOrdenCompra = (req: Request, res: Response): void => {
    const { idProducto, idOrdenCompra, cantidad } = req.body;
    if (!idProducto || !cantidad || !idOrdenCompra) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const detalleOrdenCompra = {
        idOrdenCompra,
        idProducto,
        cantidad
    };

    detalleOrdenCompraModel.createDetalleOrdenCompra(detalleOrdenCompra, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Detalle de orden de compra creado exitosamente", id: result.insertId });
        }
    });
};

export const getDetalleOrdenCompraById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idDetalleOrdenCompra = parseInt(id, 10);
    if (!idDetalleOrdenCompra || isNaN(Number(idDetalleOrdenCompra))) {
        res.status(400).json({ error: "ID de detalle de orden de compra inválido" });
        return;
    }

    detalleOrdenCompraModel.getDetalleOrdenCompraById(Number(idDetalleOrdenCompra), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Detalle de orden de compra no encontrado" });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllDetalleOrdenCompra = (req: Request, res: Response): void => {
    detalleOrdenCompraModel.getAllDetalleOrdenCompra((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: "No se encontraron detalles de órdenes de compra" });
        } else {
            res.json(results);
        }
    });
};

export const updateDetalleOrdenCompra = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { idProducto, idOrdenCompra, cantidad } = req.body;

    // Validar que el ID sea un número
    const idDetalleOrdenCompra = parseInt(id, 10);
    if (!idDetalleOrdenCompra || isNaN(Number(idDetalleOrdenCompra))) {
        res.status(400).json({ error: "ID de detalle de orden de compra inválido" });
        return;
    }

    if (!idProducto && !cantidad && !idOrdenCompra) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const detalleOrdenCompra = {
        idProducto,
        idOrdenCompra,
        cantidad
    };

    detalleOrdenCompraModel.updateDetalleOrdenCompra(idDetalleOrdenCompra, detalleOrdenCompra, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Detalle de orden de compra actualizado exitosamente" });
        }
    });
};

export const deleteDetalleOrdenCompra = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idDetalleOrdenCompra = parseInt(id, 10);
    if (!idDetalleOrdenCompra || isNaN(Number(idDetalleOrdenCompra))) {
        res.status(400).json({ error: "ID de detalle de orden de compra inválido" });
        return;
    }

    detalleOrdenCompraModel.deleteDetalleOrdenCompra(Number(idDetalleOrdenCompra), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Detalle de orden de compra eliminado exitosamente" });
        }
    });
};

