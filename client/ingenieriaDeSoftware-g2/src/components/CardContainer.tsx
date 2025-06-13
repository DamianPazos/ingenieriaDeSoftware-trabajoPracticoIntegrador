/*import { useState } from "react";
import ProductCard from "./ProductCard"; // Tu componente de tarjeta
import "./CardContainer.css"; // Importa los estilos

const CardContainer = ({ items }) => {
  const [numRows, setNumRows] = useState(4); // Número inicial de filas

  const handleRowChange = (event) => {
    setNumRows(Number(event.target.value));
  };

  return (
    <div className="card-container">
      <div className="grid-layout">
        {items.slice(0, numRows * 3).map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      <select className="dropdown" onChange={handleRowChange} value={numRows}>
        {[4, 5, 6, 7, 8].map((num) => (
          <option key={num} value={num}>
            {num} filas
          </option>
        ))}
      </select>
    </div>
  );
};

export default CardContainer; */