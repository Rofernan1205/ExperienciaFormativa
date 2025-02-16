import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
const WatchesContext = createContext();

export const WatchesProvider = ({ children }) => {
  const [watches, setWatches] = useState([]);

  const fetchWatches = async () => {
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/productos/categoria/?categoria=4"
      );
      if (response.ok) {
        const data = await response.json();
        setWatches(data);
      } else {
        console.error("Error: Productos por categoría no encontrados.");
      }
    } catch (error) {
      console.error("Error al conectarse a productos por categoría:", error);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []); 

  return (
    <WatchesContext.Provider value={{ watches }}>
      {children} 
    </WatchesContext.Provider>
  );
};
WatchesProvider.propTypes ={
  children : PropTypes.node,
}

export default WatchesContext;
