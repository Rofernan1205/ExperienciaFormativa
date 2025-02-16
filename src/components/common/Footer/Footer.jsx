import "./Footer.css"
import {NavLink} from "react-router-dom"
export const Footer = () => {
  return (
    <footer className="py-3 my-4 bg-color-primary">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><NavLink to={"/"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Inicio</NavLink></li>
        <li className="nav-item"><NavLink to={"/products"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Productos</NavLink></li>
        <li className="nav-item"><NavLink to={"/cellphones"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Celulares</NavLink></li>
        <li className="nav-item"><NavLink to={"/tablets"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Tablets</NavLink></li>
        <li className="nav-item"><NavLink to={"/audios"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Audios</NavLink></li>
        <li className="nav-item"><NavLink to={"/watches"} className={({isActive})=> isActive? "nav-link px-2 text-body-secondary active-footer":"nav-link px-2 text-body-secondary"}>Relojes</NavLink></li>

      </ul>

      <div>
      <p className="text-center text-body-secondary">© 2025 RoFerMed, Portafolio</p>
      </div>
      
    </footer>
  )
}
