import React, { useCallback, useEffect } from "react";
import { Form } from "@unform/web";
import { SubmitHandler } from "@unform/core";

import Input from "../Input";
import logo from "../../assets/logofinal.png";
import { Container, ContainerLogin } from "./styles";
import { useGeneral } from "../context/Provider";

interface FormData {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const { setShowHeader } = useGeneral();

  useEffect(() => {
    setShowHeader(false);

    return () => setShowHeader(true);
  }, [setShowHeader]);

  const handleSubmit: SubmitHandler<FormData> = useCallback((formData) => {
    console.log(formData.login);
    console.log(formData.password);
  }, []);

  return (
    <Container>
      <ContainerLogin>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="login" placeholder="Login" label="Login" required />
          <Input
            name="password"
            placeholder="Senha"
            label="Senha"
            type="password"
            required
          />

          <button>Entrar</button>
        </Form>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
