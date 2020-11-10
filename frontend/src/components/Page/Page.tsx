import React from "react";
import { Route, Switch } from "react-router-dom";

import Content from "../Content";
import { useGeneral } from "../context/Provider";
import DetalhesVaquinha from "../DetalhesVaquinha";
import Explore from "../Explore";
import Header from "../Header";
import Login from "../Login";
import NovaVaquinha from "../NovaVaquinha";
import Register from "../Register";
import ProtectedRoute from "../routes/ProtectedRoute";
import Vaquinhas from "../Vaquinhas";
import { Container } from "./style";

export const Page: React.FC = () => {
  const { showHeader } = useGeneral();
  return (
    <Container>
      {showHeader && <Header />}
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/quem-somos" component={Explore} />
        <ProtectedRoute path="/protect" component={Teste2} />
        <ProtectedRoute path="/vaquinhas" component={Vaquinhas} />
        <ProtectedRoute path="/nova-vaquinha" component={NovaVaquinha} />
        <Route path="/vaquinha/:vaquinhaId" component={DetalhesVaquinha} />
      </Switch>
    </Container>
  );
};

export function Teste2() {
  const { user } = useGeneral();
  return <h1>{user.nome}</h1>;
}
