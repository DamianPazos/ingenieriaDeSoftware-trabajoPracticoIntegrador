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
}