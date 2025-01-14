import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logopagina2.png"

export const Cabecera = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={miLogo} alt="El logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="*">
                    Conciertos
                  </NavLink>
                </li>
  
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle show"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Artistas
                  </a>
                  <ul className="dropdown-menu show" data-bs-popper="static">
                    <li>
                      <NavLink className="dropdown-item" to="/regart">
                        Registrar Artistas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/lisart">
                        Listar Artistas
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/admiart">
                        Administrar Artistas
                      </NavLink>
                    </li>
                  </ul>
                </li>
  
                <li className="nav-item">
                  <NavLink className="nav-link" to="/acer">
                    Acerca de
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  };
  