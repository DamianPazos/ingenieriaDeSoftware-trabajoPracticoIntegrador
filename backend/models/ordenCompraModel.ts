import bd from '../config/db.js';

export const createOrdenCompra = (
    ordenCompra: {
        idProveedor: number;
        fecha: Date;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO ordenesDeCompra (idProveedor, fecha)
        VALUES (?, ?)
    `;
    const data = [
        ordenCompra.idProveedor,
        ordenCompra.fecha
    ];

    bd.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getOrdenCompraById = (
    idOrdenCompra: number,
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM ordenesDeCompra WHERE idOrdenCompra = ?`;

    bd.query(query, [idOrdenCompra], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Orden de compra no encontrada'), null);
        }
        callback(null, results);
    });
};

export const getAllOrdenesCompra = (
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM ordenesDeCompra`;

    bd.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron órdenes de compra'), null);
        }
        callback(null, results);
    });
};

export const updateOrdenCompra = (
    idOrdenCompra: number,
    ordenCompra: {
        idProveedor: number;
        fecha: Date;
    },
    callback: (err: any, results: any) => void
) => {

    const fields: string[] = [];    
    const values: any[] = [];

    if (ordenCompra.idProveedor !== undefined) {
        fields.push('idProveedor = ?');
        values.push(ordenCompra.idProveedor);
    }
    if (ordenCompra.fecha !== undefined) {
        fields.push('fecha = ?');
        values.push(ordenCompra.fecha);
    }
    if (fields.length === 0) {
        return callback(new Error('No se proporcionaron campos para actualizar'), null);
    }

    const query = `
        UPDATE ordenesDeCompra
        SET ${fields.join(", ")}
        WHERE idOrdenCompra = ?
    `.trim();
    values.push(idOrdenCompra);


    const data = [
        ordenCompra.idProveedor,
        ordenCompra.fecha,
        idOrdenCompra
    ];

    bd.query(query, data, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Orden de compra no encontrada'), null);
        }
        callback(null, results);
    });
};

export const deleteOrdenCompra = (
    idOrdenCompra: number,
    callback: (err: any, results: any) => void
) => {
    const query = `DELETE FROM ordenesDeCompra WHERE idOrdenCompra = ?`;

    bd.query(query, [idOrdenCompra], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Orden de compra no encontrada'), null);
        }
        callback(null, results);
    });
};