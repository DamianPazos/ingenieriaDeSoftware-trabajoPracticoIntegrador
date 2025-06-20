import { Request, Response } from "express";
import * as formaCobranzaModel from "../models/formaCobranzaModel";

export const createFormaCobranza = (req: Request, res: Response): void => {
    const { descripcion } = req.body;
    if (!descripcion) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const formaCobranza = {
        descripcion
    };

    formaCobranzaModel.createFormaCobranza(formaCobranza, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Forma de cobranza creada exitosamente", id: result.insertId });
        }
    });
};

export const getFormaCobranzaById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idFormaCobranza = parseInt(id, 10);
    if (!idFormaCobranza || isNaN(Number(idFormaCobranza))) {
        res.status(400).json({ error: "ID de forma de cobranza inválido" });
        return;
    }

    formaCobranzaModel.getFormaCobranzaById(Number(idFormaCobranza), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Forma de cobranza no encontrada" });
        } else {
            res.json(results[0]);
        }
    });
};

export const updateFormaCobranza = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { descripcion } = req.body;

    // Validar que el ID sea un número
    const idFormaCobranza = parseInt(id, 10);
    if (!idFormaCobranza || isNaN(Number(idFormaCobranza))) {
        res.status(400).json({ error: "ID de forma de cobranza inválido" });
        return;
    }

    if (!descripcion) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const formaCobranza = {
        descripcion
    };

    formaCobranzaModel.updateFormaCobranza(Number(idFormaCobranza), formaCobranza, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: "Forma de cobranza no encontrada" });
        } else {
            res.json({ message: "Forma de cobranza actualizada exitosamente" });
        }
    });
};

export const deleteFormaCobranza = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idFormaCobranza = parseInt(id, 10);
    if (!idFormaCobranza || isNaN(Number(idFormaCobranza))) {
        res.status(400).json({ error: "ID de forma de cobranza inválido" });
        return;
    }

    formaCobranzaModel.deleteFormaCobranza(Number(idFormaCobranza), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: "Forma de cobranza no encontrada" });
        } else {
            res.json({ message: "Forma de cobranza eliminada exitosamente" });
        }
    });
};

