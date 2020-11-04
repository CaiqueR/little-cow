import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../Content";
import { useGeneral } from "../context/Provider";
import Header from "../Header";
import Login from "../Login";
import ProtectedRoute from "../routes/ProtectedRoute";

import { Container } from "./style";

export const Page: React.FC = () => {
  const { showHeader } = useGeneral();
  return (
    <Container>
      {showHeader && <Header />}
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/login" component={Login} />
        <Route path="/explore" component={Teste2} />
        <ProtectedRoute path="/protect" component={Teste2} />
      </Switch>
    </Container>
  );
};

export function Teste2() {
  return <div>TE23</div>;
}
