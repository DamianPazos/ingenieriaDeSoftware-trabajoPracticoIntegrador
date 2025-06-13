import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Ej.: localhost
  user: process.env.DB_USER,      // Tu usuario de MySQL
  password: process.env.DB_PASSWORD,  // Tu contraseña
  database: process.env.DB_NAME       // Base de datos a utilizar
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    process.exit(1);
  }
  console.log('🟢 Conectado a MySQL');
});

export default connection;