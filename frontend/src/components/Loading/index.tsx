import React from "react";

import { Container } from "./styles";

interface Props {
  length: string;
  border: string;
  color?: string;
}
const Loading: React.FC<Props> = ({
  length = "1x",
  border,
  color = "white",
}) => (
  <Container className="lds-ring" length={length} border={border} color={color}>
    <div />
    <div className="ring1 lds-ring" />
    <div className="ring2 lds-ring" />
    <div className="ring3 lds-ring" />
  </Container>
);

export default Loading;
