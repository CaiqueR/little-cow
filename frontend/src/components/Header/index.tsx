import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>Little Cow Logo</div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explorar</Link>
        </li>
        <li>
          <Link to="/pagines">Páginas</Link>
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
