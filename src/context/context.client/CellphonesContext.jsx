import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const CellphonesContext = createContext();

export const CellphonesProvider = ({ children }) => {
  const [cellphones, setCellphones] = useState([]);

  const fetchCellphones = async () => {
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/productos/categoria/?categoria=2"
      );
      if (response.ok) {
        const data = await response.json();
        setCellphones(data);
      } else {
        console.error("Error: Productos por categoría no encontrados.");
      }
    } catch (error) {
      console.error("Error al conectarse a productos por categoría:", error);
    }
  };

  useEffect(() => {
    fetchCellphones();
  }, []);

  return (
    <CellphonesContext.Provider value={{ cellphones }}>
      {children}
    </CellphonesContext.Provider>
  );
};

CellphonesProvider.propTypes = {
  children: PropTypes.node,
};

export default CellphonesContext;
