import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logofinal.png";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Little Cow Logo" />

      <ul>
        <li>
          <Link className="hover-effect" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/explore">
            Explorar
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/pagines">
            Páginas
          </Link>
        </li>
        <li>
          <Link to="/new-project">
            <button className="purple">Iniciar um projeto</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
