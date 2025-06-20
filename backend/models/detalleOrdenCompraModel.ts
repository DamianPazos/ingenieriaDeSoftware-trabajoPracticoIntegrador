import db from '../config/db.js';

export const createDetalleOrdenCompra = (
    detalleOrdenCompra: {
        idProducto: number;
        idOrdenCompra: number;
        cantidad: number;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO detalleOrdenCompra (idProducto, idOrdenCompra, cantidad)
        VALUES (?, ?, ?)
    `;
    const data = [
        detalleOrdenCompra.idProducto,
        detalleOrdenCompra.idOrdenCompra,
        detalleOrdenCompra.cantidad
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getDetalleOrdenCompraById = (
    idDetalleOrdenCompra: number,
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM detalleOrdenCompra WHERE idDetalleOrdenCompra = ?`;

    db.query(query, [idDetalleOrdenCompra], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Detalle de orden de compra no encontrado'), null);
        }
        callback(null, results);
    });
};  

export const getAllDetalleOrdenCompra = (
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM detalleOrdenCompra`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron detalles de órdenes de compra'), null);
        }
        callback(null, results);
    });
};

export const updateDetalleOrdenCompra = (
    idDetalleOrdenCompra: number,
    detalleOrdenCompra: {
        idProducto?: number;
        idOrdenCompra?: number;
        cantidad?: number;
    },
    callback: (err: any, results: any) => void
) => {

    const fields: string[] = [];    
    const values: any[] = [];

    if (detalleOrdenCompra.idProducto !== undefined) {
        fields.push('idProducto = ?');
        values.push(detalleOrdenCompra.idProducto);
    };
    if (detalleOrdenCompra.idOrdenCompra !== undefined) {
        fields.push('idOrdenCompra = ?');
        values.push(detalleOrdenCompra.idOrdenCompra);
    };

    const query = `
        UPDATE detalleOrdenCompra
        SET ${fields.join(', ')}
        WHERE idDetalleOrdenCompra = ?
    `.trim();
    
    values.push(idDetalleOrdenCompra);

    const data = [
        detalleOrdenCompra.idProducto,
        detalleOrdenCompra.idOrdenCompra,
        detalleOrdenCompra.cantidad,
        idDetalleOrdenCompra
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const deleteDetalleOrdenCompra = (
    idDetalleOrdenCompra: number,
    callback: (err: any, results: any) => void
) => {
    const query = `DELETE FROM detalleOrdenCompra WHERE idDetalleOrdenCompra = ?`;

    db.query(query, [idDetalleOrdenCompra], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Detalle de orden de compra no encontrado'), null);
        }
        callback(null, results);
    });
};