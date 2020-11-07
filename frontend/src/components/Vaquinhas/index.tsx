import React, { useCallback } from "react";

import { Container, Vaquinha } from "./styles";
import food from "../../assets/food-example.jpeg";
import { useHistory } from "react-router-dom";
import { useGeneral } from "../context/Provider";
import { useSWRCustom } from "../../service/api";
import Loading from "../Loading";

import noImage from "../../assets/noimage.jpeg";
const Vaquinhas: React.FC = () => {
  const history = useHistory();
  const { user } = useGeneral();
  const { data, error } = useSWRCustom("/vaquinha", { autor: user.nome });

  console.log(data);
  const handleClick = useCallback(
    (vaquinhaId) => {
      history.push(`/vaquinha/${vaquinhaId}`);
    },
    [history]
  );

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "2rem",
          justifyContent: "center",
        }}
      >
        <Loading border="4px" length="32px" color="main" />
      </div>
    );
  }
  return (
    <Container>
      <h1>Minhas vaquinhas</h1>

      <ul>
        {data
          .sort((a, b) => {
            if (a.dataCadastro < b.dataCadastro) {
              return 1;
            }
            if (a.dataCadastro > b.dataCadastro) {
              return -1;
            }
            return 0;
          })
          .map((vaquinha) => (
            <Vaquinha
              key={vaquinha._id}
              onClick={() => handleClick(vaquinha._id)}
            >
              <img src={noImage} alt="Food Example" />
              <div>
                <h1>{vaquinha.titulo}</h1>
                <p>{vaquinha.descricaoCurta}</p>
                <main>
                  <span>OBJETIVO</span>
                  <span>R${vaquinha.meta}</span>
                </main>
              </div>
            </Vaquinha>
          ))}

        {/* <Vaquinha>
          <img src={food2} alt="Food Example" />
          <div>
            <h1>Comida Vaquinha</h1>
            <p>
              Me ajude a fazer essa comida ficar boa por favor, eu imploro, me
              ajuda aí irmão.
            </p>
            <div className="target">
              <span>OBJETIVO</span>
              <span>$29,293</span>
            </div>
          </div>
        </Vaquinha> */}
      </ul>
    </Container>
  );
};

export default Vaquinhas;
