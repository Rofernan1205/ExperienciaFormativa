import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const {children} = props
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  //Si existe registro de token en el localstorege iniciar directo
  useEffect(() => {
    if (accessToken) {
      fetchUser();
    }
  }, [accessToken]);

  //Validar si ya existe usuario logueado
  const fetchUser = async () => {
    try {
      const response = await fetch("https://myelectronicsapi.onrender.com/user/me/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
      } else if (response.status === 401) {
        refreshAccessToken();
      }
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  //Solicitar token
  const login = async (email, password) => {
    try {
      const response = await fetch("https://myelectronicsapi.onrender.com/auths/token/", {    
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access);
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        console.log(data.access);
      } else {
        console.log("Error al solicitar token");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    try {
      const response = await fetch(
        "https://myelectronicsapi.onrender.com/auths/token/refresh/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access);
        localStorage.setItem("access_token", data.access);
      } else {
        logout();
      }
    } catch (error) {
      console.error(error);
      logout();
    }
  };

  //Cerrar sesion en caso que refreshToken sea invalido
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };



  return (
    <AuthContext.Provider value={{ user, login, logout, accessToken }}>
        {children}
    </AuthContext.Provider>
);

};
export default AuthContext



 


