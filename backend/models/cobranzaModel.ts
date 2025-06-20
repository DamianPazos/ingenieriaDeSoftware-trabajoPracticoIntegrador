import db from '../config/db';

export const createCobranza = (
    cobranza: {
        idFormaCobranza: number;
        fecha: Date;
        monto: number;
        
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO cobranza (idFormaCobranza, fecha, monto)
        VALUES (?, ?, ?)
    `;
    const data = [
        cobranza.idFormaCobranza,
        cobranza.fecha,
        cobranza.monto
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getCobranzaById = (
    idCobranza: number,
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM cobranza WHERE idCobranza = ?`;

    db.query(query, [idCobranza], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};

export const getAllCobranza = (
    callback: (err: any, results: any) => void
): void => {
    const query = `SELECT * FROM cobranza`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron cobranzas'), null);
        }
        callback(null, results);
    });
};

export const updateCobranza = (
    idCobranza: number,
    cobranza: {
        idFormaCobranza?: number;
        fecha?: Date;
        monto?: number;
    },
    callback: (err: any, results: any) => void
) => {
    
    const fields = [];
    const values: any[] = [];

    if (cobranza.idFormaCobranza !== undefined) {
        fields.push('idFormaCobranza = ?');
        values.push(cobranza.idFormaCobranza);
    };
    if (cobranza.fecha !== undefined) {
        fields.push('fecha = ?');
        values.push(cobranza.fecha);
    };
    if (cobranza.monto !== undefined) {
        fields.push('monto = ?');
        values.push(cobranza.monto);
    };
    
    const query = `
        UPDATE cobranza
        SET ${fields.join(', ')}
        WHERE idCobranza = ?
    `.trim();

    values.push(idCobranza);
    
    const data = [
        cobranza.idFormaCobranza,
        cobranza.fecha,
        cobranza.monto,
        idCobranza
    ];

    db.query(query, data, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};

export const deleteCobranza = (
    idCobranza: number,
    callback: (err: any, results: any) => void
) => {
    const query = `DELETE FROM cobranza WHERE idCobranza = ?`;

    db.query(query, [idCobranza], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};
