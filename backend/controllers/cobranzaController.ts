import { Response, Request } from "express";
import * as cobranzaModel from "../models/cobranzaModel";

export const createCobranza = (req: Request, res: Response): void => {
    const { idFormaCobranza, monto } = req.body;
    if (!idFormaCobranza || !monto) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const cobranza = {
        idFormaCobranza,
        fecha: new Date(), // Fecha actual
        monto
    };

    cobranzaModel.createCobranza(cobranza, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Cobranza creada exitosamente", id: result.insertId });
        }
    });
};

export const getCobranzaById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idCobranza = parseInt(id, 10);
    if (!idCobranza || isNaN(Number(idCobranza))) {
        res.status(400).json({ error: "ID de cobranza inválido" });
        return;
    }

    cobranzaModel.getCobranzaById(Number(idCobranza), (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Cobranza no encontrada" });
        } else {
            res.json(results[0]);
        }
    });
};

export const getAllCobranza = (req: Request, res: Response): void => {
    cobranzaModel.getAllCobranza((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: "No se encontraron cobranzas" });
        } else {
            res.json(results);
        }
    });
};

export const updateCobranza = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { idFormaCobranza, fecha, monto } = req.body;

    // Validar que el ID sea un número
    const idCobranza = parseInt(id, 10);
    if (!idCobranza || isNaN(Number(idCobranza))) {
        res.status(400).json({ error: "ID de cobranza inválido" });
        return;
    }

    if (!idFormaCobranza && !fecha && !monto) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
        return;
    }

    const cobranza = {
        idFormaCobranza,
        fecha,
        monto
    };

    cobranzaModel.updateCobranza(Number(idCobranza), cobranza, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Cobranza actualizada exitosamente" });
        }
    });
};

export const deleteCobranza = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Validar que el ID sea un número
    const idCobranza = parseInt(id, 10);
    if (!idCobranza || isNaN(Number(idCobranza))) {
        res.status(400).json({ error: "ID de cobranza inválido" });
        return;
    }

    cobranzaModel.deleteCobranza(Number(idCobranza), (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Cobranza eliminada exitosamente" });
        }
    });
};