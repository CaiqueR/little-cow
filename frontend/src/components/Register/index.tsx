import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../service/api";
import { useGeneral } from "../context/Provider";

import Input from "../Input";
import Loading from "../Loading";

import { Container, ContainerLogin } from "./styles";

interface FormData {
  email: string;
  nome: string;
  date: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { user, setUser } = useGeneral();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (formData) => {
      setIsLoading(true);
      try {
        const response = await api.post("/usuario", {
          nome: formData.nome,
          dataNascimento: formData.date,
          email: formData.email,
        });

        setUser({ isLogged: true, ...response.data });
      } catch (e) {
        console.log(e.response.data);
        const error = e.response.data;
        const field = Object.keys(formData).find(
          (key) => formData[key] === error.key
        );
        setError(`Já existe um usuário cadastrado com o mesmo ${field}.`);
      }

      setIsLoading(false);
    },
    [setUser]
  );

  if (user.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ContainerLogin>
        <h1>Registre-se</h1>
        <Form onSubmit={handleSubmit}>
          {error}
          <Input
            name="nome"
            placeholder="Nome completo"
            label="Nome completo"
            required
          />
          <Input
            name="date"
            placeholder="Data de nascimento"
            label="Data de nascimento"
            type="date"
            required
          />
          <Input
            name="email"
            placeholder="Email"
            label="Email"
            required
            type="email"
          />
          <Input
            name="password"
            placeholder="Senha"
            label="Senha"
            type="password"
            required
          />

          <Input
            name="confirmPassword"
            placeholder="Confirmar senha"
            label="Confirmar senha"
            type="password"
            required
          />

          <button disabled={isLoading}>
            {isLoading ? <Loading length="17px" border="2px" /> : "Registrar"}
          </button>
        </Form>
        <span>
          Já possui cadastro? <Link to="/login">Fazer login</Link>
        </span>
      </ContainerLogin>
    </Container>
  );
};

export default Register;
