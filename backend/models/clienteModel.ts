import db from '../config/db';

export const createCliente = (
    cliente: {
        nombre: string;
        direccion: string;
        email: string;
        dni: string;
        telefono: string;
        estado: boolean;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO cliente (nombre, domicilio, email, dni, telefono, estado) VALUES (?, ?, ?, ?, ?, ?)
    `;
    const data = [
        cliente.nombre,
        cliente.direccion,
        cliente.email,
        cliente.dni,
        cliente.telefono,
        cliente.estado ? 1 : 0 // Convertir booleano a entero
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getClienteById = (idCliente: number, callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM cliente WHERE idCliente = ?`;

    db.query(query, [idCliente], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Cliente no encontrado'), null);
        }
        callback(null, results);
    });
};

export const getAllClientes = (callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM cliente`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron clientes'), null);
        }
        callback(null, results);
    });
};

export const updateCliente = (
    idCliente: number,
    cliente: {
        nombre?: string;
        direccion?: string;
        email?: string;
        dni?: string;
        telefono?: string;
        estado?: boolean;
    },
    callback: (err: any, results: any) => void
) => {
    const fields: string[] = [];    
    const values: any[] = [];

    if (cliente.nombre !== undefined) {
        fields.push('nombre = ?');
        values.push(cliente.nombre);
    };
    if (cliente.direccion !== undefined) {
        fields.push('domicilio = ?');
        values.push(cliente.direccion);
    };
    if (cliente.email !== undefined) {
        fields.push('email = ?');
        values.push(cliente.email);
    };
    if (cliente.dni !== undefined) {
        fields.push('dni = ?');
        values.push(cliente.dni);
    };
    if (cliente.telefono !== undefined) {
        fields.push('telefono = ?');
        values.push(cliente.telefono);
    };
    if (cliente.estado !== undefined) {
        fields.push('estado = ?');
        values.push(cliente.estado ? 1 : 0); // Convertir booleano a entero
    };
    if (fields.length === 0) {
        return callback(new Error('No se proporcionaron campos para actualizar'), null);
    };

    const query = `UPDATE cliente SET ${fields.join(", ")} WHERE idCliente = ?`.trim();
    values.push(idCliente); // Agregar el ID al final de los valores
    db.query(query, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('No se pudo actualizar el cliente'), null);
        }
        callback(null, result);
    });
};

export const deleteCliente = (idCliente: number, callback: (err: any, result: any) => void): void => {
    const query = `DELETE FROM cliente WHERE idCliente = ?`;

    db.query(query, [idCliente], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('No se pudo eliminar el cliente'), null);
        }
        callback(null, result);
    });
};