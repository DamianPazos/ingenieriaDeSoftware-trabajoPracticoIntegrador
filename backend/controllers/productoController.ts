import { Request, Response } from 'express';
import * as productoModel from '../models/productoModel';

export const createProducto = (req: Request, res: Response): void => {
    const { nombre, descripcion, stock, precioUnitario } = req.body;
    if (!nombre || !descripcion || !stock || !precioUnitario) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    const producto = {
        nombre,
        descripcion,
        stock,
        precioUnitario,
        estado: true // Por defecto, el proveedor está activo
    };

    productoModel.createProducto(producto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Producto creado exitosamente', id: result.insertId });
        };
    }
    );
};

export const getProductoById = (req: Request, res: Response): void => {
    const {id} = req.params;
    // Validar que el ID sea un número
    const idProducto = parseInt(id, 10);
    if (!idProducto || isNaN(Number(idProducto))) {
        res.status(400).json({ error: 'ID de producto inválido' });
        return;
    };

    productoModel.getProductoById(Number(idProducto), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllProductos = (req: Request, res: Response): void => {
    productoModel.getAllProductos((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No se encontraron productos' });
        } else {
            res.json(results);
        }
    });
};

export const updateProducto = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idProducto = parseInt(id, 10);
    if (!idProducto || isNaN(Number(idProducto))) {
        res.status(400).json({ error: 'ID de producto inválido' });
        return;
    }
    //Extraigo los campos del cuerpo de la solicitud
    const { nombre, descripcion, stock, precioUnitario, estado } = req.body;

    const producto = {
        nombre: nombre !== undefined ? nombre : undefined, // Si no se proporciona, no se actualiza
        email: descripcion !== undefined ? descripcion : undefined, // Si no se proporciona, no se actualiza
        telefono: stock !== undefined ? stock : undefined, // Si no se proporciona, no se actualiza
        direccion: precioUnitario !== undefined ? precioUnitario : undefined, // Si no se proporciona, no se actualiza
        estado: estado !== undefined ? Boolean(estado) : undefined // Si no se proporciona, no se actualiza
    };

    productoModel.updateProducto(Number(idProducto), producto, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.json({ message: 'Producto actualizado exitosamente' });
        }
    });
};

export const deleteProducto = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idProducto = parseInt(id, 10);
    if (!idProducto || isNaN(Number(idProducto))) {
        res.status(400).json({ error: 'ID de producto inválido' });
        return;
    }

    productoModel.deleteProducto(Number(idProducto), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.json({ message: 'Producto eliminado exitosamente' });
        }
    });
}