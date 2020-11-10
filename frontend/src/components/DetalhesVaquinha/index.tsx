import { Form } from "@unform/web";
import React, { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

import food from "../../assets/food-example.jpeg";
import noImage from "../../assets/noimage.jpeg";
import api, { useSWRCustom } from "../../service/api";
import { useGeneral } from "../context/Provider";
import Input from "../Input";
import Loading from "../Loading";
import Modal from "../Modal";
import Range from "../Range";
import { Container, Details } from "./styles";

interface Params {
  vaquinhaId: string;
}

interface FormData {
  valor: string;
}

const DetalhesVaquinha: React.FC = () => {
  const { vaquinhaId } = useParams<Params>();
  const { user } = useGeneral();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { data = [], revalidate } = useSWRCustom("/vaquinha", {
    _id: vaquinhaId,
  });

  const [vaquinha] = data;

  const handleContribute = useCallback(
    async (formData: FormData, close: Function) => {
      setIsLoading(true);

      try {
        await api.post(`/vaquinha/contribuir/${vaquinhaId}`, {
          nomeContribuidor: user.nome,
          valor: formData.valor,
        });

        revalidate();
        close();
      } catch (e) {
        setError(e.response.data);
      }

      setIsLoading(false);
    },
    [revalidate, user.nome, vaquinhaId],
  );

  return (
    <Container>
      {!data ? (
        <div className="loading">
          <Loading border="4px" length="38px" color="main" />
        </div>
      ) : (
        <>
          {vaquinha?.imagens ? (
            <Carousel
              className="border-radius"
              emulateTouch
              showArrows
              swipeable
              showThumbs={false}
            >
              <img alt="" src={food} />
              <img alt="" src={food} />
            </Carousel>
          ) : (
            <img alt="Sem imagem" src={noImage} />
          )}

          <div className="main">
            <Details>
              <div className="header">
                <h1>{vaquinha?.titulo}</h1>
              </div>

              <div>
                <p>{vaquinha?.descricao}</p>
              </div>
            </Details>

            <Details width="40%">
              <div className="contribuir">
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Range
                      actualValue={vaquinha?.bitCows}
                      totalValue={vaquinha?.meta}
                    />
                    <p style={{ marginLeft: "1rem", fontSize: "1.2rem" }}>
                      {((vaquinha?.bitCows / vaquinha?.meta) * 100).toFixed(0)}%
                    </p>
                  </div>
                  <p>Arrecadado</p>
                  <span>
                    R$
                    {vaquinha?.bitCows}
                  </span>
                </div>

                <div>
                  <p>Meta</p>
                  <span>
                    R$
                    {vaquinha?.meta}
                  </span>
                </div>

                <Modal
                  title={`Contribuir para ${vaquinha?.titulo}`}
                  body={(close) => (
                    <Form
                      onSubmit={(formData: FormData) =>
                        handleContribute(formData, close)
                      }
                      className="form"
                    >
                      <span className="error">{error}</span>
                      <Input
                        name="valor"
                        placeholder="Valor a contribuir"
                        label="Valor a contribuir"
                        required
                        type="number"
                        min="0"
                      />

                      <button className="btn" disabled={isLoading}>
                        {isLoading ? (
                          <Loading length="17px" border="2px" />
                        ) : (
                          "Contribuir"
                        )}
                      </button>
                    </Form>
                  )}
                >
                  <button>Contribuir</button>
                </Modal>
              </div>
            </Details>
          </div>
        </>
      )}
    </Container>
  );
};

export default DetalhesVaquinha;
