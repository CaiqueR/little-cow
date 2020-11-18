/* eslint arrow-body-style: ["error", "as-needed"] */

import React, { useEffect } from "react";
import CountUp from "react-countup";

import { Line } from "rc-progress";

import noImage from "../../assets/noimage.jpeg";
import { useSWRCustom } from "../../service/api";
import { Container, Content, ExploreVaquinha } from "./styles";

interface IExploreVaquinha {
  id: string;
  titulo: string;
  descricaoCurta: string;
  meta: number;
  images: string;
  bitCows: number;
  encerrada: boolean;
}

const Exploring: React.FC<IExploreVaquinha> = ({
  id,
  titulo,
  descricaoCurta,
  meta,
  images,
  bitCows,
  encerrada,
}) => {
  const { data } = useSWRCustom("/vaquinha", { sort: "contribuicoes" });

  // useEffect(() => {}, [data]);

  if (data) {
    return (
      <Container>
        {data.map((item) => (
          <ExploreVaquinha key={item.id}>
            <img src={noImage} alt="No img" />
            <div className="content">
              <div className="body">
                <h1>{item.titulo}</h1>
                <h3>{item.descricaoCurta}</h3>
              </div>
              <div className="footer">
                <span>Meta </span>
                <CountUp
                  end={item.meta}
                  prefix="R$ "
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={3}
                />
              </div>
              <div className="bar">
                <Line
                  percent={50}
                  strokeWidth={1.5}
                  strokeColor="#2B9A48"
                  trailColor="#D8D8D8"
                />
              </div>
            </div>
          </ExploreVaquinha>
        ))}
      </Container>
    );
  }
  return <Container />;
};

export default Exploring;
