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