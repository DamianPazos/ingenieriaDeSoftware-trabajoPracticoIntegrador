import db from '../config/db';

export const createFactura = (
    factura: {
        idCliente: number;
        idCobranza: number;
        fecha: Date;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO factura (idCliente, ideCobranza, fecha)
        VALUES (?, ?, ?)
    `;
    const data = [
        factura.idCliente,
        factura.idCobranza,
        factura.fecha
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getFacturaById = (
    idFactura: number,
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM factura WHERE idFactura = ?`;

    db.query(query, [idFactura], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Factura no encontrada'), null);
        }
        callback(null, results);
    });
}

export const getAllFactura = (
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM factura`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron facturas'), null);
        }
        callback(null, results);
    });
};