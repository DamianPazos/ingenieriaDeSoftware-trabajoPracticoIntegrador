import db from '../config/db';

export const createProveedor = (
    proveedor: {
        nombre: string;
        email: string;
        telefono: string;
        direccion: string;
        estado: boolean;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO proveedores (nombre, email, telefono, direccion, estado) VALUES (?, ?, ?, ?, ?)
    `;
    const data = [
        proveedor.nombre,
        proveedor.email,
        proveedor.telefono,
        proveedor.direccion,
        proveedor.estado ? 1 : 0 // Convertir booleano a entero
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getProveedorById = ( idProveedor: number, callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM proveedores WHERE idProveedor = ?`;

    db.query(query, [idProveedor], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Proveedor no encontrado'), null);
        }
        callback(null, results);
    });
};

export const getAllProveedores = (callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM proveedores`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron proveedores'), null);
        }
        callback(null, results);
    });
};

export const updateProveedor = (
    idProveedor: number,
    proveedor: {
        nombre?: string;
        email?: string;
        telefono?: string;
        direccion?: string;
        estado?: boolean;
    }, 
    callback:(err: any,result:any) => void): void => {

    const fields: string[] = [];    
    const values: any[] = [];

    //Armar la consulta de actualización
    if (proveedor.nombre !== undefined) {
        fields.push('nombre = ?');
        values.push(proveedor.nombre);
    }
    if (proveedor.email !== undefined) {
        fields.push('email = ?');
        values.push(proveedor.email);
    }
    if (proveedor.telefono !== undefined) {
        fields.push('telefono = ?');
        values.push(proveedor.telefono);
    }
    if (proveedor.direccion !== undefined) {
        fields.push('direccion = ?');
        values.push(proveedor.direccion);
    }
    if (proveedor.estado !== undefined) {
        fields.push('estado = ?');  
        values.push(proveedor.estado ? 1 : 0); // Convertir booleano a entero
    }
    if (fields.length === 0) {
        return callback(new Error('No se proporcionaron campos para actualizar'), null);
    }


    const query = `UPDATE proveedores SET ${fields.join(", ")} WHERE idProveedor = ?`.trim();
    values.push(idProveedor); // Agregar el ID al final de los valores

    db.query(query, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('Proveedor no encontrado'), null);
        }
        callback(null, result);
    }
    );
};

export const deleteProveedor = (idProveedor: number, callback: (err: any, result: any) => void): void => {
    const query = `DELETE FROM proveedores WHERE idProveedor = ?`;

    db.query(query, [idProveedor], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('Proveedor no encontrado'), null);
        }
        callback(null, result);
    });
}