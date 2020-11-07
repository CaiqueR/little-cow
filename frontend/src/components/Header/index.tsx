import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logofinal.png";
import { useGeneral } from "../context/Provider";

const Header: React.FC = () => {
  const { user, setUser } = useGeneral();
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
          <Link className="hover-effect" to="/quem-somos">
            Quem somos
          </Link>
        </li>
        <li>
          <Link className="hover-effect" to="/pagines">
            Explorar
          </Link>
        </li>
        {user.isLogged && (
          <li>
            <Link className="hover-effect" to="/vaquinhas">
              Minhas vaquinhas
            </Link>
          </li>
        )}
        <li>
          <Link to={user.isLogged ? "/nova-vaquinha" : "/register"}>
            <button className="purple">Criar uma Vaquinha</button>
          </Link>
        </li>
        <li>
          {!user.isLogged ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : (
            <button
              className="red"
              onClick={() => setUser({ isLogged: false })}
            >
              Sair
            </button>
          )}
        </li>
      </ul>
    </Container>
  );
};

export default Header;
