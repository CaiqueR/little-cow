import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";

import { Container, ContainerLogin } from "./styles";

interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const handleSubmit: SubmitHandler<FormData> = useCallback((formData) => {
    console.log(formData);
  }, []);

  return (
    <Container>
      <ContainerLogin>
        <h1>Registre-se</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome completo"
            label="Nome completo"
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
            placeholder="Confirmar Senha"
            label="Confirmar Senha"
            type="password"
            required
          />

          <button>Registrar</button>
        </Form>
        <span>
          Já possuí cadastro? <Link to="/login">Fazer login</Link>
        </span>
      </ContainerLogin>
    </Container>
  );
};

export default Register;
