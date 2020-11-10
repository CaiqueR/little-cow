import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import noImage from "../../assets/noimage.jpeg";
import { useSWRCustom } from "../../service/api";
import { useGeneral } from "../context/Provider";
import Loading from "../Loading";
import { Container, Vaquinha } from "./styles";

const Vaquinhas: React.FC = () => {
  const history = useHistory();
  const { user } = useGeneral();
  const { data } = useSWRCustom("/vaquinha", { autor: user.nome });

  const handleClick = useCallback(
    (vaquinhaId) => {
      history.push(`/vaquinha/${vaquinhaId}`);
    },
    [history],
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
        {data.length > 0 ? (
          data
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
                    <span>
                      R$
                      {vaquinha.meta}
                    </span>
                  </main>
                </div>
              </Vaquinha>
            ))
        ) : (
          <p>
            Nenhuma vaquinha encontrada. Clique{" "}
            <Link className="hoverRotate" to="/nova-vaquinha">
              aqui
            </Link>{" "}
            para criar uma vaquinha
          </p>
        )}

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
