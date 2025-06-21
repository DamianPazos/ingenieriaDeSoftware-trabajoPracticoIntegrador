import {Request, Response} from 'express';
import * as facturaModel from '../models/facturaModel';

export const createFactura = (req: Request, res: Response): void => {
    const { idCliente, idCobranza} = req.body;
    if (!idCliente || !idCobranza) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    const factura = {
        idCliente,
        idCobranza,
        fecha: new Date(),
    };

    facturaModel.createFactura(factura, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Factura creada exitosamente', id: result.insertId });
        }
    });
};

export const getFacturaById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idFactura = parseInt(id, 10);
    if (!idFactura || isNaN(Number(idFactura))) {
        res.status(400).json({ error: 'ID de factura inválido' });
        return;
    }

    facturaModel.getFacturaById(Number(idFactura), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Factura no encontrada' });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllFactura = (req: Request, res: Response): void => {
    facturaModel.getAllFactura((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No se encontraron facturas' });
        } else {
            res.json(results);
        }
    });
};