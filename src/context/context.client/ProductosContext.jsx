import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchTablets = async () => {
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/productos/"
      );
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
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
    <ProductosContext.Provider value={{ productos }}>
      {children} 
    </ProductosContext.Provider>
  );
};
ProductosProvider.propTypes = {
  children: PropTypes.node, 
};
export default ProductosContext;