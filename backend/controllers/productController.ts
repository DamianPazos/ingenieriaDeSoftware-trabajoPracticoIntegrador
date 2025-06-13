import { Request, Response } from 'express';
import * as productModel from '../models/productModel';

// Esta función obtiene todos los productos
// y los envía como respuesta en formato JSON.
export const getProducts = (req: Request, res: Response): void => {
  productModel.getAllProducts((err, products) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(products);
    }
  });
};

// Aquí agregarás otros métodos, ej.: createProduct, updateProduct, deleteProduct