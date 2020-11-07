import React, { useCallback, useState } from "react";

import { Container, Details } from "./styles";
import food from "../../assets/food-example.jpeg";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import api, { useSWRCustom } from "../../service/api";
import Loading from "../Loading";
import noImage from "../../assets/noimage.jpeg";
import Modal from "../Modal";
import { Form } from "@unform/web";
import Input from "../Input";
import { useGeneral } from "../context/Provider";
import { SubmitHandler } from "@unform/core";
interface Params {
  vaquinhaId: string;
}

interface Form {
  valor: string;
}
const DetalhesVaquinha: React.FC = () => {
  const { vaquinhaId } = useParams<Params>();
  const { user, showDialog, setShowDialog } = useGeneral();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(vaquinhaId);
  const { data = [] } = useSWRCustom("/vaquinha", {
    _id: vaquinhaId,
  });

  const [vaquinha] = data;

  const handleContribute: SubmitHandler<Form> = useCallback(
    async (formData) => {
      console.log("Oi");
      setIsLoading(true);
      // try {
      //   const response = await api.post(`/vaquinha/contribuir/${vaquinhaId}`, {
      //     nomeContribuidor: user.nome,
      //     valor: formData.valor,
      //   });

      //   console.log(response.data);
      //   setShowDialog({ ...showDialog, show: false });
      // } catch (e) {
      //   setError(e.message);
      // }

      // setIsLoading(false);
    },
    [setShowDialog, showDialog, user.nome, vaquinhaId]
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
                  <p>Arrecadado</p>
                  <span>R${vaquinha?.bitCows}</span>
                </div>

                <div>
                  <p>Meta</p>
                  <span>R${vaquinha?.meta}</span>
                </div>
                <Modal title="Contribuir" trigger={<button>Contribuir</button>}>
                  <Form onSubmit={handleContribute} className="form">
                    {error}
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
