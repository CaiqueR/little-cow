import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../service/api";
import { useGeneral } from "../context/Provider";
import Input from "../Input";
import Loading from "../Loading";
import { Container, ContainerLogin } from "./styles";

interface FormData {
  titulo: string;
  descricaoCurta: string;
  descricao: string;
  meta: string;
}

const NovaVaquinha: React.FC = () => {
  const history = useHistory();
  const { user } = useGeneral();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (formData) => {
      setIsLoading(true);
      try {
        const response = await api.post("/vaquinha", {
          ...formData,
          autor: user.nome,
        });

        history.push(`/vaquinha/${response.data._id}`);
      } catch (e) {
        const errorResponse = e.response.data;
        const field = Object.keys(formData).find(
          (key) => formData[key] === errorResponse.key,
        );
        setError(`Já existe uma vaquinha cadastrado com o mesmo ${field}.`);
      }

      setIsLoading(false);
    },
    [history, user],
  );

  return (
    <Container>
      <ContainerLogin>
        <h1>Criar vaquinha</h1>
        <Form onSubmit={handleSubmit}>
          {error}
          <Input name="titulo" placeholder="Título" label="Título" required />

          <Input
            name="descricaoCurta"
            placeholder="Breve descrição"
            label="Breve descrição"
            required
          />

          <Input
            name="descricao"
            placeholder="Descrição completa"
            label="Descrição completa"
            required
          />

          <Input
            name="meta"
            placeholder="Meta"
            label="Meta"
            min="0"
            required
            type="number"
          />

          <Input
            multiple
            name="images"
            placeholder="Imagens"
            label="Imagens"
            type="file"
          />

          <button disabled={isLoading}>
            {isLoading ? (
              <Loading length="17px" border="2px" />
            ) : (
              "Criar vaquinha"
            )}
          </button>
        </Form>
      </ContainerLogin>
    </Container>
  );
};

export default NovaVaquinha;
