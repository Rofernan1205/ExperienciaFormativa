import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
const AudiosContext = createContext();

export const AudiosProvider = ({ children }) => {
  const [audios, setAudios] = useState([]);

  const fetchAudios = async () => {
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/productos/categoria/?categoria=5"
      );
      if (response.ok) {
        const data = await response.json();
        setAudios(data);
      } else {
        console.error("Error: Productos por categoría no encontrados.");
      }
    } catch (error) {
      console.error("Error al conectarse a productos por categoría:", error);
    }
  };

  useEffect(() => {
    fetchAudios();
  }, []); 

  return (
    <AudiosContext.Provider value={{ audios }}>
      {children} 
    </AudiosContext.Provider>
  );
};
AudiosProvider.propTypes = {
  children: PropTypes.node, 
};

export default AudiosContext;
