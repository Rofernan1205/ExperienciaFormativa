import "./Nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary padded-cero">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">
          Sercoplus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cellphones"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Celulares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tablets"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Tablets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/audios"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Audios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/watches"
                className={({ isActive }) =>
                  isActive ? "nav-link active-nav" : "nav-link"
                }
              >
                Relojes
              </NavLink>
            </li>
          </ul>

          <div>
          <NavLink
                to="https://myelectronicsapi.onrender.com/admin/login/?next=/admin/"
                className={({ isActive }) =>
                  isActive ? "nav-link fs-4 active-admin" : "nav-link text-muted fs-4"
                }
              >
              <i className="bi bi-person"></i>
              </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
