import db from '../config/db';

export const createProducto = (
    producto: {
        nombre: string;
        descripcion: string;
        stock: number;
        precioUnitario: number;
        estado: boolean;
    },
    callback: (err: any, results: any) => void
) => {
    const query = `
        INSERT INTO producto (nombre, descripcion, stock, precioUnitario, estado) VALUES (?, ?, ?, ?, ?)
    `;
    const data = [
        producto.nombre,
        producto.descripcion,
        producto.stock,
        producto.precioUnitario,
        producto.estado ? 1 : 0 // Convertir booleano a entero
    ];

    db.query(query, data, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

export const getProductoById = ( idProducto: number, callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM producto WHERE idProducto = ?`;

    db.query(query, [idProducto], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('Producto no encontrado'), null);
        }
        callback(null, results);
    });
};

export const getAllProductos = (callback: (err: any, results: any) => void): void => {
    const query = `SELECT * FROM producto`;

    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        if (!results) {
            return callback(new Error('No se encontraron productos'), null);
        }
        callback(null, results);
    });
};

export const updateProducto = (
    idProducto: number,
    producto: {
        nombre?: string;
        descripcion?: string;
        stock?: number;
        precioUnitario?: number;
        estado?: boolean;
    }, 
    callback:(err: any,result:any) => void): void => {

    const fields: string[] = [];    
    const values: any[] = [];

    //Armar la consulta de actualización
    if (producto.nombre !== undefined) {
        fields.push('nombre = ?');
        values.push(producto.nombre);
    }
    if (producto.descripcion !== undefined) {
        fields.push('email = ?');
        values.push(producto.descripcion);
    }
    if (producto.stock !== undefined) {
        fields.push('telefono = ?');
        values.push(producto.stock);
    }
    if (producto.precioUnitario !== undefined) {
        fields.push('direccion = ?');
        values.push(producto.precioUnitario);
    }
    if (producto.estado !== undefined) {
        fields.push('estado = ?');  
        values.push(producto.estado ? 1 : 0); // Convertir booleano a entero
    }
    if (fields.length === 0) {
        return callback(new Error('No se proporcionaron campos para actualizar'), null);
    }

    const query = `UPDATE producto SET ${fields.join(", ")} WHERE idproducto = ?`.trim();
    values.push(idProducto); // Agregar el ID al final de los valores

    db.query(query, values, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('Producto no encontrado'), null);
        }
        callback(null, result);
    }
    );
};

export const deleteProducto = (idProducto: number, callback: (err: any, result: any) => void): void => {
    const query = `DELETE FROM producto WHERE idProducto = ?`;

    db.query(query, [idProducto], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        if (!result) {
            return callback(new Error('Producto no encontrado'), null);
        }
        callback(null, result);
    });
}