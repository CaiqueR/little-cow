import React from "react";

import { Container } from "./styles";
import maos from "../../assets/maos.png";

const Explore: React.FC = () => {
  return (
    <Container>
      <h1>Quem somos</h1>
      <img src={maos} alt="Maos" />
      <p>
        A Little Cow é uma associação cujo objetivo principal é estimular a
        solidariedade nos corações de nossos usuários. Por meio dessa
        plataforma, buscamos facilitar o processo de doações e ser uma ponte
        entre os que precisam de ajuda e os que desejam mudar vidas.
      </p>
    </Container>
  );
};

export default Explore;
