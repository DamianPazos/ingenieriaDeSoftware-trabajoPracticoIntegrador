import db from '../config/db';

export const createFormaCobranza = (
    formaCobranza :{
        descripcion: string;
    }
    , callback: (err: any, results: any) => void
) => {
    const query = `INSERT INTO formaCobranza (descripcion) VALUES (?)`;
    db.query(query, [formaCobranza.descripcion], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

export const getFormaCobranzaById = (idFormaCobranza: number, callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM formaCobranza WHERE idFormaCobranza = ?`;
    db.query(query, [idFormaCobranza], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Forma de cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};

export const updateFormaCobranza = (
    idFormaCobranza: number,
    formaCobranza: {
        descripcion: string;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `UPDATE formaCobranza SET descripcion = ? WHERE idFormaCobranza = ?`;
    db.query(query, [formaCobranza.descripcion, idFormaCobranza], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Forma de cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};

export const deleteFormaCobranza = (
    idFormaCobranza: number,
    callback: (err: any, results: any) => void
) => {
    const query = `DELETE FROM formaCobranza WHERE idFormaCobranza = ?`;
    db.query(query, [idFormaCobranza], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Forma de cobranza no encontrada'), null);
        }
        callback(null, results);
    });
};