import React from "react";

import { Container } from "./styles";

const Content: React.FC = () => {
  return (
    <Container>
      <h1>Ajude alguém a financiar seu projeto</h1>
      <span>Alguem ficará muito feliz com sua ajuda</span>

      <div>
        <button>Explorar projetos</button>
        <button className="purple">Iniciar projeto</button>
      </div>
    </Container>
  );
};

export default Content;