/* eslint arrow-body-style: ["error", "always"] */

import React from "react";

import { Line } from "rc-progress";

import noImage from "../../assets/noimage.jpeg";
import { Container, ExploreVaquinha } from "./styles";

interface IExploreVaquinha {
  titulo: string;
  descricaoCurta: string;
  meta: string;
  images: string;
  bitCows: number;
  encerrada: boolean;
}

const Exploring: React.FC<IExploreVaquinha> = ({
  titulo,
  descricaoCurta,
  meta,
  images,
  bitCows,
  encerrada,
}) => {
  return (
    <Container>
      <ExploreVaquinha>
        <img src={noImage} alt="No img" />
        <div className="content">
          <Line
            percent={80}
            strokeWidth={1.5}
            strokeColor="#2B9A48"
            trailColor="#D8D8D8"
          />
          <h1>Titulo</h1>
          <h3>Descrição Curta</h3>
          <div className="footer">
            <span>Objetivo</span>
            <span>10000</span>
          </div>
        </div>
      </ExploreVaquinha>
    </Container>
  );
};

export default Exploring;
