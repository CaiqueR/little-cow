/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logofinal.png";
import { useGeneral } from "../context/Provider";
import { Container } from "./styles";

const Header: React.FC = () => {
  const { user, setUser } = useGeneral();
  const location = useLocation();
  const [url, setUrl] = useState(globalThis.location.pathname);
  // const checkBox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <img src={logo} alt="Little Cow Logo" />
      {/* <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        ref={checkBox}
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon" />
      </label> */}
      <ul>
        <li>
          <Link
            className={`hover-effect ${url === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`hover-effect ${
              url.includes("/quem-somos") ? "active" : ""
            }`}
            to="/quem-somos"
          >
            Quem somos
          </Link>
        </li>
        <li>
          <Link
            className={`hover-effect ${
              url.includes("/explore") ? "active" : ""
            }`}
            to="/explore"
          >
            Explorar
          </Link>
        </li>
        {user.isLogged && (
          <li>
            <Link
              className={`hover-effect ${
                url.includes("/vaquinhas") ? "active" : ""
              }`}
              to="/vaquinhas"
            >
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
            <Link to="/">
              <button
                className="red"
                onClick={() => setUser({ isLogged: false })}
              >
                Sair
              </button>
            </Link>
          )}
        </li>
      </ul>
    </Container>
  );
};

export default Header;
