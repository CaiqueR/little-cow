import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useGeneral } from "../context/Provider";
import { Container } from "./styles";

const Content: React.FC = () => {
  const { user } = useGeneral();
  return (
    <Container>
      <Helmet>
        <title>Little Cow | Página Inicial</title>
      </Helmet>
      <h1>Transforme um sonho em realidade</h1>
      <span>
        Contribua com projetos de terceiros, ou crie o seu próprio projeto.{" "}
        <a href="#">Saiba Como</a>
      </span>

      <div>
        <Link to="/explore">
          <button>Explorar projetos</button>
        </Link>
        <Link to={user.isLogged ? "/nova-vaquinha" : "/register"}>
          <button className="purple">Iniciar projeto</button>
        </Link>
      </div>
    </Container>
  );
};

export default Content;
