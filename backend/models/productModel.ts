import db from '../config/db';

// Ejemplo de modelo para traer productos desde la base de datos
export const getAllProducts = (callback: (err: any, results: any) => void) => {
  const query = "SELECT * FROM productos";
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Aquí podrías agregar funciones para crear, actualizar y eliminar productos