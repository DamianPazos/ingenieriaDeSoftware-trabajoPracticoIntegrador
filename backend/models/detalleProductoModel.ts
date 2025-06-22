import db from '../config/db';

export const createDetalleProducto = (
    detalleProducto: {
        idCobranza: number;
        idCliente: number;
        cantidad: number;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO detalleProducto (idCobranza, idCliente, cantidad)
        VALUES (?, ?, ?)
    `;
    const data = [
        detalleProducto.idCobranza,
        detalleProducto.idCliente,
        detalleProducto.cantidad
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getDetalleProductoById = (
    idDetalleProducto: number,
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM detalleProducto WHERE idDetalleProducto = ?`;

    db.query(query, [idDetalleProducto], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Detalle de producto no encontrado'), null);
        }
        callback(null, results);
    });
};

export const getAllDetalleProducto = (
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM detalleProducto`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron detalles de producto'), null);
        }
        callback(null, results);
    });
};

export const updateDetalleProducto = (
    idDetalleProducto: number,
    detalleProducto: {
        idCobranza?: number;
        idCliente?: number;
        cantidad?: number;
    },
    callback: (err: any, results: any) => void
) => {
    const fields: string[] = [];
    const values: any[] = [];

    if (detalleProducto.idCobranza !== undefined) {
        fields.push('idCobranza = ?');
        values.push(detalleProducto.idCobranza);
    }
    if (detalleProducto.idCliente !== undefined) {
        fields.push('idCliente = ?');
        values.push(detalleProducto.idCliente);
    }
    if (detalleProducto.cantidad !== undefined) {
        fields.push('cantidad = ?');
        values.push(detalleProducto.cantidad);
    }
    if (fields.length === 0) {
        return callback(new Error('No se proporcionaron campos para actualizar'), null);
    }

    const query = `UPDATE detalleProducto SET ${fields.join(', ')} WHERE idDetalleProducto = ?`.trim();

    values.push(idDetalleProducto);

    db.query(query, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const deleteDetalleProducto = (
    idDetalleProducto: number,
    callback: (err: any, results: any) => void
) => {
    const query = `DELETE FROM detalleProducto WHERE idDetalleProducto = ?`;

    db.query(query, [idDetalleProducto], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};
