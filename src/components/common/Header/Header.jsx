import "./Header.css";
import { Nav } from "../../common";
export const Header = () => {
  return (
    <header className="bg-color-secondary sticky-top">
      <div className="bg-color-secondary">
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="text-light">Desarrollado por: </span>
            <a className="badge badge-secondary" href="/">
              <span className="text-white">Sandro Fernandez Medina</span>
            </a>
          </div>
          <div>
            <ul className="list-unstyled d-flex justify-content-center gap-2 margged-cero ">
              <li>
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-color-primary">
          <div className="container padded-cero">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};
