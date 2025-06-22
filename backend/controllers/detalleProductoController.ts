import { Request, Response } from 'express';
import * as detalleProductoModel from '../models/detalleProductoModel';

export const createDetalleProducto = (req: Request, res: Response): void => {
    const { idCobranza, idCliente, cantidad } = req.body;
    if (!idCobranza || !idCliente || !cantidad) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    const detalleProducto = {
        idCobranza,
        idCliente,
        cantidad
    };

    detalleProductoModel.createDetalleProducto(detalleProducto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Detalle de producto creado exitosamente', id: result.insertId });
        }
    });
};

export const getDetalleProductoById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idDetalleProducto = parseInt(id, 10);
    if (!idDetalleProducto || isNaN(Number(idDetalleProducto))) {
        res.status(400).json({ error: 'ID de detalle de producto inválido' });
        return;
    }

    detalleProductoModel.getDetalleProductoById(Number(idDetalleProducto), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Detalle de producto no encontrado' });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllDetalleProducto = (req: Request, res: Response): void => {
    detalleProductoModel.getAllDetalleProducto((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No se encontraron detalles de producto' });
        } else {
            res.json(results);
        }
    });
};

export const updateDetalleProducto = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { idCobranza, idCliente, cantidad } = req.body;

    // Validar que el ID sea un número
    const idDetalleProducto = parseInt(id, 10);
    if (!idDetalleProducto || isNaN(Number(idDetalleProducto))) {
        res.status(400).json({ error: 'ID de detalle de producto inválido' });
        return;
    }

    if (!idCobranza && !idCliente && !cantidad) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    const detalleProducto = {
        idCobranza,
        idCliente,
        cantidad
    };

    detalleProductoModel.updateDetalleProducto(Number(idDetalleProducto), detalleProducto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Detalle de producto actualizado exitosamente' });
        }
    });
};

export const deleteDetalleProducto = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idDetalleProducto = parseInt(id, 10);
    if (!idDetalleProducto || isNaN(Number(idDetalleProducto))) {
        res.status(400).json({ error: 'ID de detalle de producto inválido' });
        return;
    }

    detalleProductoModel.deleteDetalleProducto(Number(idDetalleProducto), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Detalle de producto no encontrado o no se realizaron cambios' });
        } else {
            res.json({ message: 'Detalle de producto eliminado exitosamente' });
        }
    });
};