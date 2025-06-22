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

export const getProveedorById = (req: Request, res: Response): void => {
    const {id} = req.params;
    // Validar que el ID sea un número
    const idProveedor = parseInt(id, 10);
    if (!idProveedor || isNaN(Number(idProveedor))) {
        res.status(400).json({ error: 'ID de proveedor inválido' });
        return;
    };

    proveedorModel.getProveedorById(Number(idProveedor), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllProveedores = (req: Request, res: Response): void => {
    proveedorModel.getAllProveedores((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No se encontraron proveedores' });
        } else {
            res.json(results);
        }
    });
};

export const updateProveedor = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idProveedor = parseInt(id, 10);
    if (!idProveedor || isNaN(Number(idProveedor))) {
        res.status(400).json({ error: 'ID de proveedor inválido' });
        return;
    }
    //Extraigo los campos del cuerpo de la solicitud
    const { nombre, email, telefono, direccion, estado } = req.body;

    const proveedor = {
        nombre: nombre !== undefined ? nombre : undefined, // Si no se proporciona, no se actualiza
        email: email !== undefined ? email : undefined, // Si no se proporciona, no se actualiza
        telefono: telefono !== undefined ? telefono : undefined, // Si no se proporciona, no se actualiza
        direccion: direccion !== undefined ? direccion : undefined, // Si no se proporciona, no se actualiza
        estado: estado !== undefined ? Boolean(estado) : undefined // Si no se proporciona, no se actualiza
    };

    proveedorModel.updateProveedor(Number(idProveedor), proveedor, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
        } else {
            res.json({ message: 'Proveedor actualizado exitosamente' });
        }
    });
};

export const deleteProveedor = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idProveedor = parseInt(id, 10);
    if (!idProveedor || isNaN(Number(idProveedor))) {
        res.status(400).json({ error: 'ID de proveedor inválido' });
        return;
    }

    proveedorModel.deleteProveedor(Number(idProveedor), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
        } else {
            res.json({ message: 'Proveedor eliminado exitosamente' });
        }
    });
}