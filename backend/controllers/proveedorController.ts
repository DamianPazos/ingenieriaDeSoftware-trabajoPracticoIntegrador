import { Request, Response } from 'express';
import * as proveedorModel from '../models/proveedorModel';

export const createProveedor = (req: Request, res: Response): void => {
    const { nombre, email, telefono, direccion } = req.body;
    if (!nombre || !email || !telefono || !direccion) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    const proveedor = {
        nombre,
        email,
        telefono,
        direccion,
        estado: true // Por defecto, el proveedor está activo
    };

    proveedorModel.createProveedor(proveedor, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Proveedor creado exitosamente', id: result.insertId });
        };
    }
    );
};