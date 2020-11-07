import React, { useCallback, useLayoutEffect, useState } from "react";
import { Form } from "@unform/web";
import { SubmitHandler } from "@unform/core";

import Input from "../Input";
import logo from "../../assets/logofinal.png";
import { Container, ContainerLogin } from "./styles";
import { useGeneral } from "../context/Provider";
import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";
import Loading from "../Loading";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const { setShowHeader, setUser } = useGeneral();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (formData) => {
      setIsLoading(true);
      try {
        const response = await api.get("/usuario", {
          params: { email: formData.email },
        });
        const [user] = response.data;

        if (!user) {
          throw new Error("Usuário não encontrado!");
        }

        console.log(user);

        setUser({ isLogged: true, ...user });
        history.push("/vaquinhas");
      } catch (e) {
        setError(e.message);
      }

      setIsLoading(false);
    },
    [history, setUser]
  );

  useLayoutEffect(() => {
    setShowHeader(false);

    return () => setShowHeader(true);
  }, [setShowHeader]);

  return (
    <Container>
      <ContainerLogin>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          {error}
          <Input name="email" placeholder="Email" label="Email" required />
          <Input
            name="password"
            placeholder="Senha"
            label="Senha"
            type="password"
            required
          />

          <button disabled={isLoading}>
            {isLoading ? <Loading length="17px" border="2px" /> : "Login"}
          </button>
        </Form>
        <span>
          Ainda não possuí conta? <Link to="/register">Registre-se</Link>
        </span>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
