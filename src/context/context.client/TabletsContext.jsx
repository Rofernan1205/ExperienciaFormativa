import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
const TabletsContext = createContext();

export const TabletsProvider = ({ children }) => {
  const [tablets, setTablets] = useState([]);

  const fetchTablets = async () => {
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/productos/categoria/?categoria=3"
      );
      if (response.ok) {
        const data = await response.json();
        setTablets(data);
      } else {
        console.error("Error: Productos por categoría no encontrados.");
      }
    } catch (error) {
      console.error("Error al conectarse a productos por categoría:", error);
    }
  };

  useEffect(() => {
    fetchTablets();
  }, []); 

  return (
    <TabletsContext.Provider value={{ tablets }}>
      {children} 
    </TabletsContext.Provider>
  );
};
TabletsProvider.propTypes = {
  children: PropTypes.node, 
};
export default TabletsContext;
